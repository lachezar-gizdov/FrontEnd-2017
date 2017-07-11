require('./polyfills/');
require('./models/extensions/course.extensions');

const { Parse } = require('./parsers/course.parser');

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const urlBuilder = {
    buildGenreUrl(genre, page) {
        const url = `https://telerikacademy.com/Courses/Courses/Details/` +
            `${genre}`;
        return url;
    },
};