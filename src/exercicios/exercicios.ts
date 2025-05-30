import * as readlineSync from 'readline-sync';

// Exercicio 1 - Soma de dois numeros
export function soma(): number {
    readlineSync.questionFloat('1 - Soma de Dois Numeros: ');
    const a = readlineSync.questionFloat('Digite o primeiro numero: ');
    const b = readlineSync.questionFloat('Digite o segundo numero: ');
    return a + b;
}

// Exercicio 2 - Verificar se o numero e par ou impar
export function verificarParImpar(): string {
    readlineSync.questionFloat('2 - Descubra se o Numero e PAR ou IMPAR: ');
    const numero = readlineSync.questionFloat('Digite um numero: ');
    return numero % 2 === 0 ? 'PAR' : 'IMPAR';
}

// Exercicio 3 - Media de 3 notas
export function mediaNumeros(): number {
    readlineSync.questionFloat('3 - Qual a media de 3 Notas: ');
    const c = readlineSync.questionFloat('Qual sua Primeira Nota... ');
    const d = readlineSync.questionFloat('Qual sua Segunda Nota... ');
    const e = readlineSync.questionFloat('Qual sua Terceira Nota... ');
    return (c + d + e) / 3;
}

// Exercicio 4 - Converter Celsius em Fahrenheit
export function conveterCelemFah(): number {
    const celsius = readlineSync.questionFloat('Digite a temperatura em Celsius... ');
    return (celsius * 9.0 / 5.0) + 32;
}

// Exercicio 5 - Exibir numeros pares ate 20
export function exibirPar(): void {
    readlineSync.question('5 - Exibir os vinte Numeros PARES: (pressione Enter)');
    for (let g = 0; g < 20; g++) {
        if (g % 2 === 0) {
            console.log(g);
        }
    }
}

// Exercicio 6 - Construir um array com 5 numeros
export function armazenarArray(): void {
    const numeros: number[] = [];
    for (let i = 0; i < 5; i++) {
        const entrada = readlineSync.questionFloat('Digite um numero: ');
        const numero = Number(entrada);
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            console.log('Entrada invalida. Tente novamente.');
            i--; // Repete a iteracao
        }
    }
    console.log('Numeros digitados: ', numeros);
}

// Exercicio 7 - Ver numero maior de um array digitado
export function maiorValorArray(): number {
    const quantidade = readlineSync.questionInt('Quantos numeros voce quer digitar: ');
    const numeros: number[] = [];

    for (let i = 0; i < quantidade; i++) {
        const num = readlineSync.questionFloat('Digite um numero: ');
        numeros.push(num);
    }

    return Math.max(...numeros);
}

// Exercicio 8 - Contar vogais em uma frase
export function contarVogais(): void {
    const frase = readlineSync.question('Digite uma frase: ');
    const vogais = 'aeiou';
    let contador = 0;

    for (const letra of frase.toLowerCase()) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }

    console.log(`A frase contem ${contador} vogais.`);
}

    //Questão numero 9
export function Calc(): void {

  const n1 = readlineSync.question('Número 1: ');
  const op = readlineSync.question('Operador (+ - * /): ');
  const n2 = readlineSync.question('Número 2: ');

  const a = parseFloat(n1);
  const b = parseFloat(n2);

  let r: number | string;

  if (op === '+') r = a + b;
  else if (op === '-') r = a - b;
  else if (op === '*') r = a * b;
  else if (op === '/') r = b !== 0 ? a / b : 'Erro: divisão por zero';
  else r = 'Operador inválido';

  console.log('Resultado:', r);
}


//Questão numero 10
export function Ordenar(): void{
const numeros: number[] = [5, 2, 9, 1, 7];

numeros.sort((a, b) => a - b);

console.log('Números ordenados:', numeros);
}

    //Questão 11
export function Pessoa() {

class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  exibir(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);

  }
}

// Exemplo de uso
const pessoa1 = new Pessoa('Maria', 30);
pessoa1.exibir();
}

//Questão 12

