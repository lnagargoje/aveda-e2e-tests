module.exports = function() {
    //global
    this.username = element(by.model('login.credentials.Username'));
    this.password = element(by.model('login.credentials.Password'));
    this.submit = element(by.buttonText('Login'));
    this.search = element(by.id('SalonSearch')); //search can be any name
    this.waitFor = function(nameOfElementToWaitFor, timeToWait){
        if(!timeToWait){
            timeToWait = 7500;
        }
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(nameOfElementToWaitFor), timeToWait, 'Element not clickable');
    };

