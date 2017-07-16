require('./polyfills/');
require('./models/extensions/course.extensions');

const { parseCourse } = require('./parsers/course.parser');
const { getQueue } = require('./queue/');
const courses = [];
const ids = getQueue();

process.argv.forEach((val, index) => {
    ids.push(val)
});

ids.pop();
ids.pop();

if (ids.peek() == 'courses') {
    ids.pop();

    const loadCourse = (q) => {
        if (q.isEmpty()) {
            return Promise.resolve();
        }

        const id = q.pop();
        const url = 'https://telerikacademy.com/Courses/Courses/Details/' + id;
        return parseCourse(url)
            .then((course) => {
                courses.push(course);
            });
    };

    const loadCourses = (q) => {
        const PARALEL_LOADS = 1024;

        return Promise.all(
            Array.from({ length: PARALEL_LOADS })
                .map((_) => loadCourse(q)));
    };

    loadCourses(ids)
        .then(() => {
            console.log(courses);
        });
} else if (ids.peek() == 'forum') {
    ids.pop();
    
}