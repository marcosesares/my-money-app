@@ -1,30 +0,0 @@

# my-money-app

My money management

# App Configuration

# express -> web server

# mongoose -> persistence framework

# body-parser -> Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers.

# lodash -> A modern JavaScript utility library delivering modularity, performance & extras.

# mongoose-paginate -> Pagination plugin for Mongoose

# express-query-int -> Convert query strings to numbers for express/connect applications.

# node-restful -> Create awesome APIs using express. Register mongoose resources and default RESTful routes are automatically made.

# pm2 -> PM2 is a production process manager for Node.js applications with a built-in load balancer. It allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks.

# Authentication

# bcrypt -> A library to help you hash passwords.

# jsonwebtoken (JWT) -> An implementation of JSON Web Tokens. JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.

# nodemon -> nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

# backend

npm init -y
npm i --save express mongoose body-parser lodash mongoose-paginate express-query-int node-restful pm2 bcrypt jsonwebtoken

# DEV

npm i --save-dev nodemon

# frontend

# DEV

npm i --save admin-lte axios babel-core babel-loader babel-plugin-react-html-attrs babel-plugin-transform-object-rest-spread babel-preset-es2015 babel-preset-react css-loader extract-text-webpack-plugin file-loader font-awesome ionicons lodash react react-dom react-redux react-redux-toastr react-router redux redux-form redux-multi redux-promise redux-thunk style-loader webpack webpack-dev-server

# Installing backend
cd backend
npm config set legacy-peer-deps true
npm i
npm start
add .env and .env.ts

.env example:
module.exports = {
authSecret: '<secret_key>',
dbUser: '<user>',
dbPassword: '<pass>',
MONGODB_URI: "<dburi>"
}

.en.ts example
export const dbUser="<user>"
export const dbPassword="<pass>"

files stored on drive