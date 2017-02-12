[![Stories in Ready](https://badge.waffle.io/TudorTacal/makers-standups-retros.svg?label=ready&title=Ready)](http://waffle.io/TudorTacal/makers-standups-retros)


Standups & Retros
===========

A web application to hold standups and retros in real time.

*"Standups & Retros"* is the final two weeks project created by four Makers Academy students from the November 2016 cohort. At Makers Academy we have been developing software applications using Agile methodologies. A concern over how to continue having standups and Retros after having graduated from Makers Academy gave birth to the *"Standups & Retros"* idea. The application allows a user to start a standup or retro session and invite users to collaborate on a whiteboard.

We wanted to recreate the same feeling of having an actual standup or retro at the Makers Academy office. We therefore put high emphasis on a dynamic interface and a fast and efficient web application. We choose the MERN stack since we believed that the technologies involved would be best for the job. which  We further implemented websockets so that users could get that feeling of being able to collaborate live form wherever they are in the world.

The user experience was an important issue for the team so we built the webpage using React components to make the updates on the whiteboard fast and dynamic. We wanted the web application to be fun so every user is assigned a random font and color and whenever something is added to the whiteboard the font and color is applied. We built the application so that users can have several ongoing sessions at once and all the data is managed accordingly. This involved a high data validation since all users in a session will have knowledge of a user's font, color and what they write on the whiteboard. We further incorporated the actual whiteboard and bricks from the Makers Academy office in to the design to keep the genuine feel of being back in the building. We incorporated a live chat where people can discuss when adding to the whiteboard. We added a link feature to a stack overflow search on issues that a user would be potentially blocked on. All the data is persisted in our MongoDB database so if a user wants to revisit a previous session or a user arrives late to a session all the data is fetched via get requests to the database.

We had a lot of fun working on this project and the team was challenged technically since none of the technologies had been taught at Makers Academy. We have used the latest ES6 javascript syntax which created some hurdles for the team. Applying Agile work processes the team was able to overcome these challenges. The project is a testament to the skills we have picked up at Makers Academy and shows how quick we have been able to pick of new technologies.

The project can be found at https://standupsandretros.herokuapp.com/.

## Installation

Clone this repository to your local machine. Go to the project folder and run npm install.


## Usage

Once all the dependencies has been installed, run webpack to bundle compile all the javascript included in the project. Now you are ready to start the application by running npm start. If you visit http://localhost:3000/ the app should be up and running and you can start a standup or retro session.

## Technologies involved

* MongoDB
* Express
* React
* Node.js
* Wesockets
* CSS
* HTML
* Babel
* Webpack
