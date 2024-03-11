import mongoose from "mongoose";
import UserHandle from "../zz_node_test/user";
import { printName, printEmail } from "../zz_node_test/user";

const Schema = mongoose.Schema;

const p1 = new UserHandle("Pankaj", "abc@gmail.com");
printName(p1);
printEmail(p1);
export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
