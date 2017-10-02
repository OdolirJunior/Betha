(function() {
    'use strict';
    angular
        .module('projectBethaApp')
        .factory('OrdemDeServico', OrdemDeServico);

    OrdemDeServico.$inject = ['$resource'];

    function OrdemDeServico ($resource) {
        var resourceUrl =  'api/ordem-de-servicos/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
