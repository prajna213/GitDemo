describe('Protractor baby steps',function() {  


it('Open Angular js website',function() {





//write your protractor raw code
	
	browser.get('http://juliemr.github.io/protractor-demo/');
	element(by.model("first")).sendKeys("3");
	element(by.model("second")).sendKeys("5");
	element(by.id("gobutton")).click();
	//Jasmine Framework takes care of Promise resolv
	
	expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
	
	element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
	{
		
		console.log(text);
	})
			



})

 


//Each it block will be called as a spec



it('close browswer', function() {



// code to close browser
})



})



