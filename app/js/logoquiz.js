define(function(require){
	var jquery = require('jquery');
	var handlebars = require('handlebars');
	var gridTmplt = require('text!html/grid.html');
	var logoTmplt = require('text!html/logo.html');
	var jqueryUI = require('jqueryUI');	

	var Logoquiz = function(obj){
		this.logoData = obj;
	};
	
	Logoquiz.prototype = {
		init: function(){
			this.renderApp();
			this.addGridCellEvent();
			this.goBack();
			this.checkAns();
		},

		renderApp : function(){
			$('.grid-container').html(Handlebars.compile(gridTmplt)(this.logoData));
		},
		
		addGridCellEvent : function(){
			$('.grid-container').on('click','.grid-cell',function(e){
				var currItem = {};
				currItem.name = $(this).data("name");
				currItem.ans = $(this).data("ans");
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
			$('.grid-container').on('click','.checkbtn',function(e){
					var itemName = $('.logodetail').data("ans");
					var currAns = $('.anstext').val().toLowerCase();
					if(itemName === currAns){
						$('.result').html("<b>Great !!!</b>")
					}
					else{
						$('.logo').effect("shake");
					}
			});
		}
	};

	return Logoquiz;
});