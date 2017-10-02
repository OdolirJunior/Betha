(function() {
    'use strict';

    angular
        .module('projectBethaApp')
        .factory('OrdemDeServicoSearch', OrdemDeServicoSearch);

    OrdemDeServicoSearch.$inject = ['$resource'];

    function OrdemDeServicoSearch($resource) {
        var resourceUrl =  'api/_search/ordem-de-servicos/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
