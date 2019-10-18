# This Is Football

### The beautiful game?

![Alt Text](https://media.giphy.com/media/jx4ZHQHKYV0JP7wJYk/giphy.gif)

### The best athletes in the world?

![Alt Text](https://media.giphy.com/media/GxxyExmvyzkze/giphy.gif)

### A father passing on the love of the game to his son

![Alt Text](https://media.giphy.com/media/p3cgmVTX2kcdV3GUUj/giphy.gif)


# Project Overview


## Project Description

This project is an app for any fan of club football (aka soccer).  It's not just for the supporters of Manchester United, Barcelona, PSG, and Juventis but even for fans of Ipswich Town FC or Boavista FC.  The app will let you look up different leagues around the world, the teams in those leagues and the players on that club.

## Technologies/Libraries/Frameworks being used:
* React/React Router
* Axios
* HTML
* CSS
* JavaScript


## API to be used:
The [Sports DB API] (https://www.thesportsdb.com/api.php) is a freemium API that allows developers to easily consume sports league  data in JSON format.  The free API gives you all features except for vidoes and live scoring.  It also limits your result set to 250.

## Wireframes
[https://wireframe.cc/Rlq1Lt](https://wireframe.cc/Rlq1Lt)

![wireframe](./wireframe.pdf)

## MVP/PostMVP

###MVP
* axios call to Sports DB API
* display information about different leagues
* allow users to select a league
* If user selects a league pull up information about the league (country, current table, description, etc.) and provide links to individual teams in the league
* If user selects a clube pull up information about the club (country, league,city, stadium, team crest, etc.) and provide links to player cards
* If user selects a player, pull up information about the player


###PostMVP
* Hamburger menu
* Embed social links on page.
* Add videos content.  Sports DB API only provides videos for paid subsribers, so hit a second API and pull back relevent videos based on the page they are on.
* Explore possibility of an interactive map to select country and club from home page instead of dropdown list.


## React Component Hierarchy

<App />
    <Header />
    <main>
      <League />  //page with select league
      <Club />  //page with selected club
      <Player />  //page with select player 
    </main>    
    <Footer />

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.


###TBD
<!--
Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav | 
| Footer | This will render the footer | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

-->
## Helper Functions
###TBD.... 

## Additional Libraries
###TBD.... 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
//TBD
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object