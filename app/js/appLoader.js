define(function(require){
	var quiz = require('js/logoquiz');

	var logoData = {
			status:{
				totalCompleted : 0
			},
			
			levels :[
			         {
			        	 id:'1',
			        	 name:'Level 1',
			        	 pointScored:0,
			        	 completedCount:0,
			        	 totalLogo:30,
			        	 bgcolor:'red',
			        	 logoToUnlock:0,
			        	 remainToUnlock:0,
			        	 unlock:true,
			        	 logos : [
			        	          {
			        	        	  id :'1',
			        	        	  name: 'logo1',
			        	        	  star:1,
			        	        	  ans : 'starbucks',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id : '2',
			        	        	  name: 'logo2',
			        	        	  star:2,
			        	        	  ans : '3mobile',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '3',
			        	        	  name: 'logo3',
			        	        	  star:1,
			        	        	  ans:'logitech',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '4',
			        	        	  name: 'logo4',
			        	        	  star:3,
			        	        	  ans:'volkswagen',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '5',
			        	        	  name: 'logo5',
			        	        	  star:3,
			        	        	  ans:'network',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '6',
			        	        	  name: 'logo6',
			        	        	  star:3,
			        	        	  ans:'adidas',
			        	        	  done : false
			        	          },
			        	          {
			        	        	  id: '7',
			        	        	  name: 'logo7',
			        	        	  star: 2,
			        	        	  ans : 'mozilla firefox',
			        	        	  done : false
			        	          },
			        	          {	 id: '8',
			        	        	  name: 'logo1',
			        	        	  star:1,
			        	        	  ans : 'starbucks',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '9',
			        	        	  name: 'logo2',
			        	        	  star:2,
			        	        	  ans : '3mobile',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '10',
			        	        	  name: 'logo3',
			        	        	  star:1,
			        	        	  ans:'logitech',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '11',
			        	        	  name: 'logo4',
			        	        	  star:3,
			        	        	  ans:'volkswagen',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '12',
			        	        	  name: 'logo5',
			        	        	  star:3,
			        	        	  ans:'network',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '13',
			        	        	  name: 'logo6',
			        	        	  star:3,
			        	        	  ans:'adidas',
			        	        	  done : false
			        	          },
			        	          {
			        	        	  id: '14',
			        	        	  name: 'logo7',
			        	        	  star: 2,
			        	        	  ans : 'mozilla firefox',
			        	        	  done : false
			        	          },			         {
			        	        	  id: '15',
			        	        	  name: 'logo1',
			        	        	  star:1,
			        	        	  ans : 'starbucks',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '16',
			        	        	  name: 'logo2',
			        	        	  star:2,
			        	        	  ans : '3mobile',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '17',
			        	        	  name: 'logo3',
			        	        	  star:1,
			        	        	  ans:'logitech',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '18',
			        	        	  name: 'logo4',
			        	        	  star:3,
			        	        	  ans:'volkswagen',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '19',
			        	        	  name: 'logo5',
			        	        	  star:3,
			        	        	  ans:'network',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '20',
			        	        	  name: 'logo6',
			        	        	  star:3,
			        	        	  ans:'adidas',
			        	        	  done : false
			        	          },
			        	          {
			        	        	  id: '21',
			        	        	  name: 'logo7',
			        	        	  star: 2,
			        	        	  ans : 'mozilla firefox',
			        	        	  done : false
			        	          },			         {
			        	        	  id: '22',
			        	        	  name: 'logo1',
			        	        	  star:1,
			        	        	  ans : 'starbucks',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '23',
			        	        	  name: 'logo2',
			        	        	  star:2,
			        	        	  ans : '3mobile',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '24',
			        	        	  name: 'logo3',
			        	        	  star:1,
			        	        	  ans:'logitech',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '25',
			        	        	  name: 'logo4',
			        	        	  star:3,
			        	        	  ans:'volkswagen',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '26',
			        	        	  name: 'logo5',
			        	        	  star:3,
			        	        	  ans:'network',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '27',
			        	        	  name: 'logo6',
			        	        	  star:3,
			        	        	  ans:'adidas',
			        	        	  done : false
			        	          },     	          {
			        	        	  id: '28',
			        	        	  name: 'logo3',
			        	        	  star:1,
			        	        	  ans:'logitech',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '29',
			        	        	  name: 'logo4',
			        	        	  star:3,
			        	        	  ans:'volkswagen',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '30',
			        	        	  name: 'logo5',
			        	        	  star:3,
			        	        	  ans:'network',
			        	        	  done : false
			        	          }			         ]
			         },
			         {

			        	 id:'2',
			        	 name:'Level 2',
			        	 pointScored: 0,
			        	 completedCount:0,
			        	 totalLogo:12,
			        	 bgcolor:'rgb(8, 137, 155)',
			        	 logoToUnlock:0,
			        	 remainToUnlock:0,
			        	 unlock:true,
			        	 logos : [
			        	          {
			        	        	  id :'1',
			        	        	  name: 'logo1',
			        	        	  star:1,
			        	        	  ans : 'starbucks',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id : '2',
			        	        	  name: 'logo2',
			        	        	  star:2,
			        	        	  ans : '3mobile',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '3',
			        	        	  name: 'logo3',
			        	        	  star:1,
			        	        	  ans:'logitech',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '4',
			        	        	  name: 'logo4',
			        	        	  star:3,
			        	        	  ans:'volkswagen',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '5',
			        	        	  name: 'logo5',
			        	        	  star:3,
			        	        	  ans:'network',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '6',
			        	        	  name: 'logo6',
			        	        	  star:3,
			        	        	  ans:'adidas',
			        	        	  done : false
			        	          },
			        	          {
			        	        	  id: '7',
			        	        	  name: 'logo7',
			        	        	  star: 2,
			        	        	  ans : 'mozilla firefox',
			        	        	  done : false
			        	          },
			        	          {	 id: '8',
			        	        	  name: 'logo1',
			        	        	  star:1,
			        	        	  ans : 'starbucks',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '9',
			        	        	  name: 'logo2',
			        	        	  star:2,
			        	        	  ans : '3mobile',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '10',
			        	        	  name: 'logo3',
			        	        	  star:1,
			        	        	  ans:'logitech',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '11',
			        	        	  name: 'logo4',
			        	        	  star:3,
			        	        	  ans:'volkswagen',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '12',
			        	        	  name: 'logo5',
			        	        	  star:3,
			        	        	  ans:'network',
			        	        	  done : false
			        	          },
			        	          ]

			         },
			         {
			        	 id:'3',
			        	 name:'Level 3',
			        	 pointScored: 0,
			        	 completedCount:0,
			        	 totalLogo:12,
			        	 bgcolor:'rgb(160, 207, 9)',
			        	 logoToUnlock:20,
			        	 remainToUnlock:20,
			        	 unlock:false,
			        	 logos : [
			        	          {
			        	        	  id :'1',
			        	        	  name: 'logo1',
			        	        	  star:1,
			        	        	  ans : 'starbucks',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id : '2',
			        	        	  name: 'logo2',
			        	        	  star:2,
			        	        	  ans : '3mobile',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '3',
			        	        	  name: 'logo3',
			        	        	  star:1,
			        	        	  ans:'logitech',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '4',
			        	        	  name: 'logo4',
			        	        	  star:3,
			        	        	  ans:'volkswagen',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '5',
			        	        	  name: 'logo5',
			        	        	  star:3,
			        	        	  ans:'network',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '6',
			        	        	  name: 'logo6',
			        	        	  star:3,
			        	        	  ans:'adidas',
			        	        	  done : false
			        	          },
			        	          {
			        	        	  id: '7',
			        	        	  name: 'logo7',
			        	        	  star: 2,
			        	        	  ans : 'mozilla firefox',
			        	        	  done : false
			        	          },
			        	          {	 id: '8',
			        	        	  name: 'logo1',
			        	        	  star:1,
			        	        	  ans : 'starbucks',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '9',
			        	        	  name: 'logo2',
			        	        	  star:2,
			        	        	  ans : '3mobile',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '10',
			        	        	  name: 'logo3',
			        	        	  star:1,
			        	        	  ans:'logitech',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '11',
			        	        	  name: 'logo4',
			        	        	  star:3,
			        	        	  ans:'volkswagen',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '12',
			        	        	  name: 'logo5',
			        	        	  star:3,
			        	        	  ans:'network',
			        	        	  done : false
			        	          },
			        	          ]


			         },
			         {
			        	 id:'4',
			        	 name:'Level 4',
			        	 pointScored:0,
			        	 completedCount:0,
			        	 totalLogo:12,
			        	 bgcolor:'rgb(255, 112, 0)',
			        	 unlock:false,
			        	 logoToUnlock:40,
			        	 remainToUnlock:40,
			        	 logos : [
			        	          {
			        	        	  id :'1',
			        	        	  name: 'logo1',
			        	        	  star:1,
			        	        	  ans : 'starbucks',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id : '2',
			        	        	  name: 'logo2',
			        	        	  star:2,
			        	        	  ans : '3mobile',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '3',
			        	        	  name: 'logo3',
			        	        	  star:1,
			        	        	  ans:'logitech',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '4',
			        	        	  name: 'logo4',
			        	        	  star:3,
			        	        	  ans:'volkswagen',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '5',
			        	        	  name: 'logo5',
			        	        	  star:3,
			        	        	  ans:'network',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '6',
			        	        	  name: 'logo6',
			        	        	  star:3,
			        	        	  ans:'adidas',
			        	        	  done : false
			        	          },
			        	          {
			        	        	  id: '7',
			        	        	  name: 'logo7',
			        	        	  star: 2,
			        	        	  ans : 'mozilla firefox',
			        	        	  done : false
			        	          },
			        	          {	 id: '8',
			        	        	  name: 'logo1',
			        	        	  star:1,
			        	        	  ans : 'starbucks',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '9',
			        	        	  name: 'logo2',
			        	        	  star:2,
			        	        	  ans : '3mobile',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '10',
			        	        	  name: 'logo3',
			        	        	  star:1,
			        	        	  ans:'logitech',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '11',
			        	        	  name: 'logo4',
			        	        	  star:3,
			        	        	  ans:'volkswagen',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '12',
			        	        	  name: 'logo5',
			        	        	  star:3,
			        	        	  ans:'network',
			        	        	  done : false
			        	          },
			        	          ]

			         },
			         {
			        	 id:'5',
			        	 name:'Level 5',
			        	 pointScored: 0,
			        	 completedCount:0,
			        	 totalLogo:12,
			        	 bgcolor:'rgb(129, 90, 41)',
			        	 logoToUnlock:60,
			        	 remainToUnlock:60,
			        	 unlock:false,
			        	 logos : [
			        	          {
			        	        	  id :'1',
			        	        	  name: 'logo1',
			        	        	  star:1,
			        	        	  ans : 'starbucks',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id : '2',
			        	        	  name: 'logo2',
			        	        	  star:2,
			        	        	  ans : '3mobile',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '3',
			        	        	  name: 'logo3',
			        	        	  star:1,
			        	        	  ans:'logitech',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '4',
			        	        	  name: 'logo4',
			        	        	  star:3,
			        	        	  ans:'volkswagen',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '5',
			        	        	  name: 'logo5',
			        	        	  star:3,
			        	        	  ans:'network',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '6',
			        	        	  name: 'logo6',
			        	        	  star:3,
			        	        	  ans:'adidas',
			        	        	  done : false
			        	          },
			        	          {
			        	        	  id: '7',
			        	        	  name: 'logo7',
			        	        	  star: 2,
			        	        	  ans : 'mozilla firefox',
			        	        	  done : false
			        	          },
			        	          {	 id: '8',
			        	        	  name: 'logo1',
			        	        	  star:1,
			        	        	  ans : 'starbucks',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '9',
			        	        	  name: 'logo2',
			        	        	  star:2,
			        	        	  ans : '3mobile',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '10',
			        	        	  name: 'logo3',
			        	        	  star:1,
			        	        	  ans:'logitech',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '11',
			        	        	  name: 'logo4',
			        	        	  star:3,
			        	        	  ans:'volkswagen',
			        	        	  done : false
			        	          },

			        	          {
			        	        	  id: '12',
			        	        	  name: 'logo5',
			        	        	  star:3,
			        	        	  ans:'network',
			        	        	  done : false
			        	          },
			        	          ]


			         }
			         ]
	};


	var logoquiz = new quiz(logoData);
	logoquiz.init();
});