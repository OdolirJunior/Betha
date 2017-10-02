(function() {
    'use strict';

    angular
        .module('projectBethaApp')
        .controller('OrdemDeServicoDialogController', OrdemDeServicoDialogController);

    OrdemDeServicoDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'OrdemDeServico', 'Cliente'];

    function OrdemDeServicoDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, OrdemDeServico, Cliente) {
        var vm = this;

        vm.ordemDeServico = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.clientes = Cliente.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.ordemDeServico.id !== null) {
                OrdemDeServico.update(vm.ordemDeServico, onSaveSuccess, onSaveError);
            } else {
                OrdemDeServico.save(vm.ordemDeServico, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess () {
            $scope.$emit('projectBethaApp:ordemDeServicoUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setFoto = function ($file, ordemDeServico) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        ordemDeServico.foto = base64Data;
                        ordemDeServico.fotoContentType = $file.type;
                    });
                });
            }
        };

    }
})();
