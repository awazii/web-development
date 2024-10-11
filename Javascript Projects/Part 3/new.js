// console.log("Hello World")
// console.log("Code is running...")
// console.log("Code is also running...")
// console.log("Code is looking like a wow...")
// Create a dictionary object
// const dictionary = {
//     "JavaScript": "A high-level, dynamic, untyped, and interpreted programming language.",
//     "HTML": "The standard markup language for creating web pages.",
//     "CSS": "A style sheet language used for describing the presentation of a document written in HTML or XML.",
//     "Browser": "A software application used to access information on the World Wide Web.",
//     "Server": "A computer program or device that provides functionality for other programs or devices, called clients."
// };

// // Example usage
// // let word1 = "JavaScript";
// let meaning1 = dictionary["JavaScript"] || "Word not found in the dictionary.";
// console.log(dictionary["JavaScript"] ); // Output: A high-level, dynamic, untyped, and interpreted programming language.

// let word2 = "CSS";
// let meaning2 = dictionary[word2] || "Word not found in the dictionary.";
// console.log("CSS is",meaning2); // Output: A style sheet language used for describing the presentation of a document written in HTML or XML.

// let word3 = "Node.js";
// let meaning3 = dictionary[word3] || "Word not found in the dictionary.";
// console.log(meaning3); // Output: Word not found in the dictionary.
// // Create a new Date object
// const currentDate = new Date();

// // Get the current date components
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
// const date = currentDate.getDate(); // Day of the month (1-31)
// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const dayOfWeek = daysOfWeek[currentDate.getDay()]; // Day of the week

// // Get the current time components
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();

// // Format the date and time
// const formattedDate = `${year}-${month}-${date}`;
// const formattedTime = `${hours}:${minutes}:${seconds}`;

// //  Display the date, time, and day of the week
//  console.log("Current Date: " + formattedDate);
//  console.log("Current Time: " + formattedTime);
//  console.log("Day of the Week: " + dayOfWeek);

    
   

function updateDateTime() {
    const greetingElement = document.getElementById('greeting');
    const TimeElement = document.getElementById('Time');
    const DateElement = document.getElementById('date');
    const dayElement = document.getElementById('Day');

    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    let greeting;
    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour <=16) {
        greeting = "Good Afternoon";
    } else if (currentHour >16 && currentHour < 20) {
        greeting = "Good Evening";
    } else {
        greeting = "Good Night";
    }
    greetingElement.textContent = greeting;
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const hours = (currentDate.getHours()%12);
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0'); 
    const formattedDate = `${date}-${month}-${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    dayElement.textContent = `Day: ${dayOfWeek}`;
    TimeElement.textContent = `Current Time : ${formattedTime}`;
    DateElement.textContent = `Current Date : ${formattedDate}`;
}
updateDateTime();
setInterval(updateDateTime, 1000);
function sayHello() {
    console.log("Hello, world!");
}
sayHello()
setInterval(sayHello(), 1000);
