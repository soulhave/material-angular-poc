(function() {
    'use strict';
    angular.module('users').factory('userService', UserService);

    function UserService($q) {
        var users = [{
            name: 'Thomas Turbando',
            avatar: '4',
            content: 'A certificação de metodologias que nos auxiliam lidar com a percepção das dificuldades representa uma abertura para a melhoria de alternativas às soluções ortodoxas.'
        }, {
            name: 'To Ti Zoando',
            avatar: '5',
            content: 'Se hoje é o dia das crianças... Ontem eu disse: o dia da criança é o dia da mãe, dos pais, das professoras, mas também é o dia dos animais, sempre que você olha uma criança, há sempre uma figura oculta, que é um cachorro atrás. O que é algo muito importante!'
        }, {
            name: 'Testolindo da Silva',
            avatar: '6',
            content: 'Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses.'
        }, {
            name: 'Ana melam be',
            avatar: '7',
            content: 'Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar, então é... é... Já vivi muito sem dinheiro, já vivi muito com dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a senhora ganha R$10 mil por mês. -Dilma: O que que é R$10 mil?'
        }, {
            name: 'Cutu cacu',
            avatar: '8',
            content: 'Ai você fala o seguinte: "- Mas vocês acabaram isso?" Vou te falar: -"Não, está em andamento!" Tem obras que "vai" durar pra depois de 2010. Agora, por isso, nós já não desenhamos, não começamos a fazer projeto do que nós "podêmo fazê"? 11, 12, 13, 14... Por que é que não?'
        }, {
            name: 'Armando Pinto',
            avatar: '9',
            content: 'No meu xinélo da humildade eu gostaria muito de ver o Neymar e o Ganso. Por que eu acho que.... 11 entre 10 brasileiros gostariam. Você veja, eu já vi, parei de ver. Voltei a ver, e acho que o Neymar e o Ganso têm essa capacidade de fazer a gente olhar.'
        }, {
            name: 'Cexeira mi nhafi mose',
            avatar: '10',
            content: 'Ai você fala o seguinte: "- Mas vocês acabaram isso?" Vou te falar: -"Não, está em andamento!" Tem obras que "vai" durar pra depois de 2010. Agora, por isso, nós já não desenhamos, não começamos a fazer projeto do que nós "podêmo fazê"? 11, 12, 13, 14... Por que é que não?'
        }, {
            name: 'Vagina Suja',
            avatar: '11',
            content: 'Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar, então é... é... Já vivi muito sem dinheiro, já vivi muito com dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a senhora ganha R$10 mil por mês. -Dilma: O que que é R$10 mil?'
        }];

        var _loadAll = function() {
            return $q.when(users);
        };

        return {
            loadAll: _loadAll
        };

    }
})();
