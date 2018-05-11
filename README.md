# _<p align="center">Julia Sheremet</p>_

#### _<p align="center">Kinfolk Reproduction using Angular, TypeScript, and Firebase</p>_

#### _**<p align="center">By: Julia Sheremet</p>**_

<p align="center">  
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
<a href="https://github.com/RichardLitt/standard-readme"><img src="https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square"></a>
</p>

## Screenshots of Application
![alt text](?raw=true)
![alt text](?raw=true)
![alt text](?raw=true)

## <span style="color:#74875d;">Description</span>
_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5._

_Kinfolk is a single page webpage application is created to practice coding with modern JavaScript MVC's. The goal for this project was to mock the basic functionality of the <a href="https://kinfolk.com/shop/">Kinfolk</a> using TypeScript, Angular, and Firebase._

_This project uses TypeScript and Angular to create  components and compile code for faster loading, and easier functionality. I use a base model that holds and object and use event, property, and two-way data binding to pass my functionality throughout the application. The nestled child components each send data to the parent component filtering data down and action up which is an Angular technique used to pass along responsibility for variables, classes, events and even objects._

## <span style="color:#74875d;">User Stories</span>

| User Behavior | Input | Output | Status |
| :------------- | :------------- | :------------- |  :------------- |
| Customer wants to view a full description of the article | Input: "click on the article title" | Output: "full description of item" | Complete |
| User wants to subscribe | Input: "email is entered" | Output: "thank you!" |  Under Construction |

<strong>Check out the notes.md file for more details on my planning.</strong>

## <span style="color:#74875d;">Angular MVC Framework</span>

| Model | View | Component |
| :------------- | :------------- | :------------- |
| allArticles: [{<br> title: "string",<br> description: "string",<br> image: "string",<br> fullDescription: "string"<br> }]<br> | Homepage<br> Article Page | Homepage<br> Navbar<br> Article |

#### Node.js & NPM Installation Instructions
  Install `Node.js`, `TypeScript`, and `AngularCLI` globally through with the following commands in your home directory:
   * `$ brew install node`
   * `$ npm install -g typescript`    
   * `$ npm install -g @angular/cli@1.7.4`

## <span style="color:#74875d;">Setup/Installation Requirements</span> :computer:
* In <a href="https://firebase.google.com/">FireBase</a> console, create an account and start a new project.
* Name project and select country/region.
* From Project Overview, navigate to Develop > Database > Realtime Database.
* Select the Rules and change .read and .write to true, then publish.
* In Project Overview, select option to add Firebase to web app.
* Create an api-keys.ts file and save the API credentials like this:
````sh
    // Firebase Credentials
    export const masterFirebaseConfig = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      storageBucket: "",
      messagingSenderId: ""
    };
````

#### Project Setup
  Enter the following code in the command line to install all dependencies:
  * Clone repository on your local computer.
  * Run `$ npm install` to load all required packages
  * Run `$ng serve --open` to run development mode

#### Website Functions
  * Add a single album to database on Admin page.
  * Firebase will auto-generate keys for each album.
  * Add multiple albums to the database via JSON import in Firebase Console.

## <span style="color:#74875d;">Technologies Used</span>
|  |  |
| :------------- | :------------- |
| CSS (Bootstrap) | JavaScript (JQuery) |
| Angular | Node.js |
| Eslint | API Calls with Firebase |

## <span style="color:#74875d;">Known Bugs</span>

None

## License

This project is licensed under the MIT License
