// //LISTA 2: QUESTÃO 1

// import { PilhaComDuasFilas } from "../src/FilaLista";

// let pilha;

// beforeEach(() => {
//     pilha = new PilhaComDuasFilas();
// });

// test("A pilha deve estar vazia inicialmente", () => {
//     expect(pilha.isEmpty()).toBe(true);
//     expect(pilha.size()).toBe(0);
// });

// test("Push: a pilha não deve estar vazia após inserir elementos e o topo deve ser o último inserido", () => {
//     pilha.push(10);
//     expect(pilha.isEmpty()).toBe(false);
//     expect(pilha.top()).toBe(10);
//     expect(pilha.size()).toBe(1);

//     pilha.push(20);
//     expect(pilha.top()).toBe(20);
//     expect(pilha.size()).toBe(2);
// });

// test("Pop: deve remover e retornar o elemento do topo", () => {
//     pilha.push(5);
//     pilha.push(15);
//     pilha.push(25);

//     expect(pilha.pop()).toBe(25);
//     expect(pilha.size()).toBe(2);
//     expect(pilha.top()).toBe(15);

//     expect(pilha.pop()).toBe(15);
//     expect(pilha.pop()).toBe(5);
//     expect(pilha.isEmpty()).toBe(true);
// });

// test("Pop em pilha vazia deve lançar erro", () => {
//     expect(() => pilha.pop()).toThrow("Pilha vazia");
// });

// //_____________________________________________
// //LISTA 2: QUESTÃO 2

// import FilaComDuasPilhas from "../src/FilaLista";

// let queue;

// beforeEach(() => {
//     queue = new FilaComDuasPilhas();
// });

// test("Uma fila recém-iniciada está vazia e seu tamanho é 0", () => {
//     expect(queue.isEmpty()).toBe(true);
//     expect(queue.size()).toBe(0);
// });

// test("Enqueue: após inserir elementos, a fila não deve estar vazia e o front deve ser o primeiro inserido", () => {
//     queue.enqueue(10);
//     queue.enqueue(20);
//     expect(queue.isEmpty()).toBe(false);
//     expect(queue.size()).toBe(2);
//     expect(queue.front()).toBe(10);
// });

// test("Dequeue: deve retornar os elementos na ordem correta (FIFO)", () => {
//     queue.enqueue(1);
//     queue.enqueue(2);
//     queue.enqueue(3);
    
//     expect(queue.dequeue()).toBe(1);
//     expect(queue.front()).toBe(2);
//     expect(queue.size()).toBe(2);
    
//     expect(queue.dequeue()).toBe(2);
//     expect(queue.front()).toBe(3);
    
//     expect(queue.dequeue()).toBe(3);
//     expect(queue.isEmpty()).toBe(true);
// });

// test("Dequeue em fila vazia deve lançar erro", () => {
//     expect(() => queue.dequeue()).toThrow("Queue is empty");
// });

//_____________________________________________
//LISTA 2: QUESTÃO 3

// import SistemaTransporte from "../src/FilaLista";

// let sistema;

// beforeEach(() => {
//     sistema = new SistemaTransporte();
// });

// test("Novo sistema deve ter fila vazia e 0 carregamentos", () => {
//     expect(sistema.existeAguardando()).toBe(false);
//     expect(sistema.carregamentosAtingidos()).toBe(false);
//     expect(sistema.carregamentos).toBe(0);
// });

// test("Registrar chegada de caminhoneiros", () => {
//     sistema.registrarChegada("Caminhoneiro A");
//     sistema.registrarChegada("Caminhoneiro B");
//     expect(sistema.existeAguardando()).toBe(true);
//     expect(sistema.listarAguardando()).toEqual(["Caminhoneiro A", "Caminhoneiro B"]);
// });

// test("Atender caminhoneiro e incrementar carregamentos", () => {
//     sistema.registrarChegada("Caminhoneiro A");
//     sistema.registrarChegada("Caminhoneiro B");
//     const atendido = sistema.atender();
//     expect(atendido).toBe("Caminhoneiro A");
//     expect(sistema.carregamentos).toBe(1);
//     expect(sistema.listarAguardando()).toEqual(["Caminhoneiro B"]);
// });

// test("Não permitir atendimento se não houver caminhoneiros no aguardo", () => {
//     expect(() => sistema.atender()).toThrow("Não há caminhoneiros no aguardo.");
// });

// test("Não permitir registrar chegada se carregamentos diários foram atingidos", () => {
//     sistema.carregamentos = 10;
//     expect(() => sistema.registrarChegada("Caminhoneiro X"))
//         .toThrow("Número de carregamentos do dia foi atingido. Não são aceitas mais chegadas.");
// });

