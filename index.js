(function() {
  'use strict';

  angular
    .module('soc-faf-bmCreate', []);

  angular
    .module('soc-faf-bmCreate')
    .directive('bmCreate', bmCreate);

  function bmCreate() {
    var directive = {
      restrict: 'E',
      templateUrl: 'create.directive.html',
      scope: {},
      controller: bmCreateCtrl,
      controllerAs: 'bm',
      bindToController: true
    };
    return directive;
  };

  bmCreateCtrl.$inject = ['AppModel'];

  function bmCreateCtrl(AppModel){

    var bm = this;
    bm.vm = {};
    bm.vm.tags = [];
    bm.add = add;

    function add(){
      bm.vm.id = 'id_' + new Date().getTime();
      AppModel.put('list', bm.vm, 'CreateCtrl');
      bm.vm = {};
      bm.vm.tags = [];
    };
  };

})();
