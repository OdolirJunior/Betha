(function() {
    'use strict';

    angular
        .module('projectBethaApp')
        .controller('OrdemDeServicoFecharOrdemController', OrdemDeServicoFecharOrdemController);

    OrdemDeServicoFecharOrdemController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'OrdemDeServico'];


    function OrdemDeServicoFecharOrdemController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, OrdemDeServico) {
        var vm = this;

        vm.ordemDeServico = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;

        $timeout(function () {
            angular.element('.form-group:eq(1)>input').focus();
        });

        function onSendSuccess () {
            $scope.$emit('projectBethaApp:ordemDeServicoSend', sendMail);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function clear() {
            $uibModalInstance.dismiss('cancel');
        }

        function save() {
            vm.isSaving = true;
            if (vm.ordemDeServico.id !== null) {
                OrdemDeServico.update(vm.ordemDeServico, onSaveSuccess, onSaveError);
            } else {
                OrdemDeServico.save(vm.ordemDeServico, onSaveSuccess, onSaveError);
            }

        }

        function onSaveSuccess(result) {
            $scope.$emit('projectBethaApp:ordemDeServicoUpdate', result);
            $scope.$emit('projectBethaApp:',result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        };

        function onSaveError() {
            vm.isSaving = false;
        };

    }
})();
