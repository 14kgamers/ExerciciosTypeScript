"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Exercicios_1 = require("./Exercicios");
function Menu() {
    console.log('Bem-vindo ao Menu de Exercicios');
    console.log('\nOpções disponíveis:');
    console.log('1 - Soma');
    console.log('2 - Verificar Par/Ímpar');
    console.log('3 - Média de Números');
    const opcao = readline_sync_1.default.questionInt('\nEscolha o exercicio: ');
    switch (opcao) {
        case 1:
            (0, Exercicios_1.soma)();
            break;
        case 2:
            (0, Exercicios_1.verificarParImpar)();
            break;
        case 3:
            (0, Exercicios_1.mediaNumeros)();
            break;
    }
}
Menu();
