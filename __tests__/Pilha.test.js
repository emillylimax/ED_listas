import Pilha from "../src/Pilha";

let p;

beforeEach(() => {
    p = new Pilha();
})

test("Se a pilha acabou de ser criada, ela deve estar vazia.", () => {
    expect(p.isEmpty()).toBe(true);
})

test("Se eu inserir um elemento, a pilha não pode estar mais vazia.", () => {
    p.push(1);
    expect(p.isEmpty()).toBe(false);
    expect(p.top()).toBe(1);
})

test("Se eu inserir 5 elementos a pilha vai está cheia", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    p.push(4);
    p.push(5);
    expect(p.isFull()).toBe(true);
    expect(p.isEmpty()).toBe(false);
    expect(p.top()).toBe(5);
    expect(p.length()).toBe(5);
})
test("Quem está no topo?", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    p.pop();
    p.pop();
    expect(p.top()).toBe(1);
    p.pop();
    expect(p.isEmpty()).toBe(true);
    expect(p.length()).toBe(0);
})

// ____________________________________________

// //Lista 1: Questão 1
// import { inverte } from "../src/Pilha";

// test('Inverte a palavra ABACAXI', () => {
//     expect(inverte('ABACAXI')).toBe('IXACABA');
// });

// ____________________________________________

// //Lista 1: Questão 2
// import DuasPilhas from "../src/Pilha";

// let pilhas;

// beforeEach(() => {
//     pilhas = new DuasPilhas(10);
// });

// test ('Empilhar e desempilhar A', () => {
//     pilhas.empilhaA(1);
//     pilhas.empilhaA(2);
//     expect(pilhas.desempilhaA()).toBe(2);
//     expect(pilhas.desempilhaA()).toBe(1);
//     expect(pilhas.eVaziaA()).toBe(true);
// });

// test ('Empilhar e desempilhar B', () => {
//     pilhas.empilhaB(10);
//     pilhas.empilhaB(30);
//     expect(pilhas.desempilhaB()).toBe(30);
//     expect(pilhas.desempilhaB()).toBe(10);
//     expect(pilhas.eVaziaB()).toBe(true);
// });

// test ('Empilhar em ambas pilhas', () => {
//     pilhas.empilhaA(1);
//     pilhas.empilhaA(2);
//     pilhas.empilhaB(10);
//     pilhas.empilhaB(20);

//     expect(pilhas.desempilhaA()).toBe(2);
//     expect(pilhas.desempilhaB()).toBe(20);
//     expect(pilhas.desempilhaA()).toBe(1);
//     expect(pilhas.desempilhaB()).toBe(10);
// });

// test('Empilhar pilha cheia', () => {
//     for (let i = 0; i <5; i++){
//         pilhas.empilhaA(i);
//         pilhas.empilhaB(i+10);
//     }

//     expect(() => pilhas.empilhaA(99)).toThrow('Pilha Cheia');
//     expect(() => pilhas.empilhaB(10)).toThrow('Pilha Cheia');
// });

// // ____________________________________________

// //Lista 1: Questão 3

// import Pilha from "../src/Pilha";

// import { trocaTopoBase } from "../src/Pilha";

// let p; 
// beforeEach(() => {
//     p = new Pilha(5);
// });

// test('Trocar topo e base de uma pilha com vários elementos', () => {
//     p.push(1);
//     p.push(2);
//     p.push(3);
//     p.push(4); 

//     trocaTopoBase(p);

//     expect(p.pop()).toBe(1);
//     expect(p.pop()).toBe(3);
//     expect(p.pop()).toBe(2);
//     expect(p.pop()).toBe(4); 
// });

// ____________________________________________

//Lista 1: Questão 4

// import Pilha from "../src/Pilha";

// import { decimalParaBinario } from "../src/Pilha"; 

// test("Conversor de decimal para binário", () => {
//     expect(decimalParaBinario(10)).toBe("1010");
//     expect(decimalParaBinario(15)).toBe("1111");
//     expect(decimalParaBinario(2)).toBe("10");
//     expect(decimalParaBinario(0)).toBe("");
// });

// ____________________________________________

// Lista 1: Questão 5
// import Pilha from "../src/Pilha";

// import { verificaBemFormada } from "../src/Pilha"; 
// test("Verificar sequência bem-formada de parênteses e colchetes", () => {
//     expect(verificaBemFormada("[ ( ) [ ( ) ] ] ( )")).toBe(true); // Bem-formada
//     expect(verificaBemFormada("( ( ) ]")).toBe(false);            // Malformada
//     expect(verificaBemFormada("[ ( [ ] ) ]")).toBe(true);         // Bem-formada
//     expect(verificaBemFormada("[(])")).toBe(false);               // Malformada
//     expect(verificaBemFormada("")).toBe(true);                    // Sequência vazia é bem-formada
// });

// ____________________________________________

// Lista 1: Questão 6

// ____________________________________________

// Lista 1: Questão 7
// import Pilha from "../src/Pilha";
// import { removeDuplicados } from "../src/Pilha";

// test("Remover duplicados de uma pilha", () => {
//     const p = new Pilha(10);
//     p.push(3);
//     p.push(7);
//     p.push(3);
//     p.push(2);
//     p.push(7);
//     p.push(1);
//     p.push(4);
//     p.push(2);

//     removeDuplicados(p);

//     expect(p.pop()).toBe(4);
//     expect(p.pop()).toBe(1);
//     expect(p.pop()).toBe(2);
//     expect(p.pop()).toBe(7);
//     expect(p.pop()).toBe(3);
//     expect(p.isEmpty()).toBe(true);
// });

// ____________________________________________

//Lista 1: Questão 8

// import { Pilha, PilhaDePratos } from "../src/Pilha";

// test("Deve empilhar e desempilhar corretamente", () => {
//     const pilhaDePratos = new PilhaDePratos(3);
//     pilhaDePratos.empilha(5);
//     pilhaDePratos.empilha(10);
//     pilhaDePratos.empilha(15);
//     pilhaDePratos.empilha(20);

//     expect(pilhaDePratos.desempilha()).toBe(20);
//     expect(pilhaDePratos.desempilha()).toBe(15);
// });