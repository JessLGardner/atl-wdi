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
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  var laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.


> >
Both tasks and projects are named in the app description. Each has intuitive associated information/data to be easily contained in its respective object.

Task
- name
- start date
- complete date

Project
- name
- description
- group of tasks
- start date
- completion date

```js
var task = {
  name: 'clean out closet',
  startDate: '07/05/2017',
  endDate: '0'
};

var project = {
  name: 'clean house',
  description: 'group of to-do lists',
  setOfTasks: [clean out closet, empty attic, fix shelves, clean grout],
  startDate: '07/05/2017',
  endDate: '0'
};
```


### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.


> >
Photos and albums are a obvious abstractions in a photo app. Created a user object to contain all the associated data for the 'sharing' functionalities of the app.

Photo
- name
- date taken
- location
- image host

Album
- name
- privacy setting
- photo set

User
- username
- all photos
- shared albums
- all albums

```js
var photo = {
  name: 'On the dock',
  date: '08/17/09',
  location: 'St. Paul MN',
  url: 'images/pic1.jpg'
};

var album = {
  name: 'Lakehouse 2009',
  privacy: 'friends only',
  photoSet: ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg']
};

var user = {
  username: 'katherine_hepburn',
  totalPhotos: ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg', 'images/pic6.jpg'],
  sharedAlbums: ['Lakehouse 2009', 'Holidays 2009', 'Australia'],
  totalAlbums: ['Before and After', 'Lakehouse 2009', 'Holidays 2009', 'Australia', 'Rescue Owls']
};
```


### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.


> >
This app will keep track of both lighting and temperature, so separate objects to contain the information on the controls for each. Also a separte entity for the house as a whole where the two systems come together. 

Light
- name
- location
- on or off

Thermostat
- heat
- cool

House
- time
- temperature
- lights

```js
var light = {
  name: 'desk lamp',
  location: 'office',
  on: true
};

var thermostat = {
  heat: false,
  cool: true
};

var house = {
  time: '1700',
  temp: '70',
  setOfLights: ['office', 'kitchen', 'bathroom', 'bedroom']
};
```


### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.


> >
Of course both the product and the order are mentioned in the description, so abstractions for both. The order item is essentially the cart from the app description just broken down a bit more to be manipulated into opbjects more readily.

Product
- name
- color
- size
- price

Order Item
- product
- quantity

Order
- set of order items
- total quantity
- order date
- total price

```js
var product = {
  name: 'Converse Classic Chuck Taylor High-top', 
  color: 'red',
  size: '9',
  price: '$39.99'
};

var converseOrder = {
  product: 'converse high-top',
  quantity: 1
};

var order = {
  setOfOrderItems: [converseOrder], 
  quantity: 1,
  date: '07/01/14',
  price: '$39.99'
};

```

## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.

> >
Advantage - Because the stations are contained in an object they can be accessed by name without needing to know their indices.

Disadvantage - The app is supposed to show specific stops in specific orders but the stations information is stored in an unordered collection so their position is not guaranteed. 



### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

> >
Option 1, in which all the patients and appointments are inside a single doctor representation, would be the better option for doctor-scheduled appointments. Though if you tried to keep track of a single patient if would be a much more complicated task.

Option 2, the appointment-based representation, would make it easier to find patients. I think you need more information about who in particular will be using this app before you can pick the most efficient pathway.

## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

> > 
Game
- player 1
- player 2
- turns

Game-Play/ Turns
- gamepiece x/o
- placement

Player
- username
- avatar
 

b.  How might those entities be represented in JavaScript code?

> >
``` js
var playerOne = {
  username: 'Ben',
  avatar: 'images/choc.jpg'
};

var moves = {
  token: 'X',
  placement: 1
};

var game = {
  playerX: {
    username: 'Ben',
    avatar: 'images/choc.jpg'
  },
  playerO: {
    username: 'Jerry',
    avatar: 'images/van.jpg'
  },
  turns: {
    gamePiece: 'X',
    placement: 1
  },
   {
    gamePiece: '0',
    placement: 4
  }
};

```

c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

> >
To play a game, you need first a game itself, as well as players and the moves they make, and all of those entities have natural values for any game (players, usernames, gamepieces, etc.) I'm not really sure how to structure the game itself. Like not even a little bit. At all. 
