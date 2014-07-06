define(function(require){
	var jquery = require('jquery');
	var handlebars = require('handlebars');
	var gridTmplt = require('text!html/grid.html');
	var logoTmplt = require('text!html/logo.html');
	var introTmplt = require('text!html/intro.html');

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
//			this.renderApp();
//			this.addGridCellEvent();
//			this.goBack();
//			this.checkAns();
		},
		
		renderIntro : function(){
			$('.intro').html(Handlebars.compile(introTmplt)());
		},

		renderApp : function(){
			$('.grid-container').html(Handlebars.compile(gridTmplt)(this.logoData));
		},
		
		addGridCellEvent : function(){
			$('.grid-container').on('click','.grid-cell',function(e){
				var currItem = {};
				currItem.name = $(this).data("name");
				currItem.ans = $(this).data("ans");
				currItem.id = $(this).data("id");
				currItem.status = $(this).data("status");
				$('.grid-container').html(Handlebars.compile(logoTmplt)(currItem));
				e.stopPropagation();
			});
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