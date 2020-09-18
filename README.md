# FitManager Server
REST API built with NodeJS, Express and Knex to the app FitManager.
This project is part of my portfolio, I'll accept suggestions and criticism.
You can use this project as you wish!


## Getting Started

### Prerequisites
This project was built with NodeJS 14.6, I recommend you use this version or similar.

### Installing
**Clone the repo**
```
$ git clone https://github.com/nvrsantos/FitManager-server.git
$ cd fitManager-server
```

**Installing dependencies**
```
$ yarn
```

_or_

```
$ npm install
```

**Set settings**
 1. Change name of file `template_env` to `.env`
<<<<<<< HEAD
 2. Replace `<SECRET_KEY>` for your of key (anything), change `<USER_DB>` and `<PASSWORD_DB>` for credentials of connection of mongodb collection and end chance `<EMAIL>` and `<PASSWORD_EMAIL>` for credentials login of your service of email
=======
 2. Replace `<KEY>` for your of key (anything), change `<USER>` and `<PASSWORD>` for credentials of connection of mongodb collection
>>>>>>> 1ae7055b00dbab79113dc176b45609054d70627e

### Running project

In the environment of development execute
```
$ yarn dev
```

_or_

```
$ npm run dev
```

In the environment production execute
```
$ yarn start
```

_or_

```
$ npm run start
```

## Routes

#### Signin Route
- **This is the route that you can use to signin**
> http://localhost:3000/signin

| ENDPOINT | Method | Body | URL Params | Success Response | Server Error Response 
|--|--|--|--|--|--|
| / | `POST`  | `{ <email>, <password> }` | - |**Code:** 200 - OK<br />**Content:** `{ user: {<email>, <password>}, token: <Token JWT> }`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`

#### Signup Route
- **This is the route that you can use to create a new user**
> http://localhost:3000/signup

| ENDPOINT | Method | Body | URL Params | Success Response | Server Error Response 
|--|--|--|--|--|--|
| / | `POST`  | `{ <name>, <email>, <password> }` | - |**Code:** 200 - OK<br />**Content:** `{message: <A Message Success>}`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`

#### Forgot Password Route
- **This is the route that you can use to generate a new password and send to your email**
> http://localhost:3000/forgot

| ENDPOINT | Method | Body | URL Params | Success Response | Server Error Response 
|--|--|--|--|--|--|
| / | `POST`  | `{ <email> }` | - |**Code:** 200 - OK<br />**Content:** `{message: <A Message Success>}`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`

#### User Route
> http://localhost:3000/user

| ENDPOINT | Method | Body | URL Params | Success Response | Server Error Response 
|--|--|--|--|--|--|
| / | `GET`  | - | - |**Code:** 200 - OK<br />**Content:** `{ user: {<id>, <name>, <email>, <avatar>}, token: <Token JWT> }`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`
| /info | `GET`  | - | - |**Code:** 200 - OK<br />**Content:** `{<weight>, <height>, <IMC>}`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`
| / | `PUT`  | `{<Fields to update>}` | - |**Code:** 200 - OK<br />**Content:** `{ message: <A Message of success>, token: <Token JWT> }`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`
| / | `DELETE`  | - | - |**Code:** 200 - OK<br />**Content:** `{ message: <A Message of success> }`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`

#### Weight Route
> http://localhost:3000/weight

| ENDPOINT | Method | Body | URL Params | Success Response | Server Error Response 
|--|--|--|--|--|--|
| / | `GET`  | - | - |**Code:** 200 - OK<br />**Content:** `[ {<id>, <title>, <date>}, {<id>, <title>, <date>}, ... ]`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`
| / | `POST`  | `{<title>, <date>}` | - |**Code:** 200 - OK<br />**Content:** `{ message: <A Message of success> }`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`
| / | `DELETE`  | - | id |**Code:** 200 - OK<br />**Content:** `{ message: <A Message of success> }`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`

#### Exercise Route
> http://localhost:3000/exercise

