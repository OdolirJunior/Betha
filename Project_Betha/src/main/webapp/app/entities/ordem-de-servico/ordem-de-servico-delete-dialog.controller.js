(function() {
    'use strict';

    angular
        .module('projectBethaApp')
        .controller('OrdemDeServicoDeleteController',OrdemDeServicoDeleteController);

    OrdemDeServicoDeleteController.$inject = ['$uibModalInstance', 'entity', 'OrdemDeServico'];

    function OrdemDeServicoDeleteController($uibModalInstance, entity, OrdemDeServico) {
        var vm = this;

        vm.ordemDeServico = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            OrdemDeServico.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
