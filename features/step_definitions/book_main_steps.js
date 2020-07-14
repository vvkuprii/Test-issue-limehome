const pageObject = require('../../page_objects/pages.js').container.PageObject;
const bookMainPage = pageObject.getBookMainPage();

module.exports = async function() {

    this.When(/^I fill the "Last name" field with (.*) value$/, async function (value) {
        await bookMainPage.fillLastName(value);
    });

    this.When(/^I fill the "Booking reference" field with (.*) value$/, async function (value) {
        await bookMainPage.fillBookingReference(value);
    });

};
