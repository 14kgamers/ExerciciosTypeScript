import readlineSync from 'readline-sync';
import { soma, verificarParImpar, mediaNumeros, exibirPar, conveterCelemFah, armazenarArray, maiorValorArray, contarVogais, Calc, Ordenar, Pessoa, aluno, carro, tabuada, CalcImc, senha, numrng, contPalav } from './exercicios/exercicios';

function menu() {
    console.log('Bem-vindo ao Menu de Exercicios');
    console.log('\nOpcoes disponiveis:');
    console.log('1 - Soma');
    console.log('2 - Verificar Par/Impar');
    console.log('3 - Media de Numeros');
    console.log('4 - Converter Celsius em Fahrenheit');
    console.log('5 - Exibir Numeros Pares');
    console.log('6 - Armazenar Array');
    console.log('7 - Maior Valor de um Array');
    console.log('8 - Contar Vogais');
    console.log('9 - Calculadora Simples (+ - * /) ');
    console.log('10 - Numeros ordenados: ');
    console.log('11 - Classe Pessoa');
    console.log('12 - Classe Aluno');
    console.log('13 - Classe Carro');
    console.log('14 - Tabuada');
    console.log('15 - Calcular IMC');
    console.log('16 - Validar Senha');
    console.log('17 - Acerte o Numero');
    console.log('18 - Conta Palavras');
    console.log('0 - Sair');
    const opcao = readlineSync.questionInt('\nEscolha o exercicio(0-18): ');
    switch(opcao){
        case 1:
            console.log(soma());
            break;
        case 2:
            console.log(verificarParImpar());
            break;
        case 3:
            console.log(mediaNumeros());
            break;
        case 4:
            console.log(conveterCelemFah());
            break;
        case 5:
            exibirPar();
            break;
        case 6:
            armazenarArray();
            break;
        case 7:
            console.log(maiorValorArray());
            break;
        case 8:
            contarVogais();
            break;

        case 9:
            console.log(Calc());
            break;

        case 10:
            console.log(Ordenar());
            break;
        
        case 11:
            console.log(Pessoa());
            break;

        case 12:
            console.log(aluno());
            break;

        case 13:
            console.log(carro());
            break;
       
        case 14:
            console.log(tabuada());
            break;

        case 15:
            console.log(CalcImc());
            break;
        case 16:
            console.log(senha());
            break;
        case 17:
            console.log(numrng());
            break;
        
        case 18:
            console.log(contPalav());
            break;
        case 0: 
            console.log('Saindo...');
            break;
            
        default:
            console.log('Opcao invalida');

    }
}

menu();