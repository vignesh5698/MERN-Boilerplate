General flow backend: 
  The request sends the request to the API with the route and the controller executes the function with in the database.
Create folder in the name of project: (soccer)

$npx create-react-app frontend

$mkdir backend
~/backend$npm init
~/backend$npm i --save-dev babel-cli babel-preset-env babel-preset-stage-0 && npm i body-parser express mongoose nodemon

~/backend$ <CREATE .BABEL.RC FILE>
~/backend$ <CHANGE PACKAGE.JSON START SCRIPT>

=> create controllers, routes and models folder with files
=> Mongoose and body-parser setup in backend/index.js

CREATE MODEL: (Playermodel)
  => defines type and structure of data in database
  => types available: Number, String, Array, Boolean, Date

CONTROLLERS: 
  => controller are the functions that interact with database when we are making request to the API.

