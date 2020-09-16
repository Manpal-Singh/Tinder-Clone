Tinder-Clone
------------------------------
It is a cloned web app of Tinder developed using Reactjs.

Features
------------------------------
* User can see person `Cards`.
* User can do `Left Swipe` or `Right Swipe`.
* `Chat windows` for showing messages.
* `Chat Screen` for reading and sending messages.
* It is uploaded on Firebase.(Url - https://tinder-clone-2881d.web.app).
* Fetching real time data from `firebase`.

Requirements
------------------------------

* ``Reactjs``
* ``Es6``
* ``NPM``
* ``material-ui``
* ``Node``
* ``CSS3``
* ``Java Script``

Run Project
------------------------------
* ``git clone https://github.com/Manpal-Singh/Tinder-Clone.git ``
* ``cd inside Tinder-CLone or project folder``
* ``run npm start``


Preview
------------------------------

**Home View showing list of Person's Card**

![Home Page](https://imgur.com/VJBt5co.jpg)

**Chat Window**

![Search User Activity](https://imgur.com/Pf3kzpx.jpg)

**Chat Screen**

![Search User Activity](https://imgur.com/0E0ac5A.jpg)



Developement steps and Dependencies
------------------------------
* create-firebase project name tinder-clone and save config in firebase.js
* npm create-react-app tinder-clone
* cd tinder-clone
* npm start
* rfce(orrafce)==> for creating react template
* npm install @material-ui/core
* npm install @material-ui/icons
* npm install react-router-dom
* npm install --save react-tinder-card
* npm i firebase

Deploy to firebase
-------------------
* 1- run `firebase login`  command
* 2- after successful login run `firebase init` and answer question wisely
* Ans1 `Hosting: Configure and deploy Firebase Hosting sites`
* Ans2 `Use an existing project`
* Ans3 `tinder-clone-b9c24 (tinder-clone)`
* Ans4  `build`
* Ans5 `y`


* 3 now hit `npm run build` command to generate production build file --> for production build
* 4 `firebase deploy`

Live Prieview
https://tinder-clone-2881d.web.app


