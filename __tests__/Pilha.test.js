// import Pilha from "../src/Pilha";


// let p;

// beforeEach(() => {
//     p = new Pilha();
// })

// test("Se a pilha acabou de ser criada, ela deve estar vazia.", () => {
//     expect(p.isEmpty()).toBe(true);
// })

// test("Se eu inserir um elemento, a pilha não pode estar mais vazia.", () => {
//     p.push(1);
//     expect(p.isEmpty()).toBe(false);
//     expect(p.top()).toBe(1);
// })

// test("Se eu inserir 5 elementos a pilha vai está cheia", () => {
//     p.push(1);
//     p.push(2);
//     p.push(3);
//     p.push(4);
//     p.push(5);
//     expect(p.isFull()).toBe(true);
//     expect(p.isEmpty()).toBe(false);
//     expect(p.top()).toBe(5);
//     expect(p.length()).toBe(5);
// })
// test("Quem está no topo?", () => {
//     p.push(1);
//     p.push(2);
//     p.push(3);
//     p.pop();
//     p.pop();
//     expect(p.top()).toBe(1);
//     p.pop();
//     expect(p.isEmpty()).toBe(true);
//     expect(p.length()).toBe(0);
// })



// //Lista 1: Questão 1
// import { inverte } from "../src/Pilha";

// test('Inverte a palavra ABACAXI', () => {
//     expect(inverte('ABACAXI')).toBe('IXACABA');
// });

// // ____________________________________________

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

//Lista 1: Questão 3