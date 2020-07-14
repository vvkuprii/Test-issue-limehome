const pageObject = require('../../page_objects/pages.js').container.PageObject;
const bookCompletePage = pageObject.getBookCompletePage();

module.exports = async function() {

    this.Then(/^I wait for "Thank you" message$/, async function () {
        await bookCompletePage.waitForThankYou();
    });

};
