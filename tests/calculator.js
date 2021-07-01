let homepage = require('../pages/homepage');

describe('demo-calculator',()=>{
    it('addition test', ()=>{

        
        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('12');
        homepage.selectOperation('/');
        homepage.enterSecondtNumber('6');
        homepage.clickGo();
        homepage.varifyresult('2')
        browser.sleep(5000);
        

    });

    it('addition test', ()=>{

        
        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('12');
        homepage.selectOperation('/');
        homepage.enterSecondtNumber('6');
        homepage.clickGo();
        homepage.varifyresult('3')
        browser.sleep(5000);
        

    });

    /*
    it('subtraction test',()=>{

    });
    */
});