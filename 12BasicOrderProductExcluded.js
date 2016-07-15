describe('Aveda Admin App', function () { //describing the name
    describe('should allow us to navigate', function () {
        beforeEach(function(){
            return browser.ignoreSynchronization = true;
        });

        it('Log us in', function () { //expecting the whole test to test
            browser.get('http://avedacare.com/test/admin/#/login/');
            var username = element(by.model('login.credentials.Username'));
            var password = element(by.model('login.credentials.Password'));
            username.sendKeys('protest');
            password.sendKeys('fails345');
            var submit = element(by.buttonText('Login'));
            submit.click();
        });
