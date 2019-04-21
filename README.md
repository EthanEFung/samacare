# SAMACARE

## Setting up the project

First add the relevant .env file to the root of the directory.

Dependencies
```
postgres
node version 10.15.3
```
Postico is also a nice to have to check on your computers local databases.

From the command line run the following.

```
npm install
npm run db:reset
npm run dev

cd client
yarn start

```
Navigate to localhost:3000 in the browser

## What I Developed and Tradeoffs

Overall, I recognize that this project is under-developed. However, I have
set up the api and client framework.

Most importantly, the client can upload a file. The file is saved to my
cloudinary account, saves the url in the database.

Though I wish I had time to implement the UI to draw a configuration. I knew
that this would be a tricky task that depends heavily on the users ability
to upload a file, as well as persist the configuration data previously saved.
I chose to focus on these aspects of the app.

I ran into several configuration issues, and my domain knowledge was not as
strong as I had hoped, but I learned a lot from this.