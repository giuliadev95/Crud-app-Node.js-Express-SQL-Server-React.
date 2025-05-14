# About this proejct

This repository hosts 2 projects: a basic one on branch main, and a complete one on branch "develop_classes'.


## On Branch ' main '

I built this basic crud local webapp during the first month of my internship as a software developer: it's a local crud app that inserts, deletes, gets, updates users in a local storage.
I learnt how to use node.js, express, Postman and how to implement basic get / delete / update actions.
I tested the app with Postman and didn't provide it with a database nor a frontend, as my goal was to learn the process of starting a server, organize and implement controllers and routes, use Postman to test the crud actions.


### Actions you can perform:

- Get all users
- Get a user by id 
- Delete a user 
- Update a user
- Create a user


### Structure:

- index-js = starts the local server
- controller/ users.js = performs the CRUD operations
- routes/ users.js = organizes the routes for every CRUD action


### How this project evolved

This has been my starter kit, and I spent another month and a half to add more functionalities to it through the project hosted on branch 'develop_classes'.



## On Branch ' develop_classes '

I build this project to implement the basic webapp hosted on branch 'main', and I implemented a dynamic contacts list easy to consult and to use.


### Key differences

After my work to add a database, API and a frontend, this final webapp has become a contacts list with the following features:

    - A more organized (and rich) structure, divided in backend and frontend to keep the codebase clean and clearer to consult.
        - Backend: 
            - Connect to a real online SQL Server database, hosted on Azure, to host all contacts.
            - Perform CRUD operations to :
            - get all contacts displayed in a table
            - update a contact by clicking a 'modify' icon that opens a specific form to do all the modifications
            - delete a contact by clicking a 'delete' icon
            - filter the contacts list in a proper 'search field', to find the one or the ones that match your search.

        - Frontend: a React clean frontend, dynamic thanks to the useState and useEffect hooks.


### Structure
.
├── backend/
│   ├── config/
│       └── db.js = database configuration 
│   ├── controller/
│       └── users.js = API REST to perform the CRUD actions
│   └── node_modules/
│   ├── routes/
│       └── users.js = routes fo the REST API
│   ├── .gitignore
│   │   
│   ├── README.md = this README.md file
│   │  
│   ├── index.js = starts the server and defines its configuration
│   ├── package.json
│   ├── package-lock.json
|   .
│ 
├── frontend/
│   ├── src/
│   |   └── components/ = all .jsx React components that make the webapp
|   |    └── pages/ = the 3 pages (or 'routes') of the webapp: home, contacts, add contact (the add form)
|   |    └── styles/ = the styles for the webapp
│   ├── .gitignore
│   └── eslint.config.js
│   ├── index.html
│   ├── package-lock.json  
│   ├── package.json 
│   ├── vite.config.js
.
