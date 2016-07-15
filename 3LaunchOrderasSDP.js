var Aveda3 = require('./PageObject3.js');

describe('Aveda Buyer App', function () { //describing the name
    describe('should allow us to place a Launch order as an SDP user', function () {
        var av3 = new Aveda3;
        beforeEach(function () {
            return browser.ignoreSynchronization = true;
        });

        it('Log us in', function () { //expecting the whole test to test
            browser.get('http://avedacare.com/test/#/login/');
            av3.username.sendKeys('test10');
            av3.password.sendKeys('fails345');
            av3.submit.click();
        });

        it('should allow us to search for Salon Mystique', function () {
            av3.waitFor(av3.search);
            //pausing within the expected condition, search = element, 7500 counted in milli secs (time pause)
            av3.search.click();
            av3.search.sendKeys('102615');
            browser.actions().sendKeys(protractor.Key.ENTER).perform(); //order is built
        });

        it('should be able to select Order type', function () {
            av3.waitFor(av3.order);
            av3.order.click();
            browser.sleep(5000);
            av3.waitFor(av3.selectorder);
            expect(av3.selectorder.getText()).toBe('Launch');
            //.gettext is a function that reads the txt from the element that we selected
            av3.selectorder.click();
            browser.sleep(1000)


        });

        //it('should be able to search product', function () {
            //av.waitFor(av.ProductSearch);
            //av.ProductSearch.sendKeys('malva');
            //browser.sleep(3000);
        //});

        it('should be able to select Product quantity', function () {
            browser.actions().sendKeys(protractor.Key.TAB).perform();  //tabs to 1st item location
            browser.actions().sendKeys(protractor.Key.NUMPAD1).perform(); //adds 1 to the 1st item quantity
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            browser.actions().sendKeys(protractor.Key.NUMPAD1).perform();
            browser.actions().sendKeys(protractor.Key.ENTER).perform(); //order is built
        });

        it('Proceeds with the order checkout', function () {
            av3.waitFor(av3.checkout);
            av3.checkout.click();
            browser.sleep(8000);
        });

        it('Continue with the Order processing', function () {
            av3.waitFor(av3.next);
            av3.next.click();
            browser.sleep(8000);
        });

        it('select Credit Card checkbox', function () {
            av3.waitFor(av3.checkbox);
            //. as it is a CSS class
            av3.checkbox.click();
        });

        it('select Credit Card', function() {
        //var radio = browser.findElement(by.id('J9fnB3qIzUq4521zRU_nJw'));
        //var radio = element(by.css('.creditCardRadio ng-valid ng-dirty ng-touched ng-valid-parse')).get(0).click();
        //var radio = element(by.model('orderCheckout.order.CreditCardID')).get(3);
        var radio = element.all(by.model('creditCardRadio-label')).get(1);
        //. as it is a CSS class
        //expect(radio.getText()).toBe('creditCardRadio-label');
        radio.click();
        });

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


//it('Should be able to Save the changes', function () {
    //var save = element(by.buttonText('Save'));
    //save.click();
//});