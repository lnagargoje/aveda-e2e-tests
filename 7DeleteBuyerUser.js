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

        it('should be able to select Order type', function(){
            var order = element(by.buttonText('Build Order'));
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(order), 7500, 'Element not clickable');
            order.click();
            var selectorder = element.all(by.repeater('orderType in salonsDetail.orderTypes')).get(0);
            //.all - finding the specific one in a list of things
            //repeater is looking at everything
            //get(0) is telling to look at the first one, can be replaced with first()
            expect(selectorder.getText()).toBe('Basic');
            //.gettext is a function that reads the txt from the element that we selected
            selectorder.click();
        });

        it('should be able to search product', function(){
            var search = element(by.id('ProductSearch'));
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(search), 6000, 'Element not clickable');
            search.sendKeys('malva');
            browser.sleep(3000);
        });

        it('should be able to select Product quantity', function() {
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
            var checkout = element(by.css('[ng-click*="order.proceedToCheckout()"]'));
            // . in .am as it is class
            //ng-click is an attribute
            //css -
            browser.sleep(2000);
            checkout.click();
        });

        it('Validate Order', function() {
            var validate = element(by.css("[ng-click*='orderCheckout.validateOrder()']"));
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(validate), 6000, 'Element not clickable');
            browser.sleep(2000);
            validate.click();
        });

        it('Continue with the Order processing', function() {
            var next = element(by.css("[ng-click*='orderCheckout.continueFromReview()']"));
            browser.sleep(8000);
            next.click();
        });

        it('select terms checkbox cash on delivery', function() {
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

        it('Should be able to Submit the Order', function() {
            var submit = element(by.css('[ng-click*="orderCheckout.submitOrder()"]'));
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(submit), 6000, 'Element not clickable');
            submit.click();
        });

        it('Order complete return to salon profile', function() {
            var profile = element(by.css('[ng-click*="orderCheckout.goToSalonProfile()"]'));
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(profile),7500, 'Element not clickable');
            browser.sleep(2000);
            profile.click();
        });
    });
});