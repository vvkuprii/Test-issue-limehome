'use strict';

const commonHelper = require('../../helpers/common.helper.js');

class CommonPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    constructor() {

        this.btnSubmit = element(by.cssContainingText('span.mat-button-wrapper', 'Submit'));

    };

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    async openUrl(url) {
        await browser.get(browser.baseUrl + url);
    };

    async clickOnSubmit() {
        await commonHelper.waitUntilElementClickable(this.btnSubmit, 'Booking reference field is not clickable');
        await this.btnSubmit.click();
    };

}

module.exports = CommonPage;
