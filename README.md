[![Stories in Ready](https://badge.waffle.io/TudorTacal/makers-standups-retros.svg?label=ready&title=Ready)](http://waffle.io/TudorTacal/makers-standups-retros)


Standups & Retros
===========


*"Standups & Retros"* represents the final two weeks project created by a team of four Makers Academy students from the cool November 2016 cohort.

At *Makers Academy* we have been developing *software applications* using the *Agile* methodologies. A concern over how to continue having Stand-ups and Retros after having graduated, gave birth to the *"Standups & Retros"* project idea.

The application allows a user to conduct a Stand-up or Retro meeting and invite other users to collaborate on a whiteboard, in realtime.

We wanted to recreate the same feeling of having an actual Stand-up or Retro at the Makers Academy office. We therefore put high emphasis on a *dynamic interface* and a *fast* and *efficient* *web application*.

We choose the *MERN* stack since we believed that the technologies involved would be best suited for the job. We further implemented *websockets* so that users could get that feeling of being able to collaborate *live* from wherever they are in the world.

The *UX* was an important issue for the team so we built the webpage using *React components* to make the updates on the whiteboard fast and dynamic. We wanted the web application to be *fun* so every user is assigned a *random font* and *color* and whenever an item is added to the whiteboard the font and color is applied.

We built the application so that users can have *several ongoing sessions at once* and all the *data* is *managed* accordingly. This involved a high data validation since all users in a session will have knowledge of a user's font, color and what they write on the whiteboard.

We further incorporated the *actual whiteboard and bricks* from the Makers Academy office in to the design to keep the genuine feel of being back in the building.

We incorporated a *live chat* where people can discuss when adding items to the whiteboard.

We added a link feature to a *Stack Overflow search* on issues that a user would be potentially blocked on.

All the data is persisted in our *MongoDB database* so if a user wants to revisit a previous session or a user arrives late to a session all the data is fetched via get requests*.

We had a lot of fun working on this project and the team was challenged technically since *none of the technologies had been taught at Makers Academy*.

We used the latest *ES6 javascript syntax* which created some serious hurdles for the team. Applying Agile work processes and due to a professional *feedback loop* the team was able to overcome these challenges.

The project is a testament to the skills we have picked up at Makers Academy and shows how quick we are able to learn new technologies.

#### The project can be found at https://standupsandretros.herokuapp.com/.

## Screenshots

![Home Page](https://s2.postimg.org/yo4gnec49/standups_home_page.png)
![Live Standup](https://s11.postimg.org/4mn86jhnn/standup.png)

## Installation and use

2. Download or copy the repository.
3. You need to have [```node```](https://nodejs.org/en/download/) installed.
3. ```npm install```
4. Run the [```webpack```](https://webpack.github.io/docs/tutorials/getting-started/) command to compile all the javascript included in the project.
4. ```npm start```
5. Open ```localhost:3000``` in the browser.
7. To persist data, create a [MongoDB](https://docs.mongodb.com/getting-started/shell/) local database ```mongodb://localhost:/standups```.


## Technologies involved

* Javascript ES6
* MongoDB
* Express
* ReactJS
* NodeJS
* Socket.io (websockets)
* JSX
* Babel
* Webpack
* Axios
* Mongoose
* CSS3
* HTML5
* Heroku

## Future features

* *About us* page.
* Picture download at the end of the session.
* User management system.
* Github integration.
* Refactoring.


## Contacts

*Tudor Tacal* | *Kim Wilson* | *Dines Poulsen* | *Amanda Bater*
