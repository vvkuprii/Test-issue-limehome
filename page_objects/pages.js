var bottlejs = require('bottlejs').pop('test');

bottlejs.factory('PageObject', function () {

    return {
        getCommonPage: () => {
            const CommonPage = require('./common/common.po.js');
            return new CommonPage();
        },
        getBookMainPage: () => {
            const BookMainPage = require('./book_main/book_main.po.js');
            return new BookMainPage();
        },
        getBookDetailsPage: () => {
            const BookDetailsPage = require('./book_details/book_details.po.js');
            return new BookDetailsPage();
        },
        getBookCompletePage: () => {
            const BookCompletePage = require('./book_complete/book_complete.po.js');
            return new BookCompletePage();
        }
    };
});

module.exports = bottlejs;
