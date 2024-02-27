# G1B5_JS_GradedProject2
# This is group assignment, a Project made with HTML, CSS, JS in visual studio code.
* This repository contains a web application designed for managing job applicants and their details. The application is built for front-end developers working in an 
  organization that receives applications in JSON format for various job openings. The application has two main pages:

** LOGIN PAGE **
* Users can log in by entering their (Username -> username)  and (Password -> password ).
* User credentials are stored in local storage for authentication.
* If the provided credentials are valid, the user is directed to the Resume Page.
* Prevents users from navigating back to the Login Page using the browser's back button.
* Displays an "Invalid username/password" message for incorrect credentials.

  
** RESUME PAGE **
* Displays applicant details fetched from a JSON file.
* Next and Previous buttons allow navigation between applicant details, regardless of the job they applied for.
* Provides filtering capabilities, allowing users to search for specific job openings and displaying matching applications.
* Manages button visibility based on context: hides navigation buttons if only one application is found for a job opening or hides the Previous button if the first 
  application is displayed.
* Informs the user of "Invalid search or No applications for this job" if there are no matching results.
* The web application aims to streamline the management of job applicants, offering user-friendly navigation and filtering options. It is intended for front-end developers 
   looking to create a straightforward and efficient interface for handling applicant data.