| ENDPOINT | Method | Body | URL Params | Success Response | Server Error Response 
|--|--|--|--|--|--|
| / | `GET`  | - | - |**Code:** 200 - OK<br />**Content:** `[ {<id>, <title>, <day_of_week>, <loop>, <delay_time>}, ... ]`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`
| / | `POST`  | `{<id>, <title>, <day_of_week>, <loop>, <delay_time>}` | - |**Code:** 200 - OK<br />**Content:** `{ message: <A Message of success> }`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`
| / | `DELETE`  | - | id |**Code:** 200 - OK<br />**Content:** `{ message: <A Message of success> }`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`

#### Height Route
> http://localhost:3000/height

| ENDPOINT | Method | Body | URL Params | Success Response | Server Error Response 
|--|--|--|--|--|--|
| / | `GET`  | - | - |**Code:** 200 - OK<br />**Content:** `[ {<id>, <title>, <date>}, {<id>, <title>, <date>}, ... ]`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`
| / | `POST`  | `{<title>, <date>}` | - |**Code:** 200 - OK<br />**Content:** `{ message: <A Message of success> }`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`
| / | `DELETE`  | - | id |**Code:** 200 - OK<br />**Content:** `{ message: <A Message of success> }`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`

#### Logs Route
> http://localhost:3000/logs

| ENDPOINT | Method | Body | URL Params | Success Response | Server Error Response 
|--|--|--|--|--|--|
| /error | `GET`  | - | - |**Code:** 200 - OK<br />**Content:** `<log file>`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`
| /info | `GET`  | - | - |**Code:** 200 - OK<br />**Content:** `<log file>`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`
| /debug | `GET`  | - | - |**Code:** 200 - OK<br />**Content:** `<log file>`  |  **Code:** 500 _or_ 400 <br />**Content:** `{ error:  <A Message with a description of the Error> }`

## Database Models
### User
 - Id - ```[Integer]```
 - Name - ```[String]```
 - Email - ```[String]```
 - Password - ```[String]```
 - Avatar - ```[String]```

### Weight
 - Id - ```[Integer]```
 - Title - ```[String]```
 - Date - ```[String]```
 - User_ID - ```[Integer]```

### Exercise
 - Id - ```[Integer]```
 - Title - ```[String]```
 - DayOfWeek - ```[String]```
 - Loop - ```[String]```
 - DelayTime - ```[String]```
 - User_ID - ```[Integer]```
 
### Height
 - Id - ```[Integer]```
 - Title - ```[String]```
 - Date - ```[String]```
 - User_ID - ```[Integer]```

### Backup
 - Id - ```[Integer]```
 - Data - ```[Longtext]```
 - User_ID - ```[Integer]```
 
## TODO Functions
### Auth Routes
  - [x] - SignUp 
  - [x] - SignIn 
  - [x] - Forgot Password

### App Routes
 - [x] Create New Weight
  - [x] Delete Weight
  - [x] List Weight
  - [x] Create New Height
  - [x] Delete Height
  - [x] List Height
  - [x] Create New Exercise
  - [x] Delete Exercise
  - [x] List Exercise
  - [x] List End Weight, End Height
  - [x] Edit Profile
 - [x] Calculate IMC
 
## Built With
- [NodeJS](https://nodejs.org/en/) - Build the project
- [body-Parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware
- [express](https://expressjs.com/) - Router of the Application
- [nodemon](https://nodemon.io/) - Process Manager used in the development
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) - Module for encode the password in a hash
- [consign](https://github.com/jarradseers/consign) - Autoloader scripts
- [cors](https://github.com/expressjs/cors) - Middleware for provide connection
- [jwt-simple](https://github.com/hokaccha/node-jwt-simple) - Encode and Decode JWT
- [moment](https://momentjs.com) - Parsing, validating, manipulating, and formatting dates
- [passport](http://www.passportjs.org) - Middleware for authenticate
- [fasam-imc-calc](https://www.npmjs.com/package/fasam-imc-calc) - Calculator IMC
- [convert-units](https://github.com/ben-ng/convert-units) - Convertor of units
- [mongoose](https://mongoosejs.com) - Module for model object MongoDB
- [nodemailer](https://nodemailer.com/) - Module for send email

## Thanks
This README was based in [README](https://github.com/steniowagner/mindcast-server/blob/master/README.md)
