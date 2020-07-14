'use strict';

const commonHelper = require('../../helpers/common.helper.js');

class BookMainPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    constructor() {

        this.inputLastName = $('[formcontrolname="lastName"]');

        this.inputBookingReference = $('[formcontrolname="bookingReference"]');

    };

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    async fillLastName(name) {
        await commonHelper.waitUntilElementClickable(this.inputLastName, 'Last name field is not clickable');
        await this.inputLastName.click();
        await commonHelper.clear(this.inputLastName);
        await this.inputLastName.sendKeys(name);
    };

    async fillBookingReference(value) {
        await commonHelper.waitUntilElementClickable(this.inputBookingReference, 'Booking reference field is not clickable');
        await this.inputBookingReference.click();
        await commonHelper.clear(this.inputBookingReference);
        await this.inputBookingReference.sendKeys(value);
    };

}

module.exports = BookMainPage;
