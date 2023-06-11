# INSTRUCTIONS
The weather application was made with Angular, web development framework. 
Next you can find some instruction on how to test and then build the application 
in a production environment.

## -------------------------------------------------------------------

### Test the application
In order to test the weather application all you need to do is type the command ng test
in your console once you've run the application in a develop enviroment.

Please, as far as possible, run tests on real browsers and devices to ensure that software
is verified under real user conditions.

### Build the application
1.To build the weather application for production, use the build command `ng build` in 
your console. 

2.This command creates a dist folder in the application root directory 
with all the files that a hosting service needs for serving the application.

3.Then you can copy the contents of the `dist/weather-app` folder to any web server. This
is the deployment of the application wich can be done automatic or manual

### Run the application
For running the application in a development environment follow the next steps:

1.Download the source code from the repository.

2.Unzip the archive and change directory to the newly created project.

3.To download and install npm packages, use the following npm CLI command `npm install`.

4.Use the following CLI command `ng serve` to run your application locally.

5.To see your application in the browser, go to `http://localhost:4200/`. If the default 
port 4200 is not available, you can specify another port with the port flag as in the 
following example: `ng serve --port 4201`