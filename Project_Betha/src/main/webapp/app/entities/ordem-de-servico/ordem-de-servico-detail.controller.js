(function() {
    'use strict';

    angular
        .module('projectBethaApp')
        .controller('OrdemDeServicoDetailController', OrdemDeServicoDetailController);

    OrdemDeServicoDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'OrdemDeServico', 'Cliente'];

    function OrdemDeServicoDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, OrdemDeServico, Cliente) {
        var vm = this;

        vm.ordemDeServico = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('projectBethaApp:ordemDeServicoUpdate', function(event, result) {
            vm.ordemDeServico = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
