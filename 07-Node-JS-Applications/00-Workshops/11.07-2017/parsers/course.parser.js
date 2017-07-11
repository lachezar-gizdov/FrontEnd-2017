const { Course } = require('../models/course.model');

const parseCourse = (url) => {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Invalid url');
            }

            return response.text();
        })
        .then((html) => {
            const course = Course.fromHtml(html);
            console.log(course);
            return course;
        });
};

module.exports = { parseCourse };