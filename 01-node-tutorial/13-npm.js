//// npm - global command, comes with node
//// npm -- version

//// local dependency - use it only in this particular project
//// npm i <packageName>

//// global dependency - use it in any project
//// npm install -g <packageName>
//// sudo npm install -g <packageName> (mac)

//// package. json - manifest file (stores important info about project/package)'
//// manual approach (create package. json in the root, create properties etc)
//// npm init (step by step, press enter to skip)
//// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

//// npm i nodemon --save-dev
//// OR
//// npm i nodemon -D

//// below "main" section in "package.json", add below code
//   "scripts": {
//     "start": "node app.js",
//     "dev": "nodemon app.js"
//   },
//// run command "npm run start" and "npm run dev"
//// using "npm run dev", nodemon will automatically restart app.js once save
//// to stop it just using CTRL + C
//// if install nodemon locally, use "npx nodemon app.js"