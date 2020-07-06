## This is the main of two documentation files and was written by the developer.

This one is focused on the app from a development point of view.
The other "README_Create_React_App.md" was auto generated from the Create React App npm package and provides fantastic and detailed documentation on how to use, build, run tests etc with Create React App.

### 'npm i'
Run before anything else or the app won't run.<br />
This will install all required packages.

### 'npm start'
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Project Structure
Only make changes in the src directory.<br />
index.js is the entry point for the React app, App.js is the main component.<br />
There are only 2 routable page types currently:
- index (which is just "domainname"/ eg. http://localhost:3000/) fetches all cards in the default card set and displays them paginated by groups of 12
- /:set_type/:collection_number which shows more detailed information about individual cards as well as price info and links to extra resources

As it stands things aren't particularly well named for what they do but they're named well enough for now.<br />

## Dependencies
This project uses 
- React-bootstrap
- React-router
- React-redux (This is set up but isn't really used extensively as of yet. Next step is to extract a lot of the duplicate card info which is currently stored in component state with setState hook and passed thorugh props into a redux store with the useReducer hook. I've tried to keep it to 1 child pass to keep it simple.)
- Sass (again this is set up but the brief said not to focus too much on styling and it's a relatively small code base anyway. So all css files are scss files but no actual sass has been written.)

## Next Steps
- Extract state to central redux store
- Write basic tests to make sure components with logical rendering display the right thing at the right instance
- Rename a few components to better reflect their uses
- Extract the scss files into their own folder, split out into app-wide styles and component specific styles
- Extract pages into own folder to distinguish page templates from components
- Set up bulk data fetch to only call if data has changed somehow, potentially restrict to only call every half day when tehy update prices

## Notes
The brief called to use https://scryfall.com/docs/api/cards/all <br />
Unfortunately that endpoint was deprecated on June 10 (Read more about it here: https://scryfall.com/blog/category/api)<br />
So I've had to use the Bulk data endpoint https://api.scryfall.com/bulk-data which only returns a .json file. It's not the cleanest for this particular use but thought it was the best substitute.
