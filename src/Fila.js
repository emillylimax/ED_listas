class Fila {
    constructor(size = 5) {
        this.dados = [];
        this.size = size;
        this.inicio = 0;
        this.fim = 0;
    }

    enqueue(elemento) {
        if (this.isFull()) throw new Error("Queue overflow");
        this.dados[this.fim] = elemento;
        if (this.fim === this.size) {
            this.fim = 0;
        } else {
            this.fim++;
        }
    }
    dequeue() {
        if (this.isEmpty()) throw new Error("Queue underflow");
        if (this.inicio === this.size) {
            this.inicio = 0;
        } else {
            this.inicio++;
        }
    }
    front() {
        if (!this.isEmpty()) return this.dados[this.inicio];
    }
    length() {
        if (this.isEmpty()) return 0;
        if (this.inicio < this.fim) return this.fim - this.inicio;
        return ((this.size + 1 - this.inicio) + (this.fim - 0));
    }
    isEmpty() {
        return this.inicio === this.fim;
    }
    isFull() {
        return this.length() === this.size;
    }
    toString() { }
    clear() {
        this.inicio = 0;
        this.fim = 0;
    }
}

export default Fila;

// //Lista 2: Questão 1
// // Classe Fila (implementação circular)
// class Fila {
//     constructor(size = 100) {
//         this.size = size;
//         this.dados = new Array(size);
//         this.inicio = 0;
//         this.fim = 0;
//     }

//     enqueue(elemento) {
//         if (this.isFull()) throw new Error("Queue overflow");
//         this.dados[this.fim] = elemento;
//         this.fim = (this.fim + 1) % this.size;
//     }

//     dequeue() {
//         if (this.isEmpty()) throw new Error("Queue underflow");
//         const elemento = this.dados[this.inicio];
//         this.inicio = (this.inicio + 1) % this.size;
//         return elemento;
//     }

//     front() {
//         if (!this.isEmpty()) return this.dados[this.inicio];
//     }

//     length() {
//         if (this.fim >= this.inicio) {
//             return this.fim - this.inicio;
//         } else {
//             return this.size - this.inicio + this.fim;
//         }
//     }

//     isEmpty() {
//         return this.inicio === this.fim;
//     }

//     isFull() {
//         return this.length() === this.size - 1;
//     }

//     clear() {
//         this.inicio = 0;
//         this.fim = 0;
//     }
// }
// export default Fila;

// // Classe PilhaComDuasFilas implementada usando duas filas
// export class PilhaComDuasFilas {
//     constructor() {
//         this.queue1 = new Fila();
//         this.queue2 = new Fila();
//     }

//     push(x) {
//         // Enfileira o elemento na queue2
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
//         return this.queue1.length();
//     }
// }