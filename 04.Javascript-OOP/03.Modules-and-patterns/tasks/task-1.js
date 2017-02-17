/* Task Description */
/* 
* Create a module for a Telerik Academy course
  * The course has a title and presentations
    * Each presentation also has a title
    * There is a homework for each presentation
  * There is a set of students listed for the course
    * Each student has firstname, lastname and an ID
      * IDs must be unique integer numbers which are at least 1
  * Each student can submit a homework for each presentation in the course
  * Create method init
    * Accepts a string - course title
    * Accepts an array of strings - presentation titles
    * Throws if there is an invalid title
      * Titles do not start or end with spaces
      * Titles do not have consecutive spaces
      * Titles have at least one character
    * Throws if there are no presentations
  * Create method addStudent which lists a student for the course
    * Accepts a string in the format 'Firstname Lastname'
    * Throws if any of the names are not valid
      * Names start with an upper case letter
      * All other symbols in the name (if any) are lowercase letters
    * Generates a unique student ID and returns it
  * Create method getAllStudents that returns an array of students in the format:
    * {firstname: 'string', lastname: 'string', id: StudentID}
  * Create method submitHomework
    * Accepts studentID and homeworkID
      * homeworkID 1 is for the first presentation
      * homeworkID 2 is for the second one
      * ...
    * Throws if any of the IDs are invalid
  * Create method pushExamResults
    * Accepts an array of items in the format {StudentID: ..., Score: ...}
      * StudentIDs which are not listed get 0 points
    * Throw if there is an invalid StudentID
    * Throw if same StudentID is given more than once ( he tried to cheat (: )
    * Throw if Score is not a number
  * Create method getTopStudents which returns an array of the top 10 performing students
    * Array must be sorted from best to worst
    * If there are less than 10, return them all
    * The final score that is used to calculate the top performing students is done as follows:
      * 75% of the exam result
      * 25% the submitted homework (count of submitted homeworks / count of all homeworks) for the course
*/

function solve() {
  var Course = {
    title: '',
    presentations: [],
    students: [],

    init: function (ttl, ppts) {
      let regex = /(\s{2,})|(^ )|( $)/g;

      if (arguments.length < 1 || !ttl) {
        throw 'Title cannot be empty';
      }

      if (arguments.length < 2 || ppts.length < 1) {
        throw 'Presentations cannot be empty';
      }

      if (regex.test(ttl)) {
        throw 'Course title contains invalid characters';
      }

      for (let presentation of ppts) {
        if (regex.test(presentation)) {
          throw 'Presentation contains invalid characters';
        }

        if (!presentation) {
          throw 'Presetantion title cannot be empty';
        }
      }

      this.title = ttl;
      this.presentations = ppts;

      return this;
    },
    addStudent: function (name) {
      let names = name.split(' ');
      let regex = /^[A-Z][a-z]*/;

      if (names.length !== 2) {
        throw 'Invalid number of names';
      }

      if (!names.every(n => regex.test(n))) {
        throw 'Names containes invalid symbols';
      }

      let student = {
        firstName: names[0],
        lastName: names[1],
        ID: this.students.length + 1,
        homeworks: [],
        examScore: 0,
        finalScore: 0
      };

      this.students.push(student);
      return student.ID;

    },

    getAllStudents: function () {

    },

    submitHomework: function (studentID, homeworkID) {

      if (!this.students.some(st => st.ID === studentID)) {
        throw 'Invalid Student ID';
      }
      if (!this.presentations[homeworkID - 1]) {
        throw 'No presentation for this homework';
      }
      let student = this.students.find(st => st.ID === studentID)
      student.homeworks.push(homeworkID);

    },
    
    pushExamResults: function (results) {

      if (results.some(result => isNaN(result.StudentID))) {
        throw 'Student ID is not a number';
      }
      if (results.some(result => result.StudentID > this.students.length)) {
        throw 'Student ID is larger than students number';
      }
      if (results.some(result => result.StudentID < 1)) {
        throw 'Student ID is smaller than the first student number';
      }
      if (results.some(result => isNaN(result.score))) {
        throw 'Score is not a number';
      }

      let checkForDuplicates = results.filter((results, index, self) =>
        self.findIndex(result =>
          result.StudentID === results.StudentID) !== index);
      if (checkForDuplicates.length > 0) {
        throw 'Repeating student';
      }

      for (let student of this.students) {
        let sIndex = results.findIndex(s => s.StudentID === student.ID);
        if (sIndex !== -1) {
          student.examScore = results[sIndex].score;
        }
      }
    },
    getTopStudents: function () {

    }
  };

  return Course;
}

module.exports = solve;