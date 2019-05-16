![CF](http://i.imgur.com/7v5ASc8.png) JS Framework Comparative Analysis
=======================================================================

# Ember.js

### Research Conducted By: Joseph Wolfe, Aaron Ferris, Vanessa Wei, Chris

### Overall Score and Comments
#### Score (Out of 10): 4.5
#### General Comments
Describe the stack (front-end only? full stack?), database, efficiency, etc. Describe the general usability and learnability

#### Pros
* Large projects
* Modularizes files & components for you
* Good documentation
* Built in linting

#### Cons
* Confusing
* Not beginner friendly
* Very 'frameworkey'
* When a file is added it needs to be done through the framework
* Lots of outdated resources
* Build in linting

### Ratings and Reviews
#### Documentation
* Overall, robust and clear documention. Official ember site is well laid out and covers most indivudual pieces.
* Outide of the official docs, not many resources to support development. 

#### Systems Requirements
Dependencies:
* npm
* node.js
* ember-cli

Deployment:
* AWS s3 supported
* Heroku - [link](https://www.heroku.com/emberjs)
* Need to run `ember build --env production` before deployment
* No requirements for DB

#### Ramp-Up Projections
* We expect that it would take a team of mid-juniors around a full 2 days of learning and practice to become productive with the framework. 
* Certain aspects are more difficult to implement than one would expect. The nature of the modularization can make it difficult to understand which component does what and how to implement dynamic features. Mistakes are difficult to undo and fix, could mean restarting feature from a blank file.

#### Community Support and Adoption levels
* General conception as a 'dead/dying framework', but there are still many diehard ember developers.
* Many tutorials are outdated
* Very few new resources
* Heroku, Netflix, LinkedIn, Twitch, Travis.ci use ember. [Source](https://stackshare.io/emberjs/in-stacks)
* 14,000 US websites currently using ember (to compare, react has 200,000). [Source](https://trends.builtwith.com/javascript/Ember)

Ember community support is dwindling, and it seems that people are embracing React as a cleaner & easier way to accomplish many of the same tasks.

### Links and Resources
* [framework](https://emberjs.com/)
* [docs](https://guides.emberjs.com/release/)
* [examples/tutorials](https://guides.emberjs.com/release/tutorial/ember-cli/)

### Code Demos
* [code repository](https://github.com/401-advanced-javascript-merritt/ember-practice)

### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
* `npm i -g ember-cli`: Globally install the ember command line tools.
* `cd todo-list`: Enter the file that contains the project.
* `npm i`: Install the required dependencies.
* `ember serve`: Start the server and access the site.

### UML:
![uml](https://i.imgur.com/kTQpRJf.jpg)
