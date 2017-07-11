const { Course } = require('../models/course.model');

const parseCourse = (url) => {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                console.log(response.status)
                throw new Error('Invalid url');
            }

            return response.text();
        })
        .then((html) => {
            let course = Course.fromHtml(html);
            return course = Course.fromHtml(html);
        })
};

module.exports = { parseCourse };