//_____________________________________________
//LISTA 2: QUESTÃO 4
 
// class FilaSimples {
//     constructor() {
//         this.items = [];
//     }
//     enqueue(item) {
//         this.items.push(item);
//     }
//     dequeue() {
//         if (this.isEmpty()) {
//             throw new Error("Queue underflow");
//         }
//         return this.items.shift();
//     }
//     isEmpty() {
//         return this.items.length === 0;
//     }
//     size() {
//         return this.items.length;
//     }
// }
 
// import intercalarFilas from "../src/FilaLista.js";

// test("Deve intercalar duas filas de tamanhos iguais", () => {
//     const fila1 = new FilaSimples();
//     const fila2 = new FilaSimples();
 
//     fila1.enqueue(1);
//     fila1.enqueue(3);
//     fila1.enqueue(5);

//     fila2.enqueue(2);
//     fila2.enqueue(4);
//     fila2.enqueue(6);

//     const intercalada = intercalarFilas(fila1, fila2);
 
//     expect(intercalada.dequeue()).toBe(1);
//     expect(intercalada.dequeue()).toBe(2);
//     expect(intercalada.dequeue()).toBe(3);
//     expect(intercalada.dequeue()).toBe(4);
//     expect(intercalada.dequeue()).toBe(5);
//     expect(intercalada.dequeue()).toBe(6);
//     expect(intercalada.isEmpty()).toBe(true);
// });

// test("Deve intercalar quando uma fila tem mais elementos que a outra", () => {
//     const fila1 = new FilaSimples();
//     const fila2 = new FilaSimples();
 
//     fila1.enqueue("A");
//     fila1.enqueue("C");
 
//     fila2.enqueue("B");
//     fila2.enqueue("D");
//     fila2.enqueue("E");
//     fila2.enqueue("F");

//     const intercalada = intercalarFilas(fila1, fila2);

//     expect(intercalada.dequeue()).toBe("A");
//     expect(intercalada.dequeue()).toBe("B");
//     expect(intercalada.dequeue()).toBe("C");
//     expect(intercalada.dequeue()).toBe("D");
//     expect(intercalada.dequeue()).toBe("E");
//     expect(intercalada.dequeue()).toBe("F");
//     expect(intercalada.isEmpty()).toBe(true);
// });

//_____________________________________________
//LISTA 2: QUESTÃO 5

// import Deque from "../src/FilaLista.js";

// let deque;

// beforeEach(() => {
//     deque = new Deque();
// });

// test("Deque inicial deve estar vazio", () => {
//     expect(deque.isEmpty()).toBe(true);
// });

// test("Inserir no início e remover do início", () => {
//     deque.inserirInicio("A");
//     deque.inserirInicio("B");
//     expect(deque.removerInicio()).toBe("B");
//     expect(deque.removerInicio()).toBe("A");
//     expect(deque.isEmpty()).toBe(true);
// });

// test("Inserir no fim e remover do fim", () => {
//     deque.inserirFim("A");
//     deque.inserirFim("B");
//     expect(deque.removerFim()).toBe("B");
//     expect(deque.removerFim()).toBe("A");
//     expect(deque.isEmpty()).toBe(true);
// });

// test("Operações mistas: inserção no início e fim", () => {
//     deque.inserirFim("A");    
//     deque.inserirInicio("B");   
//     deque.inserirFim("C");     
    
//     expect(deque.removerInicio()).toBe("B");  
//     expect(deque.removerFim()).toBe("C");    
//     expect(deque.removerInicio()).toBe("A"); 
//     expect(deque.isEmpty()).toBe(true);
// });

// test("Remover de um deque vazio deve lançar erro", () => {
//     expect(() => deque.removerInicio()).toThrow("Deque is empty");
//     expect(() => deque.removerFim()).toThrow("Deque is empty");
// });

//_____________________________________________
//LISTA 2: QUESTÃO 6

import reverseQueue from "../src/FilaLista";

class QueueSimple {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue underflow");
        }
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}

test("deve inverter a ordem dos elementos na fila", () => {
    const q = new QueueSimple();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    
    const reversed = reverseQueue(q);
    expect(reversed.dequeue()).toBe(4);
    expect(reversed.dequeue()).toBe(3);
    expect(reversed.dequeue()).toBe(2);
    expect(reversed.dequeue()).toBe(1);
    expect(reversed.isEmpty()).toBe(true);
});