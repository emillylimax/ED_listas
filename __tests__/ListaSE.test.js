// //Lista 3: Questão 1

// import PilhaEncadeada from "../src/ListaSE";

// let pilha;

// beforeEach(() => {
//     pilha = new PilhaEncadeada();
// });

// test("Pilha recém-criada deve estar vazia e ter tamanho 0", () => {
//     expect(pilha.isEmpty()).toBe(true);
//     expect(pilha.size()).toBe(0);
// });

// test("Push adiciona elementos e atualiza o tamanho", () => {
//     pilha.push(10);
//     expect(pilha.isEmpty()).toBe(false);
//     expect(pilha.size()).toBe(1);

//     pilha.push(20);
//     expect(pilha.size()).toBe(2);
// });

// test("Pop remove o elemento do topo e atualiza o tamanho", () => {
//     pilha.push(10);
//     pilha.push(20);

//     expect(pilha.pop()).toBe(20);
//     expect(pilha.size()).toBe(1);

//     expect(pilha.pop()).toBe(10);
//     expect(pilha.isEmpty()).toBe(true);
// });

// test("Pop em pilha vazia deve lançar erro", () => {
//     expect(() => pilha.pop()).toThrow("Pilha vazia");
// });

// //Lista 3: Questão 2
// import FilaEncadeada from "../src/ListaSE";

// let fila;

// beforeEach(() => {
//     fila = new FilaEncadeada();
// });

// test("Fila recém criada deve estar vazia e ter tamanho 0", () => {
//     expect(fila.isEmpty()).toBe(true);
//     expect(fila.size()).toBe(0);
// });

// test("enqueue adiciona elementos e atualiza o tamanho", () => {
//     fila.enqueue(10);
//     expect(fila.isEmpty()).toBe(false);
//     expect(fila.size()).toBe(1);
    
//     fila.enqueue(20);
//     expect(fila.size()).toBe(2);
// });

// test("dequeue remove elementos na ordem correta (FIFO) e atualiza o tamanho", () => {
//     fila.enqueue("A");
//     fila.enqueue("B");
//     fila.enqueue("C");
    
//     expect(fila.dequeue()).toBe("A");
//     expect(fila.size()).toBe(2);
    
//     expect(fila.dequeue()).toBe("B");
//     expect(fila.dequeue()).toBe("C");
//     expect(fila.isEmpty()).toBe(true);
// });

// test("Dequeue de fila vazia deve lançar erro", () => {
//     expect(() => fila.dequeue()).toThrow("Fila vazia");
// });

// //Lista 3: Questão 3
// import ListaSimples from "../src/ListaSimples";

// let lista;

// beforeEach(() => {
//     lista = new ListaSimples();
// });

// test("Lista recém-criada deve ter size 0", () => {
//     expect(lista.size()).toBe(0);
// });

// test("Add insere nós e toArray retorna os valores na ordem de inserção", () => {
//     lista.add("A");
//     lista.add("B");
//     lista.add("C");
//     expect(lista.size()).toBe(3);
//     expect(lista.toArray()).toEqual(["A", "B", "C"]);
// });

// test("Find retorna o nó com o valor buscado", () => {
//     lista.add(10);
//     lista.add(20);
//     lista.add(30);
//     const node = lista.find(20);
//     expect(node).not.toBeNull();
//     expect(node.value).toBe(20);

//     const nodeMissing = lista.find(40);
//     expect(nodeMissing).toBeNull();
// });

// test("Remove remove o nó na posição correta", () => {
//     lista.add("X");
//     lista.add("Y");
//     lista.add("Z");

//     const removed = lista.remove(1);
//     expect(removed.value).toBe("Y");
//     expect(lista.toArray()).toEqual(["X", "Z"]);
//     expect(lista.size()).toBe(2);
// });

// test("Remove com índice fora dos limites deve lançar erro", () => {
//     lista.add("A");
//     expect(() => lista.remove(2)).toThrow("Index out of bounds");
// });

