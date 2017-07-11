const { Course } = require('../course.model');
const { DETAILS } = require('../../selectors/course.selectors');
const { JSDOM } = require('jsdom');

Course.prototype.instanceMethod = () => {

};

Course.fromHtml = (html) => {
        const dom = new JSDOM(html);
        const $ = require('jquery')(dom.window);
        let name = $(DETAILS.NAME_SELECTOR).html();
        
        return new Course(name);
};