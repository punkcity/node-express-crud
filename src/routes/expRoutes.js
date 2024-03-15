import { addNewPerson, getPersons, getPersonById, updatePerson, deletePerson } from "../controllers/expController";

const routes = (app) => {
    app.route('/persons')
    //Get ALL Persons
    .get((req, res, next) => {
        //Any business logic comes here
        // console.log(`Request from: ${req.originalUrl} using method: ${req.method}`);
        next();
    }, getPersons)
    //Create a new record
    .post(addNewPerson);

    //Both the following ones need ID to be passed in the URL
    app.route('/persons/:personId')

    //Get a specific record
    .get(getPersonById)

    //Update a specific record by ID
    .put(updatePerson)

    //Delete a specific record by ID
    .delete(deletePerson)
}

export default routes;