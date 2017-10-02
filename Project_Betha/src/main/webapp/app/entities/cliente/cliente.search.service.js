(function() {
    'use strict';

    angular
        .module('projectBethaApp')
        .factory('ClienteSearch', ClienteSearch);

    ClienteSearch.$inject = ['$resource'];

    function ClienteSearch($resource) {
        var resourceUrl =  'api/_search/clientes/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
