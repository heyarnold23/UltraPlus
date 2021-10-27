# UltraPlus

## What is UltraPlus?

UltraPlus is a full stack app utilizing PostgreSQL, Flask, and React. Ultraplus allows users to browse a variety of anime shows and watch content from that show (In this case only clips from YouTube). Logged in users can create a number of profiles per account as well as have a number of watchlists per profile. With these watchlists, users can add shows as well as remove them. Currently, UltraPlus is only seeded with a few demo users as well as a handful of shows to interact with.

## Application Architecture

UltraPlus is built on a React frontend with a Flask backend, using PostgreSQL as a database.

## Frontend Overview

UltraPlus does the vast majority of its application logic on the backend, but display/interaction logic on the frontend is managed using several technologies.

### Frontend Technologies Used

#### React 

UltraPlus is a React application. All display logic is handled by the React libraries.

#### Redux

UltraPlus makes extensive use of Redux. All state management is handled with Redux, with thunks making API calls to the backend server for data. 

#### React Player (for videos)

The React Player library is used to allow users to view a clip of the show of their choosing. 

## Backend Overview

UltraPlus uses a Flask server with a PostgreSQL database.

### Backend Technologies Used

#### Flask

Although Express could have done the job as well, Flask was my choice for this project. I didn't have as much experience with it yet as I did with Express and so I wanted to improve upon it. Flask was also easy to work with in that I was able to explicilty see what data would be sent back and what needed to be sent in from the front to work.

#### PostgreSQL

PostgreSQL was the database of choice because it is simple to work with, and is easily manipulable using Sequelize.

#### Sequelize

Sequelize was the ORM of choice for UltraPlus because of how nicely it integrates with PostgreSQL. All table management and data seeding was handled neatly and simply by way of Sequelize.

## Conclusion and Next Steps

So far I am pleased with the progress made on UltraPlus's functionality. In the future I would like to implement a search bar to allow users to search for a show on the site. 
