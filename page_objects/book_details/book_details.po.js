'use strict';

const commonHelper = require('../../helpers/common.helper.js');

class BookDetailsPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    constructor() {

        this.inputDateOfBirth = element(by.xpath("//*[text()='Date of birth']/ancestor::div" +
            "[contains(@class, 'mat-form-field-infix')]/input"));

        this.drpTypeOfStay = element(by.xpath("//*[text()='Type of Stay']//ancestor::div[@class='mat-form-field-infix']"));

    };

    checkLastName(name) {
        return element(by.xpath(`//*[text()='Last Name']/ancestor::div
        [contains(@class, 'mat-form-field-infix')]//*[@ng-reflect-model='${name}']`));
    };

    chooseType(type) {
        return element(by.cssContainingText('.mat-option-text', type));
    };

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    async waitForLastName(name) {
        await commonHelper.waitUntilElementVisible(this.checkLastName(name), `${name} name is not visible`);
    };

    async fillDateOfBirth(value) {
        await commonHelper.waitUntilElementClickable(this.inputDateOfBirth, 'Date of birth field is not clickable');
        await this.inputDateOfBirth.click();
        await commonHelper.clear(this.inputDateOfBirth);
        await this.inputDateOfBirth.sendKeys(value);
    };

    async chooseTypeOfStay(type) {
        await commonHelper.waitUntilElementPresent(this.drpTypeOfStay, 'Type of Stay dropdown is not present');
        await commonHelper.scrollPageToElement(this.drpTypeOfStay);
        await commonHelper.waitUntilElementClickable(this.drpTypeOfStay, 'Type of Stay dropdown is not clickable');
        await this.drpTypeOfStay.click();
        await commonHelper.waitUntilElementClickable(this.chooseType(type), `${type} type is not clickable`);
        await this.chooseType(type).click();
    };

}

module.exports = BookDetailsPage;
