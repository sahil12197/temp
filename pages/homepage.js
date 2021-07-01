let homepage = function()
{
    var input_first = element(by.model('first'));
    

    var input_second = element(by.model('second'));
    

    var button = element(by.id('gobutton'));


    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(fistNumber){

        input_first.sendKeys(fistNumber); 
    }

    this.selectOperation = function(operator){
        element(by.cssContainingText('option',operator)).click();
       
    };

    this.enterSecondtNumber = function(secondNumber){

        input_second.sendKeys(secondNumber);
    }

    this.clickGo = function(){
        button.click();
        
    }

    this.varifyresult = function(result){
        var output = element(by.className('ng-binding'));
        expect(output.getText()).toEqual(result);

    };

};

module.exports =  new homepage();