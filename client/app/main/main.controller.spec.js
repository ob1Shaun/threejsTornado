// 'use strict';
//
// describe('Controller: MainController', function() {
//
//   // load the controller's module
//   beforeEach(module('threeTornado'));
//   beforeEach(module('stateMock'));
//   beforeEach(module('socketMock'));
//
//   var scope;
//   var MainController;
//   var state;
//   var $httpBackend;
//
//   // Initialize the controller and a mock scope
//   beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $state) {
//     $httpBackend = _$httpBackend_;
//     $httpBackend.expectGET('assets/models/systems.json')
//       .respond(function (method, url, data, headers) {
//           return data;
//       });
//
//     scope = $rootScope.$new();
//     state = $state;
//     MainController = $controller('MainController', {
//       $scope: scope
//     });
//   }));
//
//   it('should attach a list of things to the controller', function() {
//     $httpBackend.flush();
//     expect(MainController.awesomeThings.length).to.equal(4);
//   });
// });