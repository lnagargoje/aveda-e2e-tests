var Aveda1 = require('./PageObject1.js');

describe('Aveda Buyer App', function () { //describing the name
    describe('should allow us to place a Basic order as an CSR user', function () {
        var av1 = new Aveda1;
        beforeEach(function(){
            return browser.ignoreSynchronization = true;
        });

        it('Log us in', function () { //expecting the whole test to test
            browser.get('http://avedacare.com/test/#/login/');
            browser.sleep(3000);
            av1.username.sendKeys('protest');
            av1.password.sendKeys('fails345');
            av1.submit.click();
        });

        it('should allow us to search for Salon Mystique', function () {
            av1.waitFor(av1.search);
            //pausing within the expected condition, search = element, 7500 counted in milli secs (time pause)
            av1.search.click();
            av1.search.sendKeys('102615');
            browser.actions().sendKeys(protractor.Key.ENTER).perform(); //order is built
        });

        it('should be able to select Order type', function () {
            av1.waitFor(av1.order);
            av1.order.click();
            expect(av1.selectorder.getText()).toBe('Basic');
            //.gettext is a function that reads the txt from the element that we selected
            av1.waitFor(av1.selectorder);
            av1.selectorder.click();//
        });

        it('should be able to search product', function () {
            av1.waitFor(av1.ProductSearch);
            av1.ProductSearch.sendKeys('malva');
            browser.sleep(3000);
        });

        it('should be able to select Product quantity', function () {
            browser.actions().sendKeys(protractor.Key.TAB).perform();  //tabs to 1st item location
            browser.actions().sendKeys(protractor.Key.NUMPAD1).perform(); //adds 1 to the 1st item quantity
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            browser.actions().sendKeys(protractor.Key.NUMPAD1).perform();
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            browser.actions().sendKeys(protractor.Key.NUMPAD1).perform(); //add 1 to the QTY
            browser.actions().sendKeys(protractor.Key.ENTER).perform(); //order is built
        });

        it('Proceeds with the order checkout', function () {
            av1.waitFor(av1.checkout);
            av1.checkout.click();
            browser.sleep(8000);
        });

        it('Validate Order', function () {
            browser.sleep(8000);
            av1.waitFor(av1.validate);
            av1.validate.click();
        });

        it('Continue with the Order processing', function () {
            browser.sleep(8000);
            av1.waitFor(av1.next);
            av1.next.click();
        });

        it('select payment credit card checkbox', function () {
            browser.sleep(8000);
            av1.waitFor(av1.checkbox);
            //. as it is a CSS class
            av1.checkbox.click();
        });

        it('select Credit Card', function() {
        //var radio = browser.findElement(by.id('J9fnB3qIzUq4521zRU_nJw'));
        //var radio = element(by.css('.creditCardRadio ng-valid ng-dirty ng-touched ng-valid-parse')).get(0).click();
        //var radio = element(by.model('orderCheckout.order.CreditCardID')).get(3);
        var radio = element.all(by.css('.creditCardRadio')).get(1);
        //. as it is a CSS class
        xpect(radio.getText()).toBe('creditCardRadio');
        radio.click();
        });

        it('Should be able to Submit the Order', function() {
            var submit = element(by.css('[ng-click*="orderCheckout.submitOrder()"]'));
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(submit), 6000, 'Element not clickable');
            submit.click();
        });

        it('Order complete return to salon profile', function() {
            var profile = element(by.css('[ng-click*="orderCheckout.goToSalonProfile()"]'));
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(profile),7500, 'Element not clickable');
            //browser.sleep(2000);
            profile.click();
        });
    });
});