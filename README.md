# WeatherDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

//using scss for styling

//using bootstrap for UI 

//pin code 
The issue is due to the fact that the API i am using  does not natively support Indian PIN codes for location searches. When I enter a PIN code, the API attempts to interpret it as either a ZIP code or a city name, and if it doesn’t find a match, it defaults to a single response (in my case, it’s defaulting to Indore).
PIN Codes: Need manual mapping because the API doesn’t directly handle PIN codes, especially for countries like India where PIN codes are specific to regions.
Thus, the city search works without a PIN code because the Weather API natively supports it, while the PIN code search requires your manual mapping to a city.