//Using nodemon to update the app when making a change.
// npm i nodemon -D
//-D to install the module as a developement module, only active when editing the code.
import express from 'express';

//Allows to work with system files.
import fs from 'fs';

//Allows to parse JSON data into the API.
import bodyParser from 'body-parser';

function checkDates(item){
    const currentDate = new Date();
    if (!item.created_at)item.created_at = currentDate;
    item.update_at = currentDate;
    return item;
}

const app = express();

//Applying the parser.
app.use(bodyParser.json());

const readData = () =>{
    //Asynchronous method to read data from the file.
    try {
        const data = fs.readFileSync("./db.json");
        return JSON.parse(data);
    } catch (error) {
        console.log("Data reading failed: " + error);
    }
}

const writeData = (data) =>{
    //Asynchronous method to write data from the file.
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data));
        return JSON.parse(data);
    } catch (error) {
        console.log("Data wrting failed: " + error);
    }
}

//Base endpoint
app.get("/", (req, res) =>{
    res.send("Welcome to the enterprice management API.");
});

let collectionNames = ["enterprises", "users", "projects", "user_project"];

for(let collectionName of collectionNames){
    app.get(`/${collectionName}`, (req, res) => {
        try {
            const data = readData();
            res.json(data[collectionName]);
        } catch (error) {
            res.send(`The requested list of items was not found: ${error}`);
        }
    });

    app.get(`/${collectionName}/:id`, async (req, res) => {
        try {
            const data = readData();
            const id = parseInt(req.params.id);
            const item = data[collectionName].find((item) => item._id === id);
            if(item === undefined){
                throw new Error('The item could not be found.');
            }
            res.json(item);
        } catch (error) {
            res.send(`The requested Id at ${collectionName} was not found: ${error}`);
        }
    });

    app.post(`/${collectionName}`, (req, res) => {
        try {
            let data = readData();
            const body = req.body;
            let newItem = {
                "_id": data[collectionName].length + 1,
                ...body
            };
            newItem = checkDates(newItem);
            data[collectionName].push(newItem);
            writeData(data);
            res.json(data);
        } catch (error) {
            res.send(`Unable to load the data at ${collectionName}: ${error}`);
        }
    });

    app.put(`/${collectionName}/:id`, (req, res) =>{
        try{
            let data = readData();
            const body = req.body;
            const id = parseInt(req.params.id);
            const itemIndex = data[collectionName].findIndex((item) => item._id === id);
            if(itemIndex === -1){
                throw new Error("The requested Id was not found");
            }
            data[collectionName][itemIndex] = {
                ...data[collectionName][itemIndex],
                ...body,
            }
            writeData(data);
            res.send(`The ${collectionName.slice(0, -1)} with ID ${id} was updated successfully:\n${JSON.stringify(data[collectionName][itemIndex])}`);
        } catch (error) {
            res.send(`The requested Id at ${collectionName} was not found for edition: ${error}`);
        }
    });

    app.delete(`/${collectionName}/:id`, (req, res) =>{
        const data = readData();
        const id = parseInt(req.params.id);
        const itemIndex = data[collectionName].findIndex((item) => item._id === id);
        data[collectionName].splice(itemIndex,1);
        writeData(data);
        res.json({message: `The ${collectionName.slice(0, -1)} with ID ${id} was deleted successfully}`})
    });
}

//Port listener
app.listen(3001, () =>{
    console.log("Server currently listening on port 3001.");
});