// //Lista 3: Questão 4
// import { ListaSimples, inverterLista } from "../src/ListaSE";

// test("inverterLista inverte corretamente a ordem dos elementos", () => {
//     const lista = new ListaSimples();
//     lista.add("A");
//     lista.add("B");
//     lista.add("C");
    
//     expect(lista.toArray()).toEqual(["A", "B", "C"]);
    
//     const listaInvertida = inverterLista(lista);
    
//     expect(listaInvertida.toArray()).toEqual(["C", "B", "A"]);
// });


// //Lista 3: Questão 5
// import { ListaSimples, embaralharLista } from "../src/ListaSE";

// test("embaralharLista embaralha os elementos", () => {
//     const lista = new ListaSimples();
//     lista.add("A");
//     lista.add("B");
//     lista.add("C");
//     lista.add("D");
//     lista.add("E");

//     const original = lista.toArray();
//     expect(original).toEqual(["A", "B", "C", "D", "E"]);

//     const listaEmbaralhada = embaralharLista(lista);
//     const embaralhada = listaEmbaralhada.toArray();

//     expect(embaralhada.sort()).toEqual(original.sort());
// });


// //Lista 3: Questão 6
// import { StringLista } from "../src/ListaSE";

// test("Retorna corretamente 'world' para 'Hello, world!'", () => {
//     const lista = new StringLista("Hello, world!");
//     const subLista = lista.substring(7, 11); 
//     expect(subLista.toString()).toBe("world");
// });

// //Lista 3: Questão 7
// import { josephus } from "../src/ListaSE";

// describe("Problema de Josephus", () => {
//   test("Com 41 soldados e remoção a cada 3, o sobrevivente deve ser 31", () => {
//     const n = 41;
//     const d = 3;
//     const result = josephus(n, d);
//     expect(result.eliminationOrder.length).toBe(n - 1);
//     expect(result.survivor).toBe(31);
//   });

//   test("Com 10 soldados e remoção a cada 3, a eliminação e sobrevivente estão corretos", () => {
//     const n = 10;
//     const d = 3;
//     const result = josephus(n, d);
    
//     expect(result.eliminationOrder.length).toBe(n - 1);
    

//     expect(result.eliminationOrder).not.toContain(result.survivor);
    
//     const expectedEliminated = [];
//     for (let i = 1; i <= n; i++) {
//       if (i !== result.survivor) {
//         expectedEliminated.push(i);
//       }
//     }
    
//     const sortedEliminated = [...result.eliminationOrder].sort((a, b) => a - b);
//     expectedEliminated.sort((a, b) => a - b);
    
//     expect(sortedEliminated).toEqual(expectedEliminated);
//   });
// });

//Lista 3: Questão 8

import { PessoaList } from "../src/ListaSE";

test("Deve adicionar pessoas mesmo quando os dados vierem em ordem diferente", () => {
  const lista = new PessoaList();
  lista.add("Alice", 30);
  lista.add(25, "Bob");
  lista.add({ name: "Carol", age: 22 });

  expect(lista.toArray()).toEqual([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Carol", age: 22 }
  ]);
});

test("alphabeticalList retorna a lista ordenada por nome", () => {
  const lista = new PessoaList();
  lista.add("Charlie", 28);
  lista.add("Alice", 30);
  lista.add("Bob", 25);

  const sorted = lista.alphabeticalList().toArray();
  
  expect(sorted).toEqual([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 28 }
  ]);
});

test("ageOrderedList retorna a lista ordenada por idade", () => {
  const lista = new PessoaList();
  lista.add("Charlie", 28);
  lista.add("Alice", 30);
  lista.add("Bob", 25);

  const sorted = lista.ageOrderedList().toArray();
  
  expect(sorted).toEqual([
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 28 },
    { name: "Alice", age: 30 }
  ]);
});