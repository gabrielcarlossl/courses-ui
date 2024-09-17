# Courses-ui

- This project is the UI for view available courses from most recent to oldest 

### Prerequisities

What things you need to install the software and how to install them

* NodeJS v20+
    - Install through [NVM - Node Version Manager](https://github.com/nvm-sh/nvm)
    - After instaling nvm, run ```nvm install 20```, followed by ```nvm use 20```
    - The application was tested with Node in versions above 19.

### Installing and Running

* For development purposes, run the following command to install all the dependencies and to run the application, respectively:
  1. ```npm use 20```
  2. ```npm install``` or ```npm i```
  3. ``` npm run dev ``` (check the available command scripts at the *package.json* file)

## Built With

- Typescript, React, Redux, Axios, React-Final-Form, chakra-ui, emotion
- Form saving videos on AWS S3

## Authors

* **Gabriel Carlos** - *Initial work, Setup, Layout development, backend integration* - [Gabriel Carlos](https://github.com/gabrielcarlossl)

### Possible future improvements

- Increase componentization
- Refactor Redux, separate the actions and reducer
- Add more validations to form
- Add lazy loading on homepage 
- Use React Router Dom for better navigation