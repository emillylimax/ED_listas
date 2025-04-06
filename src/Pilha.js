// class Pilha {
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
// export default Pilha;



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

// // ____________________________________________

// //Lista 1: Questão 3