class Course{
    constructor(name, startingDate, endingDate, lecturesPerWeek){
        this.name = name;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
        this.lecturesPerWeek = lecturesPerWeek;
    }
}

module.exports = { Course };