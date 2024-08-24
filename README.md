# Gym App

Created by Jack Hotchkiss

Started: April 12th, 2024  
Ended: Present

![Screenshot](/assets/screenshot.png)

## About the Project

### Description

This project is a web app to help users track their progress on their fitness journey. It has features such as...

- Workout Tracking
- Weight Tracking
- Exercise Tracking
- Split Creator

### Tech Stack

- <a href="https://nextjs.org/"><img src="assets/nextjslogo.svg"></a>
- <a href="https://react.dev/"><img src="assets/reactlogo.svg"></a>
- <a href="https://typescriptlang.org/"><img height="28px" src="assets/typescript.png"></a>
- <a href="https://expressjs.com/"><img height="28px" src="assets/express.png"></a>
- <a href="https://nodejs.org/en"><img height="28px" src="assets/node.png"></a>

### Project Structure

This repository is a monorepo using the turborepo build system.

```sh
gymapp
|-- apps
|   |-- gym
|   |-- api
|-- packages
|   |-- eslint-config
|   |-- typescript-config
|   |-- jest-config
|   |-- gymui
|
...
```

`/gym` - frontend of web app

`/api` - backend of web app

`/gymui` - custom component library

## Getting Started

_Follow the following steps to intall the app on your local machine_

### Prerequisites

- [NodeJS](https://nodejs.org/en/download/prebuilt-installer)
- [MySQL](https://dev.mysql.com/downloads/installer/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/jackHotch/Gym-App.git
```

## Usage

_Follow the following steps to run the application on your machine_

### Before the First Time

1. Go into each `/Databse/* Parser/index.js` file and change the update the connection to your local database

```js
let con = mysql.createConnection({
  host: YOUR INFORMATION,
  user: YOUR INFORMATION,
  password: YOUR INFORMATION,
  database: YOUR INFORMATION,
});
```

2. Run each parsing file to populate the database

```sh
node index.js
```

3. In the root of the project

```sh
npm install
```

### Run the Application

1. Start your MySQL database
2. Open your terminal
3. In the root of the project run the following command to start all dev servers

```sh
npm run dev
```

5. Go to `http://localhost:3000` in your web browser

## GymUI

This is a custom component library made specifically for this app.

![Screenshot](/assets/gymui.png)

### Storybook

To run the component library in storybook

```sh
npm run storybook
```

## Other Information

### Build the Project

```sh
npm run build
```

This command will build the entire project.

### Test the Project

```sh
npm run test
```

This command will test the entire project
