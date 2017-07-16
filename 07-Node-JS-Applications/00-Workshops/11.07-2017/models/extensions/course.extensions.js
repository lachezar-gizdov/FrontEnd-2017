const { Course } = require('../course.model');
const { DETAILS } = require('../../selectors/course.selectors');
const { JSDOM } = require('jsdom');
//const { initDomParser } = require('../../dom-parser');

Course.fromHtml = (html) => {
        const dom = new JSDOM(html);
        const $ = require('jquery')(dom.window);
        let name = $(DETAILS.NAME_SELECTOR).html().trim();
        let startDate = $(DETAILS.START_DATE_SELECTOR).html();
        let endDate = $(DETAILS.END_DATE_SELECTOR).html();
        let lectures = $(DETAILS.LECTURES_COUNT_SELECTOR).next().next().html();

        return new Course(name, startDate, endDate, lectures);
};