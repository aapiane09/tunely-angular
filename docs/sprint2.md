<<<<<<< HEAD
# Sprint 2

###Overview
=======
## Sprint 2 Overview

Before this sprint, you should:  
- Have mock data in the controller of your Angular app, displayed in the view 
- Use two-way data binding to change objects in the controller based on user input
- Recall RESTful routing conventions and key components of requests: method, url, data, and query parameters
- Recognize the structure of `$http` requests
>>>>>>> fae59e1dc8b10ca043e894bd7fc30706efbc87b3

This sprint we will:  
- `GET` data from our back-end to our Angular front-end with `$http`  
- `POST` data from a form to save Albums into our database

<<<<<<< HEAD
### Prerequisites

Before this sprint, you should:  
- Have mock data in the controller of your Angular app, displayed in the view.
- Use two-way data binding to change objects in the controller based on user input.
- Recall RESTful routing conventions and key components of requests: method, url, and data or query parameters.
- Recognize the structure of `$http` requests.


## Getting Started on Sprint 2

To get started on a new tunely-angular sprint, we'll have you check out the solutions for the previous sprint. Remember to follow the branching instructions!


## instructions

### Inject `$http`.

1. We want to use the [`$http`](https://docs.angularjs.org/api/ng/service/$http) service in our controller, so `inject` it:
=======
## Getting Started on Sprint 2

To get started on a new tunely-angular sprint, we'll have you check out the solutions for the last sprint. Remember to follow the [branching instructions](https://github.com/SF-WDI-LABS/tunely-angular/blob/master/docs/starting_with_a_branch.md)!


## Inject `$http`

1. Not all of Angular is loaded into every module, controller, and template. Instead, you have to include or "inject" parts of Angular, or external Angular modules, into parts of your app where you want to use them.
1. [`$http`](https://docs.angularjs.org/api/ng/service/$http) is a core part of Angular. Still, to use it in our controller, we first need to tell Angular that we'd like to have it available by `inject`ing it. to do that, include this line above the controller function definition:
>>>>>>> fae59e1dc8b10ca043e894bd7fc30706efbc87b3

  ```javascript
  // app.js
  AlbumsIndexController.$inject = ['$http'];
  function AlbumsIndexController (  $http  ) {
    ...
  }
  ```
<<<<<<< HEAD

### `GET` albums data.
1. Empty out the hard-coded `vm.albums` array from the previous sprint.

1. Use Angular's `$http` method to get data from the back-end. Make sure your back-end is populated with data by doing a quick check of the route in postman or your browser. If there's no data, run `node seed.js` to create some.

  <details><summary>click for code hint</summary>
  ```js
    // inside controller
    $http({
      method: 'GET',
      url: // what goes here?
    }).then(function successCallback(response) {
      // what is the structure of this response?
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
  ```
  </details>

1. Make sure the albums in the response will be displayed on the page. How were the hard-coded albums displayed on the page? Using that code as an inspiration, add a line that will update which albums are displayed on the page, once the GET request response comes back successfully.


=======
The first line tells the controller that we'd like to have access to the `$http` module. The second line passes `$http` into the controller function.

## `GET` the data.
1. Delete the hard-coded `vm.albums` data from the previous sprint.
1. Use Angular's `$http` `GET` method to get data from the back-end. Make sure your back-end is populated with data by doing a quick check of the route in postman or your browser. If there's no data, run `node seed.js` to create some documents with pre-made data. `$http` looks very similar to jQuery's `$.ajax` with some small but important differences. Copy this code into your `AlbumsIndexController` function:

  ```js
	  $http({
	    method: 'GET',
	    url: // what goes here?
	  }).then(function successCallback(response) {
	    vm.albums = response.data;
	  }, function errorCallback(response) {
	    console.log('There was an error getting the data', response);
	  });
  ```
>>>>>>> fae59e1dc8b10ca043e894bd7fc30706efbc87b3
1. Now reload your page...


![img](./assets/images/sprint2-get.gif)


<<<<<<< HEAD
**Holy Guacamolé!** Your page should be populated with data from the server! **How amazing!**

### `POST` a new album.
1. Let's flesh out the `newAlbum` form. Create a form that has fields for Album Name and Artist Name. Optionally add fields for Genres (separated by commas) and Release Date.  Also add a submit button (with `type="submit"`) in the form!

1. In the `<form>` tag,  add a `submit` event handler:
=======
**Holy Guacamolé!** The page is populated with data from the server! **How amazing!**

## `POST` some data
1. Let's flesh out the `newAlbum` form. Create a form that has fields for Album Name and Artist Name. Optionally add fields for Genres (separated by commas) and Release Date.
1. Angular allows us to call functions from our `html`!  In `<form>`, let's add a `submit` handler like so
>>>>>>> fae59e1dc8b10ca043e894bd7fc30706efbc87b3

  ```html
  <form ng-submit="albumsIndexCtrl.createAlbum()">
  ```
<<<<<<< HEAD

  This tells Angular to call the `createAlbum()` function in the `albumsIndexCtrl` when this form is submitted.

1. We'd better make a `createAlbum()` function!
=======
Don't forget to have a button with `type="submit"` in the form!
1. `ng-submit` tells the `html` to call the `createAlbum()` function in the `albumsIndexCtrl` on submit of the function. Lastly we need to make a `createAlbum()` function.
>>>>>>> fae59e1dc8b10ca043e894bd7fc30706efbc87b3

  ```js
  vm.createAlbum = function () {
    $http({
      method: 'POST',
      url: '/api/albums',
      data: // what goes here?
    }).then(function successCallback(response) {
<<<<<<< HEAD
      // what is the structure of this repsonse?
=======
>>>>>>> fae59e1dc8b10ca043e894bd7fc30706efbc87b3
      // how do we add the response data to our albums array?
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }
  ```
<<<<<<< HEAD

**KABMLAM!! our page is posting!**

![img](./assets/images/sprint2-post.gif)

## More Challenges  

1. If you didn't before, add a `textarea` input for users to input genres as a comma-separated list.  Process this data into the format the server expects. (You will need to examine back end code to see what that format is!)

1. Add an input box that the user can type in to filter the list of albums on the page. (Hint: look up angular's built-in filtering!)  This works great when there are few enough albums that we can show them all on the page at once.

1. As an alternate way for users to narrow down albums, add a search form that the user can use to search the database for albums.  This will require modifying your server code. Try to do it without adding a route.  (Hint: no new route means you'll have to take advantage of the request body, query parameters, or url paramters for one of your existing routes.)

=======
# 4.  KABMLAM!! our page is posting!

![img](./assets/images/sprint2-post.gif)

## Stretch challenges    
1. If you didn't before, add a `textarea` input for users to input genres as a comma-separated list.
>>>>>>> fae59e1dc8b10ca043e894bd7fc30706efbc87b3
1. Change the form by replacing the textarea for genre with a field that has a button to add a new field for each genre. See the mockup:

![](assets/images/add_new_field_button.png)
