// //LISTA 2: QUESTÃO 1

// class Fila {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(elemento) {
//         this.items.push(elemento);
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             throw new Error("Queue underflow");
//         }
//         return this.items.shift();
//     }

//     front() {
//         if (this.isEmpty()) {
//             throw new Error("Queue is empty");
//         }
//         return this.items[0];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }
// }

// // Implementação de uma pilha usando duas filas básicas
// export class PilhaComDuasFilas {
//     constructor() {
//         this.queue1 = new Fila();
//         this.queue2 = new Fila();
//     }

//     push(x) {
//         // Enfileira o novo elemento na queue2
//         this.queue2.enqueue(x);

//         // Transfere todos os elementos da queue1 para a queue2
//         while (!this.queue1.isEmpty()) {
//             this.queue2.enqueue(this.queue1.dequeue());
//         }

//         // Troca as filas
//         const temp = this.queue1;
//         this.queue1 = this.queue2;
//         this.queue2 = temp;
//     }

//     pop() {
//         if (this.queue1.isEmpty()) {
//             throw new Error("Pilha vazia");
//         }
//         return this.queue1.dequeue();
//     }

//     top() {
//         if (this.queue1.isEmpty()) {
//             throw new Error("Pilha vazia");
//         }
//         return this.queue1.front();
//     }

//     isEmpty() {
//         return this.queue1.isEmpty();
//     }

//     size() {
//         return this.queue1.size();
//     }
// }

// //_____________________________________________
// //LISTA 2: QUESTÃO 2

// import Pilha from "./Pilha";

// class FilaComDuasPilhas {
//     constructor() {
//         this.stack1 = new Pilha(100);
//         this.stack2 = new Pilha(100);
//     }

//     enqueue(elemento) {
//         this.stack1.push(elemento);
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             throw new Error("Queue is empty");
//         }
//         if (this.stack2.isEmpty()) {
//             while (!this.stack1.isEmpty()) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }
//         return this.stack2.pop();
//     }

//     front() {
//         if (this.isEmpty()) {
//             throw new Error("Queue is empty");
//         }
//         if (this.stack2.isEmpty()) {
//             while (!this.stack1.isEmpty()) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }
//         return this.stack2.top();
//     }

//     isEmpty() {
//         return this.stack1.isEmpty() && this.stack2.isEmpty();
//     }

//     size() {
//         return this.stack1.length() + this.stack2.length();
//     }
// }

// export default FilaComDuasPilhas;

//_____________________________________________
//LISTA 2: QUESTÃO 3

// class SistemaTransporte {
//     constructor() {
//         this.fila = []; 
//         this.carregamentos = 0; 
//         this.limite = 10;  
//     }
 
//     registrarChegada(caminhoneiro) {
//         if (this.carregamentos >= this.limite) {
//             throw new Error("Número de carregamentos do dia foi atingido. Não são aceitas mais chegadas.");
//         }
//         this.fila.push(caminhoneiro);
//     }
 
//     atender() {
//         if (this.fila.length === 0) {
//             throw new Error("Não há caminhoneiros no aguardo.");
//         }
//         const caminhoneiro = this.fila.shift();
//         this.carregamentos++;
//         return caminhoneiro;
//     }

//     existeAguardando() {
//         return this.fila.length > 0;
//     }

//     carregamentosAtingidos() {
//         return this.carregamentos >= this.limite;
//     }

//     listarAguardando() {
//         return [...this.fila];
//     }
// }

// export default SistemaTransporte;

//_____________________________________________
//LISTA 2: QUESTÃO 4

// function intercalarFilas(fila1, fila2) {
 
//     const resultado = new fila1.constructor();
 
//     while (!fila1.isEmpty() && !fila2.isEmpty()) {
//         resultado.enqueue(fila1.dequeue());
//         resultado.enqueue(fila2.dequeue());
//     }
 
//     while (!fila1.isEmpty()) {
//         resultado.enqueue(fila1.dequeue());
//     }
 
//     while (!fila2.isEmpty()) {
//         resultado.enqueue(fila2.dequeue());
//     }

//     return resultado;
// }

// export default intercalarFilas;

//_____________________________________________
//LISTA 2: QUESTÃO 5

// class Deque {
//     constructor() {
 
//         this.items = [];
//     }
 
//     inserirInicio(elemento) {
//         this.items.unshift(elemento);
//     }
 
//     removerInicio() {
//         if (this.isEmpty()) {
//             throw new Error("Deque is empty");
//         }
//         return this.items.shift();
//     }
 
//     inserirFim(elemento) {
//         this.items.push(elemento);
//     }
 
//     removerFim() {
//         if (this.isEmpty()) {
//             throw new Error("Deque is empty");
//         }
//         return this.items.pop();
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }
// }

// export default Deque;

//_____________________________________________
//LISTA 2: QUESTÃO 6

function reverseQueue(queue) {
    if (queue.isEmpty()) {
        return queue;
    }
    const temp = queue.dequeue();
    reverseQueue(queue);
    queue.enqueue(temp);
    return queue;
}

export default reverseQueue;