define(function(require){
var quiz = require('js/logoquiz');

	var logoData = {
		logos : [
					{
						name: 'logo1',
						image:''	
					},
					
					{
						name: 'logo2',
						image:''	
					},

					{
						name: 'logo3',
						image:''	
					},

					{
						name: 'logo4',
						image:''	
					},

					{
						name: 'logo5',
						image:''	
					},

					{
						name: 'logo6',
						image:''	
					},

				]
	}


	var logoquiz = new quiz(this.logoData);
	logoquiz.init();
});