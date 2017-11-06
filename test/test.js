describe('Did you create a new service named fonts?', function() {
  var ctrl, scope, service;

  beforeEach(module('FontApp'));

  it('Did you create a new service named fonts?', function() {
    inject(function($controller, $rootScope, fonts) {
      expect(fonts).toBeDefined();
    });
  });
});
