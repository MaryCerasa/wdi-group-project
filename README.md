# 'Organise' App

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SEI Project 3: A MERN Stack App

**The Task:**

Build a full-stack application by creating the backend and front-end with the MERN Stack (MongoDB, Express, React, Node). Express and Node make up the middle (application) tier. Express. js is a server-side web framework, and Node.js is the powerful JavaScript server platform.

**Requirements:**

  * Use an Express API to serve the data from a Mongo database. ✓
  * Consume the API with a separate front-end built with React. ✓
  * Be a complete product with multiple relationships and CRUD functionality for at least a couple of models. ✓
  * Implement thoughtful user stories/wireframes. ✓
  * Have a visually impressive design. ✓
  * Be deployed online so it's publicly accessible. ✓
  * Have automated tests for at least one RESTful resource on the back-end. ✓
    
**Timeframe:** 9 days

**Team:** 4 group members

**Deployed Project Link:** [Organise App](https://organise-ga.herokuapp.com/ "Organise App")

## App Overview: Organise 📁

**Description:**

'Organise' is an organisational tool similiar to Trello, that allows users to increase their productivity on a given task by effectively organizing the planning of events in a clear and methodical way.

This simple and intuitive app allows its users to create groups and assign users to work under these groups on a given task or based on an event to plan. 

In addition to storing your events and tasks, 'Organise' provides you with a bright and structured interface, offering multiple ways to structure these tasks. You can add in specific categories with tasks nested within them, allowing you to prioritize an item.

'Organise' also implements a friend feature that allows users to see all of their friends within the app and those who are assigned to the same task as them.

The comments feature allows users to leave notes for each other, making communication and 'on-the-go' interaction quick and seamless.

![screenshot](https://github.com/marycerasa/wdi-group-project/blob/master/src/assets/screenshots/organise_app_photo.jpeg)

## Tech Stack :computer:

**Client:** React, JavaScript, MongoDB, Mongoose, Mocha, Chai, HTML5, CSS, SASS,
Bulma

**Server:** Node,js, Express

**Tools:** Git, Bash, Yarn, GitHub, Trello, Slack, Heroku, bcrypt

## Approach

We decided the best approach to be one that takes inspiration from platforms like Trello. Where all of the main app functionality is done and rendered on a single page. Because of this we aimed for the user to be able to post, edit and delete their Tasks, Categories and Groups all in the same place. Our biggest goal for the app was overall polish. We decided that we wanted to aim for a smooth and friendly user experience. A single page application helped bring about this effect.

## Walkthrough :runner:

1.) Before any functionality is available, the user must log in. This is because the entire user experience depends on a persistant account of that user's Groups.

![screenshot](https://github.com/marycerasa/wdi-group-project/blob/master/src/assets/screenshots/organise_login.png)

2.) The user can now access their personal profile, which shows their details and allows the user to make friend requests or add any other user that has requested to be their friend. Only the creator of a Group and those assigned to a Group can see that Group. 

![screenshot](https://github.com/marycerasa/wdi-group-project/blob/master/src/assets/tasks-and-cats.png)

Therefore any Groups that are created by someone else but assigned to you, will pop up and you will be able to work with another user within the group. 

![screenshot](https://github.com/marycerasa/wdi-group-project/blob/master/src/assets/screenshots/organise_workinggroups.gif)

3.) If the user navigates to the Groups section, the user can create Groups for events, create Categories for the Tasks of each Group and assign any friends they have made.

![screenshot](https://github.com/marycerasa/wdi-group-project/blob/master/src/assets/screenshots/organise_yourgroups.png)

4.) Clicking on the 'Go to all Tasks' button will take the user to all Tasks of that Group where they can make new Tasks to-do for the users in the Group and apply any Categories or Priorities to these Tasks. The user can also filter through the Tasks of the Group.

![screenshot](https://github.com/marycerasa/wdi-group-project/blob/master/src/assets/screenshots/organise_alltasks.png)

5.) Tasks can be edited and deleted. When a task is agreed to have been completed, and is logged as ‘Done'.

![screenshot](https://github.com/marycerasa/wdi-group-project/blob/master/src/assets/screenshots/organise_taskcompleted.gif)

**User Profile:**

The user profile provides all of the information on the user. It allows the user to manage their friend requests and find new friends. This functionality was possible with a Mongoose plugin called 'Mongoose Friends'.

The code below shows the back-end controllers for adding and requesting friends:

**Code Snippet:**

```
javascript
import Component from 'my-project'

function App() {
  return <Component />
}

function usersPending(req, res, next) {
  req.body.user = req.currentUser
  User
    .getPendingFriends(req.body.user)
    .then(users => res.status(200).json(users))
    .catch(next)
}

function usersAccepted(req, res, next) {
  req.body.user = req.currentUser
  User
    .getAcceptedFriends(req.body.user)
    .then(users => res.status(200).json(users))
    .catch(next)
}

function usersRequest(req, res, next) {
  req.body.user = req.currentUser
  User
    .requestFriend(req.body.user, req.params.userId)
    .then(() => res.sendStatus(200))
    .catch(next)
}

module.exports = {
  request: usersRequest,
  allAccepted: usersAccepted,
  allPending: usersPending
}
```
## Our Process: ⚙️

This was a group based project where we worked in a team of four. We worked together using Version-Control via Git on GitHub where I was the Git Master. All of us would communicate on what we were doing both in person and on Slack. We handled any Git conflicts together and discussed what we wanted to keep and what we didn't in order to make a cohesive decision. Features were created on separate Git branches before being merged into the Development branch.

**Division of Work:** 🛠️

We decided to divide our tasks evenly in order to build the application from all angles. This was done in order to increase efficiency and it meant that no one was left without work to do. 

**Methodology & Planning:** :hourglass:

1.) First we drew up back-end models on a whiteboard while discussing with the team. Each member gave feedback and helped structure the relationships.

![screenshot](https://github.com/marycerasa/wdi-group-project/blob/master/src/assets/screenshots/organise_whiteboard.jpeg)

2.) Next we used sticky-notes to plan the navigation of the site in order to gain a holistic overview of how each component would fit together to better understand the project and what was required.

![screenshot](https://github.com/marycerasa/wdi-group-project/blob/master/src/assets/screenshots/organise_brainstormnotes.jpeg)

3.) Afterwards we created wireframes of how we wanted the site layout to work. We discussed for some time and arrived at wireframes focused heavily on bringing together much of the vast functionality into minimal pages.

![screenshot](https://github.com/marycerasa/wdi-group-project/blob/master/src/assets/screenshots/organise_wireframes.png)

![screenshot](https://github.com/marycerasa/wdi-group-project/blob/master/src/assets/screenshots/organise_wireframestwo.png)

4.) In order to keep track of the tasks we each had, we used Trello as a pipeline for our ideas and to manage those tasks. Using Trello at each point in the development of our app greatly helped us understand Trello itself as our source of inspiration. Since the goal was for our app to have similar functionality, using Trello helped both for managing the project and also understanding how to make the project work better.

![screenshot](https://github.com/marycerasa/wdi-group-project/blob/master/src/assets/screenshots/organise_trello.png)

5.) Throughout our project, we utilised the Slack messaging platform to send each other the snippets of code that we were working on in order to overcome any problems. We also discussed Version-Control to ensure the project ran smoothly with minimal conflicts. 

![screenshot](https://github.com/marycerasa/wdi-group-project/blob/master/src/assets/screenshots/organise_slackchat.png)

**Styling:** :art:

As we aspired for polish in this project, we chose to go with a ready-built CSS framework that was both clean and flexible out-the-box called Bulma, this is because Bulma provided a great foundational framework for us to build upon. It offered a tiled layout that we chose to utilise due to its ease of use and accessibility. The sites color scheme was inspired by Trello. We wanted to add some of our own creativity and thus chose to go with a very 'classroom register' like feel. Where the layout is simple to navigate, colors are friendly to look at and functionality works smoothly.

**Testing:** 🧪

Taking advantage of Mocha and Chai, Stephano developed automated code in order to produce a unit test for the Groups resource. This was done to ensure the resource worked in as many edge cases as possible. This step was necessary to prove the site worked under pressure and to reveal any weaknesses that could later be corrected, before production. Testing using the Chai assertion library made his work simpler as the syntax was close to English and therefore very readable:

```
 it('should return a 200 response', done => {
      api
        .get('/api/groups')
        .set('Accept', 'application/json')
        .expect(200, done)
    })


    it('should return a JSON object', done => {
      api
        .get('/api/groups')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8')
          done()
        })
    })

    it('should return an array', done => {
      api
        .get('/api/groups')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array')
          done()
        })
    })
```

This went hand-in-hand with Mocha as Mocha made the results of testing far clearer and identified what went wrong and where, which helped us to bug-fix later on.

**Known Bugs:** 🐛

*Below are a list of some of the known issues with Organise:*

___

**Problem:** There is a list on the user profile of all users so that the current user can find new friends. There however is no filter or search bar and thus the page will become very hard to navigate as the number of users on the site increases.

**Solution:** As a solution, a search bar instead could be added in order for the user to search for the people they'd like to become friends with. This would mean the page will not display every user and thus be far more manageable.

___

**Problem:** After assigning users to Groups, there is no way to view which users are assigned to which Groups and thus no way to remove said users. This means that if a user makes a mistake or forgets the people assigned to a Group, they will have to delete the Group and restart.

**Solution:** Going forward, we would have provided functionality to remove users from Groups and functionality to view users assigned to Groups. The latter can be achieved by mapping the array of users assigned to a Group and displaying these to the page. The array of users assigned to a group is contained on the Group model under the 'usersAssigned' key, as shown below:

```
const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  usersAssigned: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

groupSchema.virtual('groupTasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'group'
})

groupSchema.set('toJSON', {
  virtuals: true
})
```
## Look Back :eyes:

**Challenges:** 🚫

The biggest blocker for us was understanding the difference between the work that needed to be done on the back-end and the work that needed to be done in the front-end. This blocked our efforts as a group until we decided to talk with the team and discuss how the front-end and back-end would interact together. This helped us to overcome any doubt and continue working to produce a back-end that served the needs of the front-end and vice versa.

This project's main challenge was time management, as the project required time allocation balancing between creating and updating Trello, wireframing, MVP, coding Backend features, coding Frontend features and styling. There was also ample time spent researching coding errors and bug fixing.

**Wins:** :boom:

* Established secure routes for 'User Login/Log-off' & 'Sign-up'  ✓

* Deployed to Heroku  ✓

* Created back-end permsisions ✓

**Win Example:**

Another win for the app was the permissions that Stefano created in the back-end to ensure only users assigned to Groups could interact with the Group. 

To look into this further, on the front-end he designed it so that users can only see Groups assigned to them. This double precaution meant that the site was more secure with information being more private:

*Example of Stephano's code below:*

```
function groupLevelPermissions(req, res, next, action) {
  req.body.group = req.params.groupId
  req.body.createdBy = req.currentUser
  Group
    .findById(req.body.group)
    .then(group => {
      return group.usersAssigned.forEach(user => {
        if (user.equals(req.body.createdBy._id)) {
          console.log('true')
          return action
        } else {
          return res.json('Unauthorized')
        }
      })
    }).catch(next)
}

module.exports = {
  groupLevel: groupLevelPermissions
}
```
## Roadmap :telescope:

**Future Features:** 🔮

Features we would like to add include a better user walkthrough experience- such as:

  • Being able to assign Tasks as well as just assigning Groups to users.

  • A profile page for each user that can be accessed by other users, so one can see the profile of others and not just themselves.

  • A search bar for finding new users.

  • The ability to create categories when inside a group.

  • Functionality to remove or unassign users.

**Key Learnings:** :key:

This project was a fantastic opportunity to develop my teamworking ability. I learnt how to work towards a deadline with a group of other developers, where we all had a wide range of different skills and came together to produce a product that we were all proud of. This dive into shared responsibility gave me a chance to see how powerful the Agile workflow is and also helped me learn the skills needed for working in an Agile environment.

## Authors :pencil2:

- [@marycerasa](https://www.github.com/mary-cerasa)
- [@jessicabarnes](https://github.com/jessicamarybarnes)
- [@stephanoparaskeva](https://github.com/stephanoparaskeva)
- [@mattwhaley](https://github.com/mjwhaley)

## Acknowledgements

 - [Stephano's Original Readme File ](https://github.com/stephanoparaskeva/wdi-project-3-group#readme)

>>>>>>> readme-edits
