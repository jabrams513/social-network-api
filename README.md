# Social Network API
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Purpose
This application aims to provide an API for a social network web platform, allowing users to seamlessly share their thoughts, interact with friends' thoughts through reactions, and manage a friend list. The implementation utilizes Express.js for efficient routing, a MongoDB database for data storage, and the Mongoose ODM (Object Data Modeling) for streamlined interaction with the database. The inclusion of a JavaScript date library or the native Date object enhances the functionality, enabling the formatting of timestamps for a more user-friendly experience.

## User Story

AS A social media startup

I WANT an API for my social network that uses a NoSQL database

SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API

WHEN I enter the command to invoke the application

THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia

THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia

THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Usage
- The application requires Node.js for proper functioning
- To install the necessary dependencies, navigate to the root directory and execute the following command:
>    `npm i`

Post-installation:
- Functionality:
    - Execute `npm start` in the terminal to launch the server
    - Utilize [Insomnia](https://insomnia.rest/download) to interact with various routes.

## Screenshot
Please refer to the following video link(s) as a reference for the application's appearance and functionality:

[Social Network API Demo Video](https://app.screencastify.com/v3/watch/u8nlVNxpqUbxSRWnWWLU) <br/>

## Code Sources and Collaborators
I had the opportunity to collaborate with my peers Kenny and Mustapha. We checked our work with one another.

In addition, I received feedback from my instructor, Diego, my TA, Andrew, as well as my tutor, Meg.

All code used was self-generated or otherwise gathered from class materials.