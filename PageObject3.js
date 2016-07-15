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

//3LaunchOrderasSDP
    this.order = element(by.buttonText('Build Order'));
    this.selectorder = element.all(by.css('[ng-click*="salonsDetail.buildOrder(orderType.Type)"]')).get(6);
    //.all - finding the specific one in a list of things
    //repeater is looking at everything
    //get(6) is telling to look at the first one, can be replaced with first()
    this.ProductSearch = element(by.id('ProductSearch'));
    this.checkout = element(by.partialButtonText('Proceed to'));
    // . in .am as it is class
    //ng-click is an attribute
    //css -
    this.validate = element(by.buttonText("Validate Order"));
    this.next = element(by.css("[ng-click*='orderCheckout.continueToPayment()']"));
    this.checkbox = element(by.model("orderCheckout.cashOnDeliveryAccepted"));
};

