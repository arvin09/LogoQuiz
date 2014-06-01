define(function(require){
	var jquery = require('jquery');
	var handlebars = require('handlebars');
	var gridTmplt = require('text!html/grid.html');

	var Logoquiz = function(obj){
		this.logoData = obj;
	};

	Logoquiz.prototype = {
		init: function(){
			//$('body').html('Lets begin the journey');
			this.renderApp();
		},

		renderApp : function(){
			$('app-container').html(Handlebars.compile(gridTmplt))
		}


	};

	return Logoquiz;
});