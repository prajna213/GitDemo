var Jasmine2HtmlReporter= require('protractor-jasmine2-html-reporter')
exports.config = {
  framework: 'jasmine',
 // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ElementBasics.js'],
  
  onPrepare :function()
  {
	  browser.driver.manage().window().maximize();
	  jasmine.getEnv().addReporter(
			  new Jasmine2HtmlReporter({
				  savePath: 'target/screenshots'
			  })
			  );
  },
  suites :
	  {
	  Smoke : ['Alerts.js','Dropdown.js'],
  	  Regression : ['ElementBasics.js']
	  },
//Options to be passed to Jasmine-node.
jasmineNodeOpts: {
  showColors: true, // Use colors in the command line report.
}
 
};