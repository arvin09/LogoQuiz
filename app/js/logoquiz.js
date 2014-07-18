define(function(require){
	var jquery = require('jquery');
	var handlebars = require('handlebars');
	var gridTmplt = require('text!html/grid.html');
	var logoTmplt = require('text!html/logo.html');
	var introTmplt = require('text!html/intro.html');
	var levelTmplt = require('text!html/level.html');

	var Logoquiz = function(obj){
		if(localStorage.getItem('logos') !== null){
			this.logoData = JSON.parse(localStorage.getItem('logos'));
		}
		else{
			this.logoData = obj;
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
	
	Logoquiz.prototype = {
		init: function(){
			this.renderIntro();
			this.renderLevel();
			this.renderApp();
			this.addEventHandlers();
			this.goBack();
			this.checkAns();
			this.manageRouting();
		},
		
		renderIntro : function(){
			$('.intro').html(Handlebars.compile(introTmplt)());
		},
		renderLevel : function(){
			$('.levels').html(Handlebars.compile(levelTmplt)(this.logoData));
		},

		renderApp : function(){
			$('.logo-container').html(Handlebars.compile(gridTmplt)(this.logoData));
		},
		
		addEventHandlers : function(){
			var self = this;
			$('.grid-container').on('click','.grid-cell',function(e){
				var currItem = {};
				currItem.name = $(this).data("name");
				currItem.ans = $(this).data("ans");
				currItem.id = $(this).data("id");
				currItem.status = $(this).data("status");
				$('.logo-container').html(Handlebars.compile(logoTmplt)(currItem));
				e.stopPropagation();
			});
			
			$('.app-container').on('click','a',function(){
				setTimeout(function(){
					self.manageRouting();
				},100);
			});
		},
		
		goLevel : function(){
			$('.intro').hide();
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
			$('.grid-container').hide();
			$('.intro').removeClass('entry_anim');
			$('.intro').addClass('entry_anim');
		},
		
		
		goQuiz : function(){
			$('.intro').hide();
			$('.levels').hide();
			$('.grid-container').show();
			this.renderApp();
			$('.grid-container').removeClass('entry_anim');
			$('.grid-container').addClass('entry_anim');
			$('.logo-container').removeClass('entry_anim1');
			$('.logo-container').addClass('entry_anim1');
		},
		

		goBack : function(){
			var self = this;
			$('.grid-container').on('click','.backbtn',function(e){
				self.renderApp();
				e.stopPropagation();
			});
		},
		
		checkAns : function(){
			var self = this;
			$('.grid-container').on('click','.checkbtn',function(e){
					var itemName = $('.logodetail').data("ans");
					var itemId = $('.logodetail').data("id");
					var currAns = $('.anstext').val().toLowerCase();
					if(itemName === currAns){
						$('.result').html("<b>Great !!!</b>");
						$('.logo').addClass("jumpit");
						self.updateData(itemId);
					}
					else{
						if($('.logo').hasClass('shakeit')){
							$('.logo').removeClass("shakeit");
						}
						setTimeout(function(){
							$('.logo').addClass("shakeit");
						},100);
						
					}
			});
		},
		
		manageRouting : function(){
			var route = window.location.hash;
			console.log(route);
			switch(route) {
				case "#level":
					this.goLevel();
					break;
				case "#grid":
					this.goQuiz();
					break;
				case "#menu":
					this.goMenu();
					break;
					
			}
		},
		
		updateData : function(itemId){
			
			$(this.logoData.logos).each(function(){
					if(this.id == itemId){
						this.done = true;
					}
			});
			
			localStorage.setItem("logos",JSON.stringify(this.logoData));
		}
	};

	return Logoquiz;
});