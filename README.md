# Twitter timeline by username

App displays tweets of the user by its username.

Run Application locally:

The backend server uses express (node server) and the frontend UI uses ReactJs.

```bash

  git clone git@github.com:natalidedik/timeline-twitter.git
  // Run the API Server
  cd timeline-twitter/
  npm install
  npm start
  //  Run the React UI
  cd react-ui/
  npm install
  npm start

  ```
Before use you need react, react-dom, react-scripts, express, body-parser, twitter to be installed with npm i.

Will redirect to http://localhost:5000/.
To display tweets insert username of twitter user to input and click Submit.

## Demo

[Demo version](https://timeline-twitter.herokuapp.com/) Here you can see working version of the App.

## Deploy to Heroku

```bash
git clone git@github.com:natalidedik/timeline-twitter.git
cd timeline-twitter/
heroku create timeline-twitter
git push heroku master
```
👓 More about [deploying to Heroku](https://devcenter.heroku.com/categories/deployment).
