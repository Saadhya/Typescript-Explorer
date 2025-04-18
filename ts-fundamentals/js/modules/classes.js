"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorites = exports.Course = exports.Musical = exports.Documentary = exports.Performer = void 0;
const decorators_1 = require("./decorators");
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
let Documentary = (() => {
    var _a;
    let _classSuper = Video;
    let _instanceExtraInitializers = [];
    let _printItem_decorators;
    return _a = class Documentary extends _classSuper {
            // subject:string='';
            constructor(newTitle, newYear, subject) {
                super(newTitle, newYear, "Ashok");
                this.subject = (__runInitializers(this, _instanceExtraInitializers), subject);
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
        },
        (() => {
            var _b;
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _printItem_decorators = [decorators_1.logMethodInfo];
            __esDecorate(_a, null, _printItem_decorators, { kind: "method", name: "printItem", static: false, private: false, access: { has: obj => "printItem" in obj, get: obj => obj.printItem }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
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
// let myMusical = new Musical("Grease", 1978, "sing-song pictures");
// myMusical.printCredits();
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
// generic classes
class Favorites {
    constructor() {
        // private _items: T[] = [];
        this._items = new Array();
    }
    add(item) {
        this._items.push(item);
    }
    getFirst() {
        if (this._items.length > 0)
            return this._items[0];
        return this._items[0];
    }
    find(title) {
        return this._items.filter(item => item.title === title)[0];
    }
    printTitles() {
        this._items.forEach(item => console.log(item.title));
    }
}
exports.Favorites = Favorites;
//# sourceMappingURL=classes.js.map