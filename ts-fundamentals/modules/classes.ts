import { CastMember } from "./interfaces";

export class Performer implements CastMember {
  name: string = "";
  email: string = "";
  rehearse(sceneNumber: number): void {
    console.log(`${this.name} is rehearsing scene number ${sceneNumber}`);
  }
  role: string = "";
}
abstract class Video {
  // year:number=2024
  // title:string=""
  // private _producer:string='';
  static medium: string = "Audio/Visual";

  get producer(): string {
    return this._producer.toUpperCase();
  }
  set producer(p: string) {
    this._producer = p;
  }
  // private members are only available in the class in which they are declared
  // protected can be accessed by subclasses
  constructor(
    public title: string,
    protected year: number,
    private _producer: string
  ) {
    console.log("creating a new video...");
  }
  printItem(): void {
    console.log(`${this.title} was released in the year ${this.year}`);
    console.log(`Medium ${Video.medium}`);
  }
  abstract printCredits(): void;
}

//inheritance classes hierarchy
export class Documentary extends Video {
  // subject:string='';
  constructor(newTitle: string, newYear: number, public subject: string) {
    super(newTitle, newYear, "Ashok");
  }
  printItem(): void {
    super.printItem();
    // year only accessible in subclasses not outside of it with object
    console.log(`Subject: ${this.subject} with ${this.year}`);
  }
  // implementing the method from abstract class- priority given to this
  printCredits(): void {
    console.log(`Producer: ${this.producer}`);
  }
}
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
export let Musical = class extends Video {
  printCredits(): void {
    console.log(`Musical credits ${this.producer}`);
  }
};
let myMusical = new Musical("Grease", 1978, "sing-song pictures");
myMusical.printCredits();

//such class expression can be used anywhere where class definition is expected
export class Course extends class {
  title: string = "";
} {
  subject: string = "";
}
// let course = new Course();
// course.subject="piano"
