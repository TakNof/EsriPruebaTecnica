//Using nodemon to update the app when making a change.
// npm i nodemon -D
//-D to install the module as a developement module, only active when editing the code.
import express from 'express';

//Allows to work with system files.
import fs from 'fs';

//Allows to parse JSON data into the API.
import bodyParser from 'body-parser';

import mongoose, { model } from 'mongoose';

import * as models from "../models.js";

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

function getModelSelected(collectionName){
    let modelSelected = collectionName;
    modelSelected = modelSelected.slice(0, -1);
    modelSelected = modelSelected.charAt(0).toUpperCase() + modelSelected.slice(1);
    return modelSelected;
}

//Base endpoint
app.get("/", (req, res) =>{
    res.send("Welcome to the enterprice management API.");
});

//Endpoint for books
// app.get("/books", (req, res) => {
//     const data = readData();
//     res.json(data.books);
// });

//Endponint for searching by id.
// app.get("/books/:id", (req, res) =>{
//     try {
//         const data = readData();
//         const id = parseInt(req.params.id);
//         const book = data.books.find((book) => book.id === id);
//         res.json(book);
//     } catch (error) {
//         res.send("the requested Id was not found:" + error);
//     }
// });

// app.post("/books", (req, res) =>{
//     const data = readData();
//     const body = req.body;

//     const newBook = {
//         id: data.books.length + 1,
//         ...body
//     };

//     data.books.push(newBook);
//     writeData(data);
//     res.json(newBook);
// });

// app.put("/books/:id", (req, res) =>{
//     const data = readData();
//     const body = req.body;
//     const id = parseInt(req.params.id);
//     const bookIndex = data.books.findIndex((book) => book.id === id);
//     if(bookIndex === -1){
//         res.json({message: "The requested Id was not found"});
//     }else{
//         data.books[bookIndex] = {
//             ...data.books[bookIndex],
//             ...body,
//         }
//         writeData(data);
//         res.json({message: "Book updated successfully"});
//     }
// });

// app.delete("/books/:id", (req, res) =>{
//     const data = readData();
//     const id = parseInt(req.params.id);
//     const bookIndex = data.books.findIndex((book) => book.id === id);
//     const bookName = data.books[bookIndex].name;
//     data.books.splice(bookIndex,1);
//     writeData(data);
//     res.json({message: `The book ${bookName} was deleted successfully}`})
// });
let collectionNames = ["enterprises", "users", "projects", "user_project"];

for(let collectionName of collectionNames){
    app.get(`/${collectionName}`, (req, res) => {
        // try {
        //     const data = readData();
        //     res.json(data[collectionName]);
        // } catch (error) {
        //     res.send(`The requested list of items was not found: ${error}`);
        // }
        models[getModelSelected(collectionName)].find({}, (err, user) => {
            if (err) {
                res.send(err);
            } else {
                res.json(user);
            }
        });
    });

    app.get(`/${collectionName}/:id`, (req, res) => {
        // try {
        //     const data = readData();
        //     const id = req.params.id;
        //     const item = data[collectionName].find((item) => item._id === id);
        //     if(item === undefined){
        //         throw new Error('The item could not be found.');
        //     }
        //     res.json(item);
        // } catch (error) {
        //     res.send(`The requested Id at ${collectionName} was not found: ${error}`);
        // }
        models[getModelSelected(collectionName)].findById(req.params.id)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.send(err);
        });
    });

    app.post(`/${collectionName}`, (req, res) => {
        // try {
        //     const data = readData();
        //     const body = req.body;
        //     const newItem = new models[getModelSelected(collectionName)](body);
        //     data.collectionName.push(newItem);
        //     writeData(data);
        //     res.json(data);
        // } catch (error) {
        //     res.send(`Unable to load the data at ${collectionName}: ${error}`);
        // }
        const body = req.body;
        const newItem = new models[getModelSelected(collectionName)](body);
        newItem.save((err, user) => {
            if (err) {
                res.send(err);
            } else {
                res.json(user);
            }
        });
    });
}

app.post('/users', (req, res) => {
    const newUser = {
        id: db.users.length + 1,
        ...req.body
    };

    db.users.push(newUser);
    res.json(newUser);
})

app.put('/users/:id', (req, res) => {
    
});

app.delete('/users/:id', (req, res) => {
    
});

//Port listener
app.listen(3001, () =>{
    console.log("Server currently listening on port 3001.");
});