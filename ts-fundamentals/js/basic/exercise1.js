"use strict";
let movieTitle = "A New Hope";
let movieReview = GetReview(movieTitle);
console.log(`moview title: ${movieTitle}`);
function GetReview(title) {
    if (title == "A New Hope") {
        return "An instant classic!";
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
if (typeof movieReview == 'string') {
    console.log(`Review: ${movieReview}`);
}
else {
    console.log(`Rating: ${movieReview}/10`);
}
//# sourceMappingURL=exercise1.js.map