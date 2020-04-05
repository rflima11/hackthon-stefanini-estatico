angular.module("hackaton-stefanini").controller("EnderecoIncluirAlterarController", EnderecoIncluirAlterarController);
EnderecoIncluirAlterarController.$inject = [
    "$rootScope",
    "$scope",
    "$location",
    "$q",
    "$filter",
    "$routeParams",
    "HackatonStefaniniService"];


function EnderecoIncluirAlterarController(
    $rootScope,
    $scope,
    $location,
    $q,
    $filter,
    $routeParams,
    HackatonStefaniniService) {

        vm = this;

        vm.enderecoNovo = {
            id: null,
            idPessoa: null,
            cep: "",
            uf: "",
            localidade: "",
            bairro: "",
            logradouro: "",
            complemento: ""
        };













        vm.salvarEndereco = function() {

            var objetoDados = angular.copy(vm.enderecoNovo);
    
            vm.salvar(vm.urlEndereco, objetoDados).then(
                function (enderecoRetorno) {
                   console.log(enderecoRetorno);
                });
        };

        vm.salvar = function (url, objeto) {

            var deferred = $q.defer();
            var obj = JSON.stringify(objeto);
            HackatonStefaniniService.incluir(url, obj).then(
                function (response) {
                    if (response.status == 200) {
                        deferred.resolve(response.data);
                    }
                }
            );
            return deferred.promise;
        }

















    }