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

_Kinfolk is a single page webpage application is created to practice coding with modern JavaScript MVC's. The goal for this project was to mock the basic functionality of the <a href="https://kinfolk.com/shop/">Kinfolk</a> using TypeScript and Angular._

_This project uses TypeScript and Angular to create  components and compile code for faster loading, and easier functionality. I use a base model that holds and object and use event, property, and two-way data binding to pass my functionality throughout the application. The nestled child components each send data to the parent component filtering data down and action up which is an Angular technique used to pass along responsibility for variables, classes, events and even objects._

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
  * Run `$ng serve --open` to run developement mode
  
#### Website Functions
  * Add single albums to database on Admin page.
  * Firebase will auto-generate keys for each album.
  * Add multiple albums to database via JSON import in Firebase Console.

  Album data structure:
  ````
  Album {
    artist: string
    description: string
    id: string (unique value required)
    title: string
  }
````

## <span style="color:#74875d;">Known Bugs</span>

None

## <span style="color:#74875d;">Technologies Used</span>

| Development dependencies | Front end dependencies |
| :------------ | :------------- |
| Webpack | CSS (Bootstrap) |
| Eslint | JavaScript (JQuery) |
| TypeScript 2.1.4 | Popper
| Angular AngularCli@1.6.5 | CSS-loader & Style-loader |

### <span style="color:#74875d;">Specs</span>
| Behavior | Input | Output |
| :-------------     | :------------- | :------------- |
| The program will have option for user to view a full description of the article | Input: "click event" | Output: "full description of item" |
| The application will allow the user to subscribe | Input: "email is entered" | Output: "thank you!" |

<strong>Check out the notes.md file for more details on my planning.</strong>

## <span style="color:#74875d;">Technologies Used</span>

| Development dependencies | Front end dependencies |
| :------------ | :------------- |
| Webpack | CSS (Bootstrap) |
| Eslint | JavaScript (JQuery) |
| Popper | API Calls with Firebase |
| CSS-loader & Style-loader | | |

## License

This project is licensed under the MIT License
