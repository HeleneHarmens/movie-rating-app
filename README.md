# MovieRatingApp
Movie Rating Application (WIP / Unfinished)

## TODO (Missing tasks in this application):  
- Divide code more into components/views
- Be able to sort the list based on the data displayed in the overview element.
- Favorite a movie and filter the list so that only favorites are displayed.
- Add tests
- Reuse css, and other improvements


## Running The Server
Start JSON server by executing the following command:
```
$ json-server --watch database.json
```

## Get data
To **load all data** from the following endpoint.  
http://localhost:3000/data

To **get data for item with id=3** you can use the following endpoint.  
http://localhost:3000/data/3

To **filter the data for all movies with contentRating=”PG13”** use the following endpoint.  
http://localhost:3000/data?contentRating=PG-13

## Install modules

In the project directory, run:

```
$ npm install
```


## Run the app

In the project directory, you can run:

```
$ npm start
```
**Note:** You might get the promt:  
`? Something is already running on port 3000 [...] Would you like to run the app on another port instead? (Y/n)`
Type Y, and it will run on port 3001 (or something else).

**Runs the app in the development mode.**<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser (change port if it's running on another port).

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Other Available Scripts

In the project directory, you can run:

```
$ npm test
```
**Note: No tests available yet**

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
$ npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
$ npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
