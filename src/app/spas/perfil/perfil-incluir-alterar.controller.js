angular.module("hackaton-stefanini").controller("PerfilIncluirAlterarController", PerfilIncluirAlterarController);
PerfilIncluirAlterarController.$inject = [
    "$rootScope",
    "$scope",
    "$location",
    "$q",
    "$filter",
    "$routeParams",
    "HackatonStefaniniService"];


function PerfilIncluirAlterarController(
    $rootScope,
    $scope,
    $location,
    $q,
    $filter,
    $routeParams,
    HackatonStefaniniService) {


    vm = this;
    


    vm.perfil = {
        id: null,
        nome: "",
        descricao: ""
    }

    vm.urlPerfil = "http://localhost:8080/treinamento/api/perfils/";

    vm.init = function () {

        vm.tituloTela = "Cadastro de Perfil";
        

    }

    vm.incluir = function () {
        var objetoDados = angular.copy(vm.perfil);

        HackatonStefaniniService.incluir(vm.urlPerfil, objetoDados).then(
            function (perfilRetorno) {
                console.log(perfilRetorno)
            });


        };
    }
