const pageObject = require('../../page_objects/pages.js').container.PageObject;
const commonPage = pageObject.getCommonPage();

module.exports = async function() {

    this.Given(/^I open (.*) page$/, {timeout: 50000}, async function (url) {
        switch (url) {
            case 'booking':
                await commonPage.openUrl('');
                break;
        }
    });

    this.When(/^I click on "Submit" button$/, async function () {
        await commonPage.clickOnSubmit();
    });

};
