(function() {
    'use strict';
    angular.module('users').controller('UserController', UserController);

    function UserController(userService) {
        var vm = this;
        vm.users = [];
        vm.selected = null;
        vm.selectUser = _selectUser;
        userService
            .loadAll()
            .then(function(users) {
                vm.users = [].concat(users);
                vm.selected = vm.users[0];
            });

        /*
        Seleciona o usuario clicado e coloca no content
        */
        function _selectUser(user) {
            vm.selected = user;
        };
    };
})();
