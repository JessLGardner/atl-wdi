[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider an app we want to make, called Senior Paws. Senior Paws is an app for dog sitters taking care of old dogs, where you can track the dog's information, like its name, favorite treat, medication, and its owners. What attributes are most important to include in our data model?

![image](data_modeling.png)


### Directions

Data Modeling Round 2! Take a look at each of the app descriptions below. For each description:
  1. Create a data model for the app by listing at least two relevant
entities/abstractions (e.g. Senior Paws app, above) that the app might use, and list properties that make sense for that use case. You *don't* have to list all of them.
  1. Create Javascript objects of those entities and assign what data type the _value_ of those properties should be
  1. Give an example of a relationship of the model. Keep in mind, not _everything_ has to be connected to _everything_.

### 1. Ultra E-mail App

This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

```
1. model

user has:
-id
-username
-password
-email addresses

address has:
-id
-name
-address
-password
-emails
```
```js
2. object

var user = {
  id: number,
  username: 'string',
  password: 'string',
  emailAddresses: [array]
}

var address = {
  id: number,
  name: 'string',
  address: 'string',
  password: 'string',
  emails: [array]
}
```
```js
3. relationship

var userOne = {
  id: 238023,
  username: 'kelly77',
  password: 'gurrrrl8',
  emailAddresses: [
    {
      id: 34234,
      name: 'gmail',
      address: 'kellyyyyy@gmail.com',
      password: 'pass23_01',
      emails: [
        id: 2039482034,
        id: 80808082,
        id: 088082131
      ]
    },
    {
      id: 346768,
      name: 'yahoo',
      address: 'kellyyyyy@yahoo.com',
      password: 'pass24_01',
      emails: [
        id: 20392034,
        id: 808082,
        id: 088031
      ]
    }
  ]
}
```
### 2. Radio on the Internet app

This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.


```
1. model

user has:
-id
-name
-password
-email
-favorite genre
-favorite stations
-favorite playlists

radio station has:
-name
-id
-ratings/popularity
-reviews
-genre
-playlists

playlist has
-id
-name
-station
-genre
-ratings
```

```javascript
2. object

var user = {
  id: number,
  username: 'string',
  password: 'string',
  email: 'string',
  favGenres: [array],
  favStations: [array],
  favPlaylists: [array]
}

var station = {
  id: number,
  name: 'string',
  ratings: [array],
  reviews: [array],
  genre: 'string',
  playlists: [array]
}
var playlist: {
    id: number,
    name:'string'
    station: 'string',
    genre: 'string',
    ratings: []
}
```
```js
3. relationship

var userOne = {
  id: 345890837923,
  username: 'user22boi',
  password: 'kewl_1780',
  email: 'user@email.com',
  favGenres: ['terrible', 'scream', 'dumb'],
  favStations: [{
    id: 98.7,
    name: 'WKRP',
    ratings: [],
    reviews: [],
    genre: 'terrible',
    playlists: []
    }],
  favPlaylists: [{
    id: 023983,
    name:'listOne'
    station: 'KROQ',
    genre: 'dumb',
    ratings: []
    }]
}
```
### 3. Rock Concert App

This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.

```
1. model

band has:
-name
-tour date
-reccomends

tour date has:
-location
-ticket price
```
``` js
2. objects

var band = {
  name: 'string',
  tourDate: [array],
  recs: [array]
}
var tourDate = {
  location: [],
  ticketPrice: [
    low: '$',
    high: '$$',
    stupidHigh: '$$$'
  ] 
}
```
``` js
3. relationship

var band One= {
  name: 'Band',
  tourDate: {
    location: [],
    ticketPrice: [
      low: '$',
      high: '$$',
      stupidHigh: '$$$'
    ]
  },
  recs: []
}
```

### 4. Coffee To-Go App

This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.

```
1. model

user has:
-id
-username
-password
-email
-fav shops

shop has:
-id
-name
-location
-menu
-fav order


```
``` js
2. objects

var user = {
  id: number,
  username: 'string',
  password: 'string',
  email: 'string',
  favShops: [],
}
var shop = {
  id: number,
  name: 'string',
  location: 'string',
  menu: [array],
  favOrder: [array]
}
```
``` js
3. relationship

var user = {
  id: 345234,
  username: 'dUde2',
  password: 'same5thing',
  email: 'duuuude@gmail.com',
  favShops: [
    {
      id: 0980,
      name: 'Starbucks',
      location: 'address',
      menu: [
        {
          hotDrinks: []
        },
          coldDrinks: []
      ],
      favOrder: [
        thing: 'drink1',
        thing2: 'muffin'
      ]
    }
  ]
}
```

### 5. Team Tracker App

This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.

```
1. model

team has:
-name
-players
-stats

player has:
-name
-currentTeam
-stats
-pastTeams
```
```js
2. objects

var team = {
  name: 'string',
  players: [array],
  teamStats: [array]
}
var player = {
  name: 'string',
  currentTeam: 'string',
  stats: [array],
  pastTeams: [array]
}
```
```js
3. relationship

var team = {
  name: 'Falcons',
  players: [
    {
      name: 'Guy Dude',
      currentTeam: 'Falcons',
      stats: [
        thing: 'thing',
        thing2: 'thing'
      ],
      pastTeams: [
        team: 'Team',
        team2: 'Team'
      ]
    }
  ],
  teamStats: [
    {
      currentSeason: [
        thing: 'thing',
        thing2: 'thing'
      ]
    },
    {
      pastSeasons: [
        thing: 'thing',
        thing2: 'thing'
      ]
    }
  ]
}
```


### Final Thoughts:

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?

```
What would I want to be able to do as a user?
What information does the app need to find things, even if the user never sees it (id)
```

### Reading and Videos for Tomorrow
Now that you've had some practice really thinking about the data design of an app, we're going to learn about MongoDB, a no-SQL database. Starting tomorrow, our Express apps will be talking to the Mongo database through Mongoose. Since we're covering a LOT of ground tomorrow, take some time to introduce yourself to concepts and lingo surrounding MongoDB and Mongoose. You will _not_ have to memorize the technical details here.

- [MongoDB's Ridiculously Cheery Promo video: 2mins video](https://www.youtube.com/watch?v=CvIr-2lMLsk)
- [The Good and Bad of MongoDB: 30mins video](https://www.youtube.com/watch?v=hWxnRi_WXtg)
- [What is Mongoose? 2 min Video](https://www.youtube.com/watch?v=swWRUvluSkE)
- [Official Mongoose Website](http://mongoosejs.com/index.html)
- [Official Mongoose Docs](http://mongoosejs.com/docs/index.html)

## Submitting Your Work

  When you're ready to submit your work,

  1. Add, commit, and push your code.
  2. Add your Github link to Schoology along with your name and you comfort level with the homework.
