import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
// Middleware to process data from specific input in this case a form 
app.use(bodyParser.urlencoded({ extended: true }));

//calling the HTTP request get to render index.ejs file. res.render is used for dynamic web pages. res.send and res.sendFile are for static html files
app.get("/", (req, res) => {
  res.render("index.ejs")
});

//calling the post HTML request in the route "/submit" to render the same file as in the get request "index.ejs".
app.post("/submit", (req, res) => {
  //creating a variable that holds the fName which is whatever the user type into the input name=fName + space + lName which is whatever the user type into the input name=lName
  // The purpose is grab the fullName in this const variable to use it later in the ejs file  e.g. David Riascos
  const fullName = req.body["fName"] + " " + req.body["lName"];
  //With this you combine both input the user wrote in order to use .length to count the characters e.g. DavidRiascos
  const nameNoSpaces = req.body["fName"] + req.body["lName"];// You can also use this code to make it short const nameNoSpaces = req.body["fName"].length + req.body["lName"].length; and eliminate numberCharacters and use the same variable nameNoSpaces
  const numberCharacters = nameNoSpaces.length;
  res.render("index.ejs", 
    //here you are using the value "name" to link it to the variable fullName to use it into the ejs file 
    {name: fullName,
      //here you are using the value "nameCounted" to link it to the variable we you use .length to count the fullName (could be numberCharacters or nameNoSpaces depend how you used it)
      nameCounted: numberCharacters
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
