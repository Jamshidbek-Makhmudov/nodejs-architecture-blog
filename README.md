# nodejs-architecture-blog

  Under Development
  <br>

# Project Highlights

1. Node.js
2. Express.js
3. Typescript
4. Mongoose
5. Redis
6. Mongodb
7. Jest
8. Unit Tests & Integration Tests
9. Docker
10. JWT
11. Joi

# About The Project

This project is designed for a production ready environment. It can handle the scale and complexity of a very demanding application. This project can bei used by companies like MindOrks, AfterAcademy...

It is suitable for Web Apps, Mobile Apps, and other API services.

# About The Author

You can connect with me here:

* [Jamshidbek Makhmudov](https://jamshid-makhmudov.vercel.app/)
* [Linkedin](www.linkedin.com/in/jamshid-makhmudov)

# Project Instructions

We will learn and build the backend application for a blogging platform. The main focus will be to create a maintainable and highly testable architecture.
<br>
Following are the features of this project:

* **This backend is written in Typescript**: The type safety at build time and having intellisense for it in the IDE like vscode is unparalleled to productivity. I have found production bug reduced to a significant amount since most of the code vulnerabilities are identified during the build phase itself.
* **Separation of concern principle**: Each component has been given a particular role. The role of the components is mutually exclusive. This makes the project easy to be unit tested.
* **Feature encapsulation**: The files or components that are related to a particular feature have been grouped unless those components are required in multiple features. This enhances the ability to share code across projects.
* **Centralised Error handling**: I have created a framework where all the errors are handled centrally. This reduces the ambiguity in the development when the project grows larger.
* **Centralised Response handling**: Similar to Error handling we have a response handling framework. This makes it very convenient to apply a common API response pattern.
* **Mongodb is used through Mongoose**: Mongodb fits very well to the node.js application. Being NoSQL, fast, and scalable makes it ideal for modern web applications.
* **Redis Memcache**: I have used the redis server for caching the items which does not change frequently. It will boost the performance of our system.
* **Async execution**: I have used async/await for the promises and made sure to use the non-blocking version of all the functions with few exceptions.
* **Docker compose has been configured**: I have created the Dockerfile to provide the easy deployability without any setup and configurations.
* **Unit test is favored**: The tests have been written to test the functions and routes without the need of the database server. Integration tests has also been done but the unit test is favored.
* **A pure backend project**: I have experienced that when a backend is developed clubbed with a frontend then in the future it becomes really difficult to scale. We would want to create a separate backend project that servers many websites and mobile apps.

## 3RE Architecture: Router, RouteHandler, ResponseHandler, ErrorHandler

<p align="center">
    <img src="/addons/github_assets/3RE.png">
</p>
<br>

## Project Outline: Blogging Platform

<p align="center">
    <img src="/addons/github_assets/project-outline.png">
</p>
<br>

## Request-Response Handling Schematic Diagram

<p align="center">
    <img src="/addons/github_assets/api-structure.png">
</p>
<br>

## You can find the complete API documentation [here](https://documenter.getpostman.com/view/1552895/2s8Z6u4a6N)

<a href="https://documenter.getpostman.com/view/25532907/2sA3kbheSS" target="_blank">
    <img src="https://raw.githubusercontent.com/afteracademy/nodejs-backend-architecture-typescript/master/addons/github_assets/api-doc-button.png" width="200" height="60"/>
</a>

Find this project useful ? ❤️
Support it by clicking the ⭐ button on the upper right of this page. ✌️
License
   Copyright (C) 2024 JAMSHIDBEK MAKHMUDOV

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
