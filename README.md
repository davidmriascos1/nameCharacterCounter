# nameCharacterCounter
 practicing passing data to EJS templates

# Overview 
This project is a basic web application built with Node.js, Express.js, and EJS. The main functionality allows a user to enter their first and last names, and then calculates the total number of characters in the name. The page dynamically displays the user’s full name and the character count.

# Project Purpose

This project is a beginner-level introduction to using EJS for rendering dynamic content and handling form data with Express.js. It helps understand how to work with server-side data and pass it to the client using templates.

# How It Works

	1.	Home Page (GET /):
	•	The user is presented with a form to enter their first and last names.
	•	Initially, the page displays the message “Enter your name ✍️”.
	2.	Form Submission (POST /submit):
	•	When the user submits their name, the data is processed by the server.
	•	The server calculates the full name (fName + lName) and the character count excluding spaces.
	•	The EJS file (index.ejs) is then rendered again with the name and character count to be displayed.

# Code Explanation

index.js

	•	Middleware (body-parser): The middleware is used to parse the form data.
	•	app.get("/"): The initial route that renders the index.ejs template for the home page.
	•	app.post("/submit"):
	•	Handles the form submission.
	•	Uses the submitted values (fName and lName) to create a full name and calculate the number of characters (excluding spaces).
	•	Renders index.ejs with the new data (name and nameCounted).

index.ejs

	•	Conditional Rendering:
	•	If the values for name and nameCounted exist (i.e., after form submission), it shows the name and character count.
	•	If these values do not exist (i.e., on the initial page load), it displays a prompt to “Enter your name ✍️”.
