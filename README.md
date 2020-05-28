# Pern Twitter Clone

```
As a user
So that I can let people know what I am doing
I want to post a tweet to Twitter
```

```
As a user
So that I can see what others are saying
I want to see all tweets in reverse chronological order
```

```
As a user
So that I can better appreciate the context of a peep
I want to see the time at which it was made
```

```
As a user
So that I can post messages on Twitter as me
I want to sign up for Twitter
```

```
As a user
So that only I can post messages on Twitter as me
I want to log in to Twitter
```

```
As a user
So that I can avoid others posting messages on Twitter as me
I want to log out of Twitter
```

---

## How to Run

Clone this repo, make sure you have Node.js installed, and if using a mac, have the homebrew manager installed.

Then in the command line, navigate to the [**Server**](server) directory, and type:

```
brew install postgresql
```

```
npm install
```

This will install the dependencies needed, and install the PostgreSQL database application. You will then need to run PostgreSQL on your local machine by typing int he command line:

```
psql
```

Then open up the [**database.sql**](database.sql) and [**testDatabase.sql**](testDatabase.sql) files (inside [**database**](database) directory), and copy the `CREATE DATABASE` and `CREATE TABLE` commands into the psql command line. This will create your database, and test database and your tables to store the descriptions of the tweets.

Update the [**db.js**](db.js) and [**testDb.js**](testDb.js) files with your `User` field from the Postgres (and any password if applicable). Then from the command line, start up the server (in the server directory) by typing in:

```
npm start
```

Open up a new terminal, and then navigate to the [**Client**](client) directory. From here in the command line, also type in:

```
npm start
```

This will start up the Frontend, React interface. A tab on your browser will open with [**this**](http://localhost:3000/). From here you will see the Twitter User Interface. Tweets can then be written, viewed, updated of deleted, this will be reflected in the Posgres database!

---
