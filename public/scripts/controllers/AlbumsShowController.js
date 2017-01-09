angular
  .module('tunely')
  .controller('AlbumsShowController', AlbumsShowController);

AlbumsShowController.$inject = ['$http', '$routeParams'];

function AlbumsShowController ($http, $routeParams) {
  var vm = this;
  var albumId = $routeParams.id;
  vm.newSong = {};

  vm.getAlbum = function () {
    $http({
      method: 'GET',
      url: '/api/albums/'+ albumId
    }).then(function successCallback(json) {
      vm.album = json.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
  }
  vm.getAlbum();

  vm.postSong = function (song) {
    $http({
      method: 'POST',
      url: '/api/albums/'+ albumId + '/songs',
      data: vm.newSong
    }).then(function successCallback(response) {
      console.log(response)
      vm.album.songs.push(response.data)
      vm.newSong = {}
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }

  vm.editSong = function (song) {
    $http({
      method: 'PUT',
      url: '/api/albums/'+ albumId + '/songs/' + song._id,
      data: song
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }

  vm.deleteSong = function (song) {
    $http({
      method: 'DELETE',
      url: '/api/albums/'+ albumId + '/songs/' + song._id
    }).then(function successCallback(json) {
      vm.getAlbum();
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }
}
