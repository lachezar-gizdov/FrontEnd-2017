class Course{
    constructor(name, startingDate, endingDate, lecturesPerWeek){
        this.name = name;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
        this.lecturesPerWeek = lecturesPerWeek;
    }

    get Name(){
        return this.name;
    }

    get StartingDate(){
        return this.startingDate;
    }

    get EndingDate(){
        return this.endingDate;
    }

    get LecturesPerWeek(){
        return this.lecturesPerWeek;
    }
}

module.exports = { Course };