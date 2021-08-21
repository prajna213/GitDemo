describe('Protractor baby steps',function() {  

	 var obj=  require("./Jsobjectdemo.js");
	 var using= require('jasmine-data-provider');
	 var d=  require("./data.js");
	 
	 beforeEach(function(){
		 obj.getURL();
	 });
	 //data stores actual data
	 //description stores sub object name
	 //for every iteration one data set is picked up
	 using(d.Datadriven, function (data, description) {
		 it('Testing Calculator Method'+description,function() {





			//write your protractor raw code
				
				obj.getURL();
				obj.firstinput.sendKeys(data.firstinput);
				obj.secondinput.sendKeys(data.secondinput);
				obj.goButton.click();
				//Jasmine Framework takes care of Promise resolv
				
				expect(obj.result.getText()).toBe(data.result);
				obj.result.getText().then(function(text)
				{
					
					console.log(text);
					console.log("ABC");
					console.log("DEF");
					console.log("ABC");
					console.log("DEF");
					console.log("ABC");
					console.log("DEF");
				})
						



			})

			 
		 
		 
	 });



//Each it block will be called as a spec

	 it('Complete Test',function() {
	 
	 });


afterEach(function(){
		console.log("Test is completed");
	 });

})



