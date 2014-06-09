var require = {
	 baseUrl : 'app',
	 paths : {
	 	jquery : 'static-resources/jquery/jquery-2.1.1.min',
	 	handlebars : 'static-resources/handlebars/handlebars-v1.3.0',
	 	text : 'static-resources/require/text',
	 	css : 'static-resources/require/css',
	 	normalize : 'static-resources/require/normalize',
	 	async : 'static-resources/require/async',
	 	jqueryUI : 'static-resources/jquery-ui/jquery-ui-1.10.4'

	 },

	 shims : {
		 'jqueryUI':{
			 deps:['jquery']
		 }
	 },

	 waitSeconds : 60,
	
	 deps : ['js/appLoader']

};