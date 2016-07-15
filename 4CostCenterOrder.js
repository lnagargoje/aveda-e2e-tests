var Aveda = require('./PageObject.js');

describe('Aveda Buyer App', function () { //describing the name
    describe('should allow us to place a Basic order as an CSR user', function () {
        var av = new Aveda;
        beforeEach(function () {
            return browser.ignoreSynchronization = true;
        });

        it('Log us in', function () { //expecting the whole test to test
            browser.get('http://avedacare.com/test/#/login/');
            av.username.sendKeys('protest');
            av.password.sendKeys('fails345');
            av.submit.click();
        });

        it('should allow us to search for Salon Mystique', function () {
            av.waitFor(av.search);
            //pausing within the expected condition, search = element, 7500 counted in milli secs (time pause)
            av.search.click();
            av.search.sendKeys('102615');
            browser.actions().sendKeys(protractor.Key.ENTER).perform(); //order is built

        });

