//****NOTE***** - In Node, the gloabl object is 'global' and not 'window' as in browser
const greet = (name) => {
    console.log(`Hello ${name}`, parseFloat("2256.34"));
}
// greet("World");

// A nice way to clear the "Interval" - clearing interval withinthe Timeout block
setTimeout(() => {
    console.log("!! TIMEOUT !! - Clearing the Interval");
    clearInterval(testInterval);
}, 2000);
//alert("Hello World"); OBVIOUSLY WILL NOT WORK - in Node.js - "alert" is a browser API
testInterval = setInterval(() => {
    console.log("Hello World - From the INTERVAL");
}, 1000);

console.log("Full Directory Name: ", __dirname);
console.log("File Name - With Full path: ", __filename);
// console.log(global);
//--------------------------

// Using the "fs" module
const fs = require("fs");
fs.readFile("./data/source.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error: ", err);
    } else {
        console.log("Data: ", data);
    }
});
// fs.writeFile("./data/target.txt", "Hello World - From Node.js", (err) => {
//     if (err) {
//         console.log("Error: ", err);
//     } else {
//         console.log("File Written Successfully");
//     }
// });

//------------------- **** STREAMS ****   To Read LARGE FILES - In CHUNKS ---------
const readStream = fs.createReadStream("./data/big_data.txt", "utf8");
const writeStream = fs.createWriteStream("./data/big_data_copy.txt");
readStream.on("data", (chunk) => {
    console.log("\n************************************************\n ******  G O T    C H U N K   ******");
    console.log(chunk);
    writeStream.write(chunk);
});