export function aluno() {
  class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }

    exibir(): void {
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade: ${this.idade}`);
    }
  }

  class Aluno extends Pessoa {
    matricula: string;

    constructor(nome: string, idade: number, matricula: string) {
      super(nome, idade); // Chama o construtor da classe Pessoa
      this.matricula = matricula;
    }

    exibir(): void {
      super.exibir(); // Chama o método exibir da classe Pessoa
      console.log(`Matrícula: ${this.matricula}`);
    }
  }

  // Exemplo de uso
  const aluno1 = new Aluno('João', 20, 'A12345');
  aluno1.exibir();
}

// Questão 13
export function carro() {

    interface Veiculo {
  acelerar(): void;
  frear(): void;
}

// Classe Carro implementando a interface Veiculo
    class Carro implements Veiculo {
    private velocidade: number = 30;

  acelerar(): void {
    this.velocidade += 10;
    console.log(`Acelerando... Velocidade: ${this.velocidade} km/h`);
  }

  frear(): void {
    this.velocidade -= 10;
    if (this.velocidade < 0) this.velocidade = 0;
    console.log(`Freando... Velocidade: ${this.velocidade} km/h`);
  }
}

// Exemplo de uso
const meuCarro = new Carro();
meuCarro.acelerar(); 
meuCarro.acelerar(); 
meuCarro.frear();    

}

//Questao 14

export function tabuada() {
  const entrada = readlineSync.question('Digite um número inteiro: ');
  const numero = parseInt(entrada);

  if (isNaN(numero)) {
    console.log('Entrada inválida. Digite um número inteiro.');
  } else {
    console.log(`\nTabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
}

export function CalcImc(){

function classificarIMC(imc: number): string {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Sobrepeso';
  if (imc < 35) return 'Obesidade grau 1';
  if (imc < 40) return 'Obesidade grau 2';
  return 'Obesidade grau 3 (mórbida)';
}

// Solicita entrada do usuário
const pesoStr = readlineSync.question('Digite seu peso (kg): ');
const alturaStr = readlineSync.question('Digite sua altura (m): ');

// Converte para números
const peso = parseFloat(pesoStr);
const altura = parseFloat(alturaStr);

// Valida os valores
if (isNaN(peso) || isNaN(altura) || altura <= 0) {
  console.log('Valores inválidos. Tente novamente.');
} else {
  // Calcula o IMC
  const imc = peso / (altura * altura);
  const classificacao = classificarIMC(imc);
  
  // Exibe os resultados
  console.log(`\nSeu IMC é: ${imc.toFixed(2)}`);
  console.log(`Classificação: ${classificacao}`);
}
}

//Questão 16

//seção do validamento da senha
function validarSenha(senha: string): string[] {
  const erros: string[] = [];

  if (senha.length < 8) erros.push('A senha deve ter pelo menos 8 caracteres.');
  if (!/[A-Z]/.test(senha)) erros.push('A senha deve conter pelo menos uma letra maiúscula.');
  if (!/[a-z]/.test(senha)) erros.push('A senha deve conter pelo menos uma letra minúscula.');
  if (!/[0-9]/.test(senha)) erros.push('A senha deve conter pelo menos um número.');

  return erros;
}
//função principal
export function senha() {

  const senhaInput = readlineSync.question('Digite uma senha para validar: ');
  const erros = validarSenha(senhaInput);

  if (erros.length === 0) {
    console.log('✅ Senha válida!');
  } else {
    console.log('❌ Senha inválida. Veja os erros:');
    erros.forEach((erro) => console.log('- ' + erro));
  }
}

// Questão 17
export function numrng (){
 const numeroSecreto = Math.floor(Math.random() * 100) + 1;

function jogar(): void {
  console.log('🎲 Jogo de Adivinhação!');
  
  while (true) {
    const resposta = readlineSync.question('Adivinhe o número entre 1 e 100: ');
    const palpite = parseInt(resposta);
    
    if (isNaN(palpite)) {
      console.log('Por favor, digite um número válido.');
      continue;
    }
    
    if (palpite < numeroSecreto) {
      console.log('🔼 O número é maior.');
    } else if (palpite > numeroSecreto) {
      console.log('🔽 O número é menor.');
    } else {
      console.log(`🎉 Parabéns! Você acertou o número ${numeroSecreto}!`);
      break;
    }
  }
}

jogar();
}

//Questão 18

export function contPalav(){
  
  const frase = readlineSync.question('Digite uma frase: ');

// Remove espaços extras e divide por espaços para contar palavras
const palavras = frase.trim().split(/\s+/);
const quantidade = frase.trim() === '' ? 0 : palavras.length;

console.log(`Número de palavras: ${quantidade}`);
}