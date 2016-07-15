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

        it('should allow user to select the categories', function() {
            browser.sleep(1000);
            var select = element(by.css('[ui-sref="base.adminCategories"]'));
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(select), 6000, 'Element not clickable');
            select.click();
        });

        it('should allow user to edit the categories', function() {
            var edit = element(by.css('.am-btn.am-secondary'));
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(edit), 6000, 'Element not clickable');
            edit.click();
        });

        it ('should be able to clear the date in the name field', function() {
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            browser.sleep(1000);
            var empty = element(by.model('editCategoryModal.selectedCategory.Name')).clear();
            browser.sleep(3000);
            empty.sendKeys('Body Care 03172016');
            browser.sleep(4000);
        });

        it('Should be able to Save the changes', function() {
            var save = element(by.buttonText('Save'));
            save.click();
        });
    });
});