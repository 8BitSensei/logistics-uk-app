# Logistics UK - Technical Exercise

The goal of this exercise was to develop a react application following the wireframe provided and the requirements laid out in the exercise.

The application provides routing for four pages as defined in the `src/data/menu.json`; Home, Drivers, Vehicles, and About, Vehicles and About both route to a place holder page, Home and Driver route to the `Drivers` component. These pages can be accessed through the menu on the upper-left hand side through a `NavMenu` component.

The `Drivers` component is the core functionality of the application, the presented table is populated from the `src/data/drivers.json`. It provides the driver name, vehicle registration, and time worked in minutes, split by drive, rest, work, and available time. The final cell is occupied by a `Trace` component, which generates a set of formatted boxes for each day of the week, if the driver has a trace for a given day, it is filled in green. 
### Running
To run the application, simply run the command `npm start` in the `logistics-uk-app/` directory, it will launch on port `3000`, if this unavailable you will be prompted to accept another port.
### Improvements
1. Centralise style sheets, avoid hardcoding styles into components.
2. Provide more testing through the `npm test` command.
3. The application is currently assuming that the provided driver traces exist in the same work, provide a way to manage and display individual weeks.
4. Provide a docker build file and build pipeline of the application for deployment.
5. Currently all data is provided in interna JSON files, update the application to pull this data from a RESTful API backend.
