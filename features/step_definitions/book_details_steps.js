const pageObject = require('../../page_objects/pages.js').container.PageObject;
const bookDetailsPage = pageObject.getBookDetailsPage();

module.exports = async function() {

    this.Then(/^I wait for (.*) last name$/, async function (value) {
        await bookDetailsPage.waitForLastName(value);
    });

    this.When(/^I fill the "Date of birth" field with (.*) value$/, async function (value) {
        await bookDetailsPage.fillDateOfBirth(value);
    });

    this.When(/^I choose (.*) type$/, async function (value) {
        await bookDetailsPage.chooseTypeOfStay(value);
    });

};
