"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = exports.Musical = exports.Documentary = exports.Performer = void 0;
class Performer {
    constructor() {
        this.name = "";
        this.email = "";
        this.role = "";
    }
    rehearse(sceneNumber) {
        console.log(`${this.name} is rehearsing scene number ${sceneNumber}`);
    }
}
exports.Performer = Performer;
class Video {
    get producer() {
        return this._producer.toUpperCase();
    }
    set producer(p) {
        this._producer = p;
    }
    // private members are only available in the class in which they are declared
    // protected can be accessed by subclasses
    constructor(title, year, _producer) {
        this.title = title;
        this.year = year;
        this._producer = _producer;
        console.log("creating a new video...");
    }
    printItem() {
        console.log(`${this.title} was released in the year ${this.year}`);
        console.log(`Medium ${Video.medium}`);
    }
}
// year:number=2024
// title:string=""
// private _producer:string='';
Video.medium = "Audio/Visual";
//inheritance classes hierarchy
class Documentary extends Video {
    // subject:string='';
    constructor(newTitle, newYear, subject) {
        super(newTitle, newYear, "Ashok");
        this.subject = subject;
    }
    printItem() {
        super.printItem();
        // year only accessible in subclasses not outside of it with object
        console.log(`Subject: ${this.subject} with ${this.year}`);
    }
    // implementing the method from abstract class- priority given to this
    printCredits() {
        console.log(`Producer: ${this.producer}`);
    }
}
exports.Documentary = Documentary;
// let v1 = new Video("sitaram", 25, "Kriti Sanon");
// abstract class can not be instantiated
// let myvid = new Video('Typescript', 2024);
// but can be added as type to the variable
// let v1:Video= new Documentary("The last dance", 2020, "Music")
// v1.printCredits();
// v1.printItem();
// v1.producer="mahadeva pictures";
// console.log(v1.producer);
//using class expression- so musical is also a class
let Musical = class extends Video {
    printCredits() {
        console.log(`Musical credits ${this.producer}`);
    }
};
exports.Musical = Musical;
let myMusical = new exports.Musical("Grease", 1978, "sing-song pictures");
myMusical.printCredits();
//such class expression can be used anywhere where class definition is expected
class Course extends class {
    constructor() {
        this.title = "";
    }
} {
    constructor() {
        super(...arguments);
        this.subject = "";
    }
}
exports.Course = Course;
// let course = new Course();
// course.subject="piano"
