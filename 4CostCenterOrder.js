var Aveda = require('./PageObject.js');

describe('Aveda Buyer App', function () { //describing the name
    describe('should allow us to place a Basic order as an SDP user', function () {
        var av = new Aveda;
        beforeEach(function () {
            return browser.ignoreSynchronization = true;
        });

        it('Log us in', function () { //expecting the whole test to test
            browser.get('http://avedacare.com/test/#/login/');
            av.username.sendKeys('test10');
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

        it('should be able to select Order type', function () {
            av.waitFor(av.order);
            av.order.click();
            expect(av.selectorder.getText()).toBe('Launch');
            //.gettext is a function that reads the txt from the element that we selected
            av.waitFor(av.selectorder);
            av.selectorder.click();//
        });

        it('should be able to search product', function () {
            av.waitFor(av.ProductSearch);
            av.ProductSearch.sendKeys('malva');
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
            av.waitFor(av.checkout);
            av.checkout.click();
            browser.sleep(8000);
        });

        it('Validate Order', function () {
            browser.sleep(8000);
            av.waitFor(av.validate);
            av.validate.click();
        });

        it('Continue with the Order processing', function () {
            browser.sleep(8000);
            av.waitFor(av.next);
            av.next.click();
        });

        it('select terms checkbox cash on delivery', function () {
            var checkbox = element(by.model("orderCheckout.cashOnDeliveryAccepted"));
            //. as it is a CSS class
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(checkbox), 6000, 'Element not clickable');
            checkbox.click();
        });

        //it('select Credit Card', function() {
        //var radio = browser.findElement(by.id('J9fnB3qIzUq4521zRU_nJw'));
        //var radio = element(by.css('.creditCardRadio ng-valid ng-dirty ng-touched ng-valid-parse')).get(0).click();
        //var radio = element(by.model('orderCheckout.order.CreditCardID')).get(3);
        //var radio = element.all(by.model(.creditCardRadio-label)).get(3);
        //. as it is a CSS class
        //expect(radio.getText()).toBe('creditCardRadio-label');
        //radio.click();
        //});

        it('Should be able to Submit the Order', function () {
            var submit = element(by.css('[ng-click*="orderCheckout.submitOrder()"]'));
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(submit), 6000, 'Element not clickable');
            submit.click();
        });

        it('Order complete return to salon profile', function () {
            var profile = element(by.css('[ng-click*="orderCheckout.goToSalonProfile()"]'));
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(profile), 7500, 'Element not clickable');
            //browser.sleep(2000);
            profile.click();
        });
    });
});


it('Should be able to Save the changes', function () {
    var save = element(by.buttonText('Save'));
    save.click();
});