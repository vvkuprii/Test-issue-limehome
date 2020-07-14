'use strict';

const commonHelper = require('../../helpers/common.helper.js');

class BookCompletePage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    constructor() {

        this.txtThankYou = $('span.section-title');
    };


    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    async waitForThankYou() {
        await commonHelper.waitUntilElementVisible(this.txtThankYou, 'Thank you message is not visible');
    };


}

module.exports = BookCompletePage;
