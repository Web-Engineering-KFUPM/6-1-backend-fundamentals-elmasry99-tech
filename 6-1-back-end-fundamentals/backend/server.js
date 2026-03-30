import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the about page!");
});
app.get('/student', (req, res) => {
     res.json({
       name: 'Aisha',
       major: 'Computer Science'
     });
   });



// TODO 1: Import Express



// TODO 2: Create the Express app and store it in a variable named app



// TODO 3: Allow React to access the server



// TODO 5: Create the home route "/"



// TODO 6: Create the "/about" route



// TODO 7: Create the "/student" route



// TODO 4: Start the server on port 3000