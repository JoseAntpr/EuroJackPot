# EuroJackPot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Install EuroJackPot project

First you need clone the repository: 
```
$ git clone https://github.com/JoseAntpr/EuroJackPot.git
```

After you need to install all dependencias when you stay in the project directory
``` 
npm install 
``` 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Or you can 
run with `npm start`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Angular Facts

HttpInterceptors: I use a interceptor for http request to manage the errors.

I work with three layers
- ProxyService: His mision is connect with the API and get the response.
- Service: His mision is adapt the response to my app model.
- Component:  Finally it receive the data and print in the template


