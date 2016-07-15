describe('Aveda Buyer App', function () { //describing the name
    describe('should allow us to place a Basic order for Salon with TermsOfPayment = ZCRD', function () {
        beforeEach(function(){
            return browser.ignoreSynchronization = true;
        });

        it('Log us in', function () { //expecting the whole test to test
            browser.get('http://avedacare.com/test/#/login/');
            var username = element(by.model('login.credentials.Username'));
            var password = element(by.model('login.credentials.Password'));
            username.sendKeys('protest');
            password.sendKeys('fails345');
            var submit = element(by.buttonText('Login'));
            submit.click();
        });

        it('should allow us to search for Salon Mystique', function(){
            var search = element(by.id('SalonSearch'));/// search can be any name
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(search), 7500, 'Element not clickable');
            //pausing within the expected condition, search = element, 7500 counted in milli secs (time pause)
            search.click();
            search.sendKeys('102615');
            browser.actions().sendKeys( protractor.Key.ENTER ).perform();
        });

