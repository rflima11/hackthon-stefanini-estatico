angular.module("hackaton-stefanini").controller("PerfilListarController", PerfilListarController);
PerfilListarController.$inject = ["$rootScope", "$scope", "$location",
    "$q", '$filter', '$routeParams', 'HackatonStefaniniService'];


    function PerfilListarController($rootScope, $scope, $location,
        $q, $filter, $routeParams, HackatonStefaniniService) {
        vm = this;


        vm.url = "http://localhost:8080/treinamento/api/perfils/";

        vm.init = function () {
            HackatonStefaniniService.listar(vm.url).then(
                function (responsePerfil) {
                    if (responsePerfil.data !== undefined)
                        vm.listaPerfil = responsePerfil.data;
                })
            }

       
        }