# _<p align="center">Julia Sheremet</p>_

#### _<p align="center">Kinfolk Reproduction using Angular and TypeScript</p>_

#### _**<p align="center">By: Julia Sheremet</p>**_

<p align="center">  
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
<a href="https://github.com/RichardLitt/standard-readme"><img src="https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square"></a>
</p>

## <span style="color:#74875d;">Description</span>

_This single page webpage application is created to practice coding with modern JavaScript MVC's. The goal for this project was to mock the basic functionality of the <a href="https://kinfolk.com/">Kinfolk</a> using TypeScript and Angular._

_This project uses TypeScript and Angular to create  components and compile code for faster loading, and easier functionality. I use a base model that holds and object and use event, property, and two-way data binding to pass my functionality throughout the application. The nestled child components each send data to the parent component filtering data down and action up which is an Angular technique used to pass along responsibility for variables, classes, events and even objects._

## <span style="color:#74875d;">Setup/Installation Requirements</span> :computer:

* Clone repository on your local computer.
* If you already have Node, Homebrew, and Karma installed, then skip to **Install Dependencies**.

  #### Node: Windows / Linux Installation Instructions
  To install `Node` on other systems, go to the <a href="https://nodejs.org/en/">Node website</a>, download and install the appropriate installer for your operating system.

  #### Node: OSX Installation Instructions
  On OS X systems, install `Node.js` through Homebrew with the following command in your home directory:
    ```sh
    $ brew install node
    ```
  Confirm that Node version is 4.0.x or higher and npm should be 3.6.x or higher:
  ```sh
    $ node -v
    $ npm -v
  ```
  #### Homebrew Installation
  If you do not have `Homebrew` installed yet, you may install it by copying and pasting this command:
  ```sh
    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```
  Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:
  ```sh
    $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
  ```
  #### Karma Installation
  If you do not have `Karma` installed globally, then run the following:
  ```sh   
    $ npm install -g karma-cli
   ```
  #### Install dependencies
  Enter the following code in the command line to install all dependencies:
  ```sh
    $ npm install
  ```

  #### Working with the project in Node:
  To build and bundle the project in webpack run the following:
  ```sh
    $ npm run build
  ```
  To run the local test server:
  ```sh
    $ npm run start
  ```
  To run test in `Karma`:
  ```sh
    $ npm test
  ```
    #### Install Copy Webpack Plugin
    ```sh
    npm i -D copy-webpack-plugin
    ```

## <span style="color:#74875d;">Known Bugs</span>

_Feel free to email me at [juliajessicasher@gmail.com](mailto:juliajessicasher@gmail.com) if you run into any issues or have questions, ideas or concerns. Please enjoy and feel free to share your opinion, constructive criticism, or comments of my work. :+1:_

## <span style="color:#74875d;">Technologies Used</span>

| Development dependencies | Front end dependencies |
| :------------ | :------------- |
| Webpack | CSS (Bootstrap) |
| Eslint | JavaScript (JQuery) |
| Karma & Jasmine | Popper
| Babel-loader |  |
| CSS-loader & Style-loader | | |




### <span style="color:#74875d;">Specs</span>
| Behavior | Input | Output |
| :-------------     | :------------- | :------------- |
| The program will  | Input: "" | Output:  |



### <span style="color:#74875d;">License</span>

Copyright (c) 2018 ****_Julia Sheremet_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

////////////////////


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
