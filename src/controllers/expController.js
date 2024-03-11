import mongoose from "mongoose";
import { ContactSchema } from "../models/expModel";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    let reqContact = new Contact(req.body);
    console.log(req.body);
    try {
        const newContact = await reqContact.save();
        res.json(newContact);
    } catch (err) {
        console.log(`ERROR WHILE CREATING NEW CONTACT IN DB ${err}`);
        res.send("ERROR WHILE CREATING NEW CONTACT IN DB");
    }
}

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        console.log(`ERROR WHILE FETCHING CONTACTS FROM DB ${err}`);
        res.send("ERROR WHILE FETCHING CONTACTS FROM DB");
    }
}

export const getContactById = async (req, res) => {
    try {
        const contact = await Contact.find({"_id":req.params.contactId});
        res.json(contact);
    } catch (err) {
        console.log(`ERROR WHILE FETCHING CONTACT BY ID ${err}`);
        res.send("ERROR WHILE FETCHING CONTACT BY ID");
    }
}

export const updateContact = async (req, res) => {
    try {
        const filter = {"_id":req.params.contactId};
        const update = req.body;
        const contact = await Contact.findOneAndUpdate(filter, update, {new: true});
        res.json(contact);
    } catch (err) {
        console.log(`ERROR Updating Contact filtered by ID ${err}`);
        res.send("ERROR Updating Contact filtered by ID");
    }
}

export const deleteContact = async (req, res) => {
    try {
        const response = await Contact.deleteOne({"_id":req.params.contactId});
        res.json(response);
    } catch (err) {
        console.log(`ERROR WHILE DELETING CONTACT BY ID ${err}`);
        res.send("ERROR WHILE DELETING CONTACT BY ID");
    }
}


