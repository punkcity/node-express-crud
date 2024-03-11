import { addNewContact, getContacts, getContactById, updateContact, deleteContact } from "../controllers/expController";

const routes = (app) => {
    app.route('/contact')
    //Get ALL Contacts
    .get((req, res, next) => {
        //Any business logic comes here
        // console.log(`Request from: ${req.originalUrl} using method: ${req.method}`);
        next();
    }, getContacts)
    //Create a new Contact
    .post(addNewContact);

    //Both the following ones need ID to be passed in the URL
    app.route('/contact/:contactId')

    //Get a specific Contact
    .get(getContactById)

    //Update a specific Contact
    .put(updateContact)

    //Delete a specific Contact
    .delete(deleteContact)
}

export default routes;