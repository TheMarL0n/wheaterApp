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