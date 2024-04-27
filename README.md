# Social Network Api Example
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)
  ## Description
This project demonstrates the usage of mongoose and express.js packages to build an API. The API allows for the creation, retrieval, updating, and deletion of users and thoughts. Users can have multiple thoughts, and each thought can be associated with a single user. Additionally, users can react to thoughts by creating their own thoughts, creating a threaded conversation. Users can also establish friendships with other users. It's important to note that this project does not include a front-end interface. The purpose of this project is to serve as an example API for a full-stack social network application. To test the functionality of the API, I recommend using Insomnia, an application that allows for easy testing of API endpoints. For a demonstration of how to start the server and use each route/endpoint, please refer to the accompanying video.
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  ## Installation
  To install the application clone the code on your machine. Once cloned open the repository in a terminal and run the command npm install to install all dependencies required to run the application. Since this application uses mongoose you will need to have mongoDB installed on your maching. Once mongoDB is installed you can use MongoDB compass to create a database called socialNetworkApi. If you are required to create a collection just create a test one called test and the application will create the rest of the collections needed for you. After the db is created run node server.js in the terminal we opened earlier to start the server. From there the api should be accessible at localhost:3001 and use insomnia to test the routes.
  ## Usage
  The following video shows how to start the application and use Insomnia to use each route.

  https://drive.google.com/file/d/1kTdzNKS5CoX5HfihGuftOosSqe7gvQv8/view

  ## Contribution
  For this project I worked with Chase Seaberger.
  ## Tests
  For testing I use an application called Insomnia found here https://insomnia.rest/download
  ## License
  https://opensource.org/licenses/MIT
  Copyright <YEAR> <COPYRIGHT HOLDER>
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  ## Questions
  For any questions feel free to connect with me on github or by email.
  ### Contact
  GitHub: willber10
  Email: Willberschickler@gmail.com