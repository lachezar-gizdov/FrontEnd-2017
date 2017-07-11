const { Course } = require('../course.model');
const initParser = require('../../dom-parser/');
const { DETAILS } = require('../../selectors/course.selectors');

Course.prototype.instanceMethod = () => {

};

Course.fromHtml = (html) => {
    return initParser(html)
    .then(($) => {
        let name = $(DETAILS.NAME_SELECTOR).html();
    });
};