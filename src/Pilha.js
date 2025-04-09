// export class Pilha {
//     constructor(size = 5) {
//         this.dados = [];
//         this.size = size;
//         this.topo = 0;
//     }
//     push(elemento) {
//         if (this.isFull()) {
//             throw new Error("Stack Overflow");
//         }
//         this.dados[this.topo] = elemento;
//         this.topo++;
//     }
//     pop() {
//         if (this.isEmpty()) {
//             throw new Error("Stack underflow");
//         }
//         this.topo--;
//         return this.dados[this.topo];
//     }
//     top() {
//         if (!this.isEmpty()) {
//             return this.dados[this.topo - 1];
//         }
//     }
//     isEmpty() {
//         return this.length() === 0;
//     }
//     isFull() {
//         return this.length() === this.size;
//     }
//     toString() { }
//     clear() {
//         this.topo = 0;
//     }
//     length() {
//         return this.topo;
//     }
// }
// // export default Pilha;

// ____________________________________________

// //Lista 1: Questão 1
// class Pilha {
//     constructor () {
//         this.itens = [];
//     }

//     //Adiciona elemento no topo
//     push(elemento) {
//         this.itens.push(elemento);

//     }

//     //Remove elementos
//     pop(){
//         if (this.isEmpty()){
//             throw new Error ("Pilha vazia");
//         }
//         return this.itens.pop();
//     }

//     //Verifica se tá vazia
//     isEmpty(){
//         return this.itens.length === 0;
//     }
// }

// export default Pilha;

// export function inverte(palavra){
//     const pilha = new Pilha();

//     //Adicionar caractere da palavra na pilha
//     for (let i = 0; i <palavra.length; i++){
//         pilha.push(palavra[i]);
//     }

//     //Palavra invertida removendo os elementos da pilha
//     let palavraInvertida = "";
//     while (!pilha.isEmpty()){
//         palavraInvertida += pilha.pop();
//     }

//     return palavraInvertida;
// }

// ____________________________________________

// //Lista 1: Questão 2
// class DuasPilhas{
//     constructor(tamanho){
//         this.vetor = new Array(tamanho);
//         this.topoA = -1; 
//         this.topoB = tamanho;
//     }

//     eVaziaA(){
//         return this.topoA === -1;
//     }

//     eVaziaB(){
//         return this.topoB === this.vetor.length;
//     }
    
//     empilhaA(elemento){
//         if(this.topoA + 1 === this.topoB){
//             throw new Error ('Pilha Cheia');
//         }
//         this.topoA++; //Anda o topo pra frente
//         this.vetor[this.topoA] = elemento;
//     }

//     empilhaB(elemento){
//         if(this.topoB - 1 === this.topoA){
//             throw new Error ('Pilha Cheia');
//         }
//         this.topoB--; //Anda o topo pra trás
//         this.vetor[this.topoB] = elemento;
//     }

//     desempilhaA(){
//         if(this.eVaziaA()){
//             throw new Error ('Erro: Pilha vazia');
//             return null;
//         }
//         const elemento = this.vetor[this.topoA];
//         this.topoA--;
//         return elemento;
//     }
    
//     desempilhaB(){
//         if(this.eVaziaB()){
//             throw new Error ('Erro: Pilha vazia');
//             return null;
//         }
//         const elemento = this.vetor[this.topoB];
//         this.topoB++;
//         return elemento;
//     }
// }

// export default DuasPilhas;

// ____________________________________________

//Lista 1: Questão 3
//Usei a classe Pilha que foi definida anteriormente
//Só deu certo com array, com pilha auxiliar não funcionou

// export function trocaTopoBase(pilha) {
//     if (pilha.isEmpty() || pilha.length() === 1) {
//         return;
//     }

//     const tempArray = [];

//     while (!pilha.isEmpty()) {
//         tempArray.push(pilha.pop());
//     }

//     const base = tempArray[tempArray.length - 1];
//     const topo = tempArray[0];
//     tempArray[0] = base;
//     tempArray[tempArray.length - 1] = topo;

//     for (let i = tempArray.length - 1; i >= 0; i--) {
//         pilha.push(tempArray[i]);
//     }
// }

// ____________________________________________

//Lista 1: Questão 4

// export function decimalParaBinario(numero){
// const pilha = new Pilha();

//     while (numero > 0) {
//         const resto = numero % 2;
//         pilha.push(resto);
//         numero = (numero/2) | 0;
//     }

//     let binario = "";
//     while (!pilha.isEmpty()){
//         binario += pilha.pop();
//     }

//     return binario;
// }
// ____________________________________________

//Lista 1: Questão 5 

// export function verificaBemFormada(texto){
//     const pilha = new Pilha ();
//     for (let char of texto){ 
//         if (char === '(' || char === '[') {
//             pilha.push(char);
//         } 
//         else if (char === ')' || char === ']') {
//             if (pilha.isEmpty()) {
//                 return false;
//         }

//             const topo = pilha.pop();
//             if ((char === ')' && topo !== '(') || (char === ']' && topo !== '[')){
//                 return false;
//             }
//         }
//     }

// return pilha.isEmpty();
// }

// ____________________________________________
//Lista 1: Questão 6

// ____________________________________________

//Lista 1: Questão 7

// export function removeDuplicados(pilha) {
//     const vistos = new Set(); 
//     const tempArray = [];

//     const arrayTemp = [];
//     while (!pilha.isEmpty()) {
//         arrayTemp.push(pilha.pop());
//     }

//     for (let i = arrayTemp.length - 1; i >= 0; i--) {
//         const elemento = arrayTemp[i];
//         if (!vistos.has(elemento)) {
//             vistos.add(elemento);
//             tempArray.push(elemento); 
//         }
//     }

//     for (let i = 0; i < tempArray.length; i++) {
//         pilha.push(tempArray[i]);
//     }
// }

// ____________________________________________

//Lista 1: Questão 8

// export class PilhaDePratos {
//     constructor(capacidade) {
//         this.capacidade = capacidade;
//         this.pilhas = [];
//     }

//     empilha(x) {
//         if (this.pilhas.length === 0 || this._ultimaPilha().isFull()) {
//             const novaPilha = new Pilha(this.capacidade);
//             this.pilhas.push(novaPilha);
//         }
//         this._ultimaPilha().push(x);
//     }

//     desempilha() {
//         if (this.pilhas.length === 0) {
//             return null;
//         }
//         const ultima = this._ultimaPilha();
//         let valor;
//         try {
//             valor = ultima.pop();
//         } catch (err) {
//             return null;
//         }
//         if (ultima.isEmpty()) {
//             this.pilhas.pop();
//         }
//         return valor;
//     }

//     _ultimaPilha() {
//         return this.pilhas[this.pilhas.length - 1];
//     }
// }

// export default PilhaDePratos;