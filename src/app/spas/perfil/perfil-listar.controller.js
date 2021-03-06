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

            vm.remover = function (id) {
            HackatonStefaniniService.excluir(vm.url + id).then(
                function (response) {
                    vm.init();
            })
        }
        
        vm.editar = function (id) {
            if (id !== undefined)
                $location.path("EditarPerfis/" + id);
            else
                $location.path("EditarPerfis");
        }

       
        }