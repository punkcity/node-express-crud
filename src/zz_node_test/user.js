//These EXPORT (and corresponding IMPORT) style will work in ES6; NOT in Node.js
// For reference -> https://codedamn.com/news/nodejs/cannot-use-import-statement-outside-a-module
// TODO - USE APPROPRIATELY
export default class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

export function printName(user) {
    console.log(`User's Name: ${user.name}`);
}

export function printEmail(user) {
    console.log(`User's Email: ${user.email}`);
}
