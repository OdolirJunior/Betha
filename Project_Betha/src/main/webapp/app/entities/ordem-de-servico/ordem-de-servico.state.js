(function() {
    'use strict';

    angular
        .module('projectBethaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('ordem-de-servico', {
            parent: 'entity',
            url: '/ordem-de-servico',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'OrdemDeServicos'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/ordem-de-servico/ordem-de-servicos.html',
                    controller: 'OrdemDeServicoController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
            }
        })
        .state('ordem-de-servico.atender', {
            parent: 'ordem-de-servico',
            url: '/{id}/atender',
            data: {
                authorities: ['ROLE_ADMIN']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/ordem-de-servico/ordem-de-servico-atender.html',
                    controller: 'OrdemDeServicoAtenderController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['OrdemDeServico', function(OrdemDeServico) {
                            return OrdemDeServico.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('ordem-de-servico', null, { reload: 'ordem-de-servico' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('ordem-de-servico-detail', {
            parent: 'ordem-de-servico',
            url: '/ordem-de-servico/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'OrdemDeServico'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/ordem-de-servico/ordem-de-servico-detail.html',
                    controller: 'OrdemDeServicoDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'OrdemDeServico', function($stateParams, OrdemDeServico) {
                    return OrdemDeServico.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'ordem-de-servico',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('ordem-de-servico-detail.edit', {
            parent: 'ordem-de-servico-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/ordem-de-servico/ordem-de-servico-dialog.html',
                    controller: 'OrdemDeServicoDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['OrdemDeServico', function(OrdemDeServico) {
                            return OrdemDeServico.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('ordem-de-servico.new', {
            parent: 'ordem-de-servico',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/ordem-de-servico/ordem-de-servico-dialog.html',
                    controller: 'OrdemDeServicoDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                nome: null,
                                tipo: null,
                                marca: null,
                                problema: null,
                                avaria: null,
                                foto: null,
                                fotoContentType: null,
                                status: null,
                                tecnico: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('ordem-de-servico', null, { reload: 'ordem-de-servico' });
                }, function() {
                    $state.go('ordem-de-servico');
                });
            }]
        })
        .state('ordem-de-servico.edit', {
            parent: 'ordem-de-servico',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/ordem-de-servico/ordem-de-servico-dialog.html',
                    controller: 'OrdemDeServicoDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['OrdemDeServico', function(OrdemDeServico) {
                            return OrdemDeServico.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('ordem-de-servico', null, { reload: 'ordem-de-servico' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('ordem-de-servico.delete', {
            parent: 'ordem-de-servico',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/ordem-de-servico/ordem-de-servico-delete-dialog.html',
                    controller: 'OrdemDeServicoDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['OrdemDeServico', function(OrdemDeServico) {
                            return OrdemDeServico.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('ordem-de-servico', null, { reload: 'ordem-de-servico' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('ordem-de-servico.fecharOrdem', {
            parent: 'ordem-de-servico',
            url: '/{id}/fecharOrdem',
            data: {
                authorities: ['ROLE_ADMIN']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/ordem-de-servico/ordem-de-servico-fecharOrdem-dialog.html',
                    controller: 'OrdemDeServicoFecharOrdemController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['OrdemDeServico', function(OrdemDeServico) {
                            return OrdemDeServico.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('ordem-de-servico', null, { reload: 'ordem-de-servico' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
