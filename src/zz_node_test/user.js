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
