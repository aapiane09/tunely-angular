angular
  .module('tunely')
  .controller('AlbumsShowController', AlbumsShowController);

AlbumsShowController.$inject = ['$http', '$routeParams'];
function AlbumsShowController ($http, $routeParams) {
  var vm = this;
  var albumId = $routeParams.id;

  $http({
    method: 'GET',
    url: '/api/albums/' + albumId
  }).then(function successCallback(response) {
    vm.album = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });


  vm.editAlbum = function (album) {
    $http({
      method: 'PUT',
      url: '/api/albums/'+ albumId,
      data: album
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }

  vm.deleteAlbum = function (album) {
    $http({
      method: 'DELETE',
      url: '/api/albums/'+ albumId
    }).then(function successCallback(json) {
      var index = vm.albums.indexOf(album);
      vm.albums.splice(index,1)
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

}
