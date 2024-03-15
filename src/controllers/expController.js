import mongoose from "mongoose";
import { PersonSchema } from "../models/expModel";

const Person = mongoose.model('PERSON', PersonSchema);

export const addNewPerson = async (req, res) => {
    let reqPerson = new Person(req.body);
    console.log(req.body);
    try {
        const newPerson = await reqPerson.save();
        res.json(newPerson);
    } catch (err) {
        console.log(`ERROR WHILE CREATING NEW PERSON IN DB ${err}`);
        res.send("ERROR WHILE CREATING NEW PERSON IN DB");
    }
}

export const getPersons = async (req, res) => {
    try {
        const persons = await Person.find();
        res.json(persons);
    } catch (err) {
        console.log(`ERROR WHILE FETCHING RECORDS FROM DB ${err}`);
        res.send("ERROR WHILE FETCHING DATA FROM DB");
    }
}

export const getPersonById = async (req, res) => {
    try {
        const person = await Person.find({"_id":req.params.personId});
        res.json(person);
    } catch (err) {
        console.log(`ERROR WHILE FETCHING PERSON RECORD BY ID ${err}`);
        res.send("ERROR WHILE FETCHING PERSON BY ID");
    }
}

export const updatePerson = async (req, res) => {
    try {
        const filter = {"_id":req.params.personId};
        const update = req.body;
        const person = await Person.findOneAndUpdate(filter, update, {new: true});
        res.json(person);
    } catch (err) {
        console.log(`ERROR Updating Person filtered by ID ${err}`);
        res.send("ERROR Updating Person record filtered by ID");
    }
}

export const deletePerson = async (req, res) => {
    try {
        const response = await Person.deleteOne({"_id":req.params.personId});
        res.json(response);
    } catch (err) {
        console.log(`ERROR WHILE DELETING RECORD IN DB, BY ID ${err}`);
        res.send("ERROR WHILE DELETING RECORD BY ID");
    }
}


