define(function(require){
	var jquery = require('jquery');
	var handlebars = require('handlebars');
	var gridTmplt = require('text!html/grid.html');
	var logoTmplt = require('text!html/logo.html');
	var introTmplt = require('text!html/intro.html');
	var levelTmplt = require('text!html/level.html');
	var statsTmplt = require('text!html/statistics.html');

	var Logoquiz = function(obj){
		if(localStorage.getItem('logos') !== null){
			this.logoData = JSON.parse(localStorage.getItem('logos'));
		}
		else{
			this.logoData = obj;
			localStorage.setItem("logos",JSON.stringify(this.logoData));
		}
	};
	
	Handlebars.registerHelper('showStars', function(count,status) {
		  var str = "";
		  for(var i=0;i<count;i++){
			  if(!status)
				  str+= '<img src="app/images/small/difcul.jpg" height="13px" width="13px">';
			  else
				  str+= '<img src="app/images/small/score.jpg" height="13px" width="13px">';
		  }
		  return new Handlebars.SafeString(str);
	});
	
	Handlebars.registerHelper("showProgress", function(completed,total) {
		  var perc = completed*100/total;
		  return perc;
	});
	
	Handlebars.registerHelper("calcStars", function(logos) {
		  var totalStar = 0;
		  for(var i=0;i<logos.length;i++){
			  totalStar += logos[i].star;
		  }
		  return totalStar;
	});
	
	Handlebars.registerHelper("getLogoToUnlock", function(status) {
		  console.log(status);
		  return 10;
	});
	
	Logoquiz.prototype = {
		init: function(){
			this.currItem = {};
			this.renderIntro();
			this.renderLevel();
			this.addEventHandlers();
			this.loadLastLogo();
			this.manageRouting();
		},
		
		renderIntro : function(){
			$('.intro').html(Handlebars.compile(introTmplt)());
		},
		renderLevel : function(){
			$('.levels').html(Handlebars.compile(levelTmplt)(this.logoData));
		},

		renderApp : function(){
			$('.grid').html(Handlebars.compile(gridTmplt)(this.logoData.levels[this.currItem.level]));
		},
		renderStats : function(){
			$('.statistics').html(Handlebars.compile(statsTmplt)());
		},
		
		
		addEventHandlers : function(){
			var self = this;
			$('.grid-container .grid').on('click','.grid-cell',function(e){
				
				self.currItem.name = $(this).data("name");
				self.currItem.ans = $(this).data("ans");
				self.currItem.id = $(this).data("id");
				self.currItem.status = $(this).data("status");
				localStorage.setItem("currItem",JSON.stringify(self.currItem));
				$('.logo').html(Handlebars.compile(logoTmplt)(self.currItem));
				setTimeout(function(){
					self.manageRouting();
				},100);
				e.stopPropagation();
			});
			
			$('.app-container').on('click','a',function(e){
				var levelId = $(e.currentTarget).find('div').first().data('id');
				if(e.currentTarget.hash === "#grid" && levelId){
					self.currItem.level = parseInt($(e.currentTarget).find('div').first().data('id'))-1;
				}
				setTimeout(function(){
					self.manageRouting();
				},100);
			});
			
			$('.grid-container .logo').on('click','.checkbtn',function(e){
				var itemName = $('.logodetail').data("ans");
				var itemId = $('.logodetail').data("id");
				var currAns = $('.anstext').val().toLowerCase();
				if(itemName === currAns){
					$('.result').html("<b>Great !!!</b>");
					$('.logo-holder').addClass("jumpit");
					$(this).css('display','none');
					$('input').attr('disabled','disabled');
					self.updateData(itemId);
				}
				else{
					if($('.logo-holder').hasClass('shakeit')){
						$('.logo-holder').removeClass("shakeit");
					}
					setTimeout(function(){
						$('.logo-holder').addClass("shakeit");
					},100);
					
				}
			});
		},
		
		loadLastLogo : function(){
			if(localStorage.getItem('currItem') !== null){
				this.currItem = JSON.parse(localStorage.getItem('currItem'));
				$('.logo').html(Handlebars.compile(logoTmplt)(this.currItem));
			}
		},
		
		goLevel : function(){
			this.renderLevel();
			$('.intro').hide();
			$('.statistics').hide();
			$('.levels').show();
			$('.grid-container').hide();
			$('.levels').removeClass('entry_anim');
			$('.levels').addClass('entry_anim');
			$('.level-container').removeClass('entry_anim1');
			$('.level-container').addClass('entry_anim1');
		},
		
		goMenu : function(){
			$('.intro').show();
			$('.levels').hide();
			$('.statistics').hide();
			$('.grid-container').hide();
			$('.intro').removeClass('entry_anim');
			$('.intro').addClass('entry_anim');
		},
		
		
		goStats : function(){
			this.renderStats();
			$('.intro').hide();
			$('.levels').hide();
			$('.grid-container').hide();
			$('.statistics').show();
			$('.statistics').removeClass('entry_anim');
			$('.statistics').addClass('entry_anim');
		},
		
		goQuiz : function(){
			this.renderApp();
			$('.intro').hide();
			$('.levels').hide();
			$('.statistics').hide();
			$('.grid-container .logo').hide();
			$('.grid-container').show();
			$('.grid-container .grid').show();
			$('.grid-container').removeClass('entry_anim');
			$('.grid-container').addClass('entry_anim');
			$('.grid-container .logo').removeClass('entry_anim1');
			$('.grid-container .grid').addClass('entry_anim1');
		},
		
		goLogo : function(){
			$('.intro').hide();
			$('.levels').hide();
			$('.statistics').hide();
			$('.grid-container .grid').hide();
			$('.grid-container').show();
			$('.grid-container .logo').show();
			$('.grid-container').removeClass('entry_anim');
			$('.grid-container').addClass('entry_anim');
			$('.grid-container .grid').removeClass('entry_anim1');
			$('.grid-container .logo').addClass('entry_anim1');
		},
		
		manageRouting : function(){
			var route = window.location.hash;
			switch(route) {
				case '#level':
					this.updateBackNav("#intro");
					this.goLevel();
					break;
				case '#grid':
					this.updateBackNav("#level");
					this.goQuiz();
					break;
				case '#stats':
					this.goStats();
					break;
				case '#menu':
					this.goMenu();
					break;
				case '#logo':
					this.updateBackNav("#grid");
					this.goLogo();
					break;
			}
		},
		
		updateBackNav : function(str){
			$('.back-nav').attr('href',str);
		},
		
		updateData : function(itemId){
			var self = this;
			$(this.logoData.levels[this.currItem.level].logos).each(function(){
				if(this.id == itemId){
					this.done = true;
					self.logoData.levels[self.currItem.level].pointScored += this.star;
					self.logoData.levels[self.currItem.level].completedCount++;
					self.logoData.status.totalCompleted++;
					return false;
				}
			});
			
			$(this.logoData.levels).each(function(i){
				if(!self.logoData.levels[i].unlock){
					if(self.logoData.status.totalCompleted < self.logoData.levels[i].logoToUnlock){
						self.logoData.levels[i].remainToUnlock = self.logoData.levels[i].logoToUnlock - self.logoData.status.totalCompleted;
						console.log("Level "+ i + " Total "+ self.logoData.status.totalCompleted + " Remain " + self.logoData.levels[i].remainToUnlock)
					}
					else{
						self.logoData.levels[i].unlock = true;
					}
				}
			});
			
			localStorage.setItem("logos",JSON.stringify(self.logoData));
		}
	};

	return Logoquiz;
});