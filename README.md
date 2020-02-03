# dayz ☀️
Track your days, weeks, months, and years with `dayz` -- a minimalistic, aesthetic, and colorful online bullet journal.   

## Motivation
In December 2019, I saw a Reddit post titled ["I decided to keep track of how each day in 2019 went for me"](https://www.reddit.com/r/CasualConversation/comments/ehz6di/i_decided_to_keep_track_of_how_each_day_in_2019/?utm_source=share&utm_medium=web2x) and decided I too wanted to keep track of my days for 2020. So I made a similar [Google Sheets spreadsheet](https://docs.google.com/spreadsheets/d/1D9-rCOvZ2aekkK3pYQw-7tHW3TcxV0UnGJZm_DeWiXk/edit?usp=sharing). However, leaving comments on days was unideal and I couldn't view different timeframes such as weeks and months so I coded `dayz`. 

Concurrently, I've also always loved the idea of bullet journaling but drawing lines and coloring by hand frustrated me to no end -- my lines weren't straight enough and I'd accidentally color out of the box. With `dayz`, I have created my perfect bullet journal. 

Built on a [MERN](https://www.geeksforgeeks.org/mern-stack/) stack, `dayz` utilizes a [RESTful](https://restfulapi.net/) api. This is the Github repo for the open source project `dayz`.

## Getting Started

### Backend

The `backend` folder contains the backend code for the site which is an [Express](https://expressjs.com/) framework on top of a [MongoDB](https://www.mongodb.com/) database with a [Mongoose](https://mongoosejs.com/) ODM. 

To run a local instance of the backend with [nodemon](https://nodemon.io/) reload:
```
$ cd backend
$ npm run devStart
```

### Frontend

The `frontend` folder contains the frontend code for the site which was built using [React](https://reactjs.org/) and bootstrapped with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app). It heavily utilizes JavaScript's [Date API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). 

To run a local instance of the frontend: 
```
$ cd frontend
$ npm start
```

