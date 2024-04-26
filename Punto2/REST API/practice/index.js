//Using nodemon to update the app when making a change.
// npm i nodemon -D
//-D to install the module as a developement module, only active when editing the code.
import express from 'express';

//Allows to work with system files.
import fs from 'fs';

//Allows to parse JSON data into the API.
import bodyParser from 'body-parser';

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

//Endpoint for books
app.get("/books", (req, res) => {
    const data = readData();
    res.json(data.books);
});

//Endponint for searching by id.
app.get("/books/:id", (req, res) =>{
    try {
        const data = readData();
        const id = parseInt(req.params.id);
        const book = data.books.find((book) => book.id === id);
        res.json(book);
    } catch (error) {
        res.send("the requested Id was not found:" + error);
    }
});

app.post("/books", (req, res) =>{
    const data = readData();
    const body = req.body;

    const newBook = {
        id: data.books.length + 1,
        ...body
    };

    data.books.push(newBook);
    writeData(data);
    res.json(newBook);
});

app.put("/books/:id", (req, res) =>{
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id);
    const bookIndex = data.books.findIndex((book) => book.id === id);
    if(bookIndex === -1){
        res.json({message: "The requested Id was not found"});
    }else{
        data.books[bookIndex] = {
            ...data.books[bookIndex],
            ...body,
        }
        writeData(data);
        res.json({message: "Book updated successfully"});
    }
});

app.delete("/books/:id", (req, res) =>{
    const data = readData();
    const id = parseInt(req.params.id);
    const bookIndex = data.books.findIndex((book) => book.id === id);
    const bookName = data.books[bookIndex].name;
    data.books.splice(bookIndex,1);
    writeData(data);
    res.json({message: `The book ${bookName} was deleted successfully}`})
});

//Port listener
app.listen(3001, () =>{
    console.log("Server currently listening on port 3001.");
});