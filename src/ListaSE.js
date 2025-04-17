// // Lista 3: Questão 1

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class PilhaEncadeada {
//     constructor() {
//         this.top = null;   
//         this.count = 0;    
//     }

//     push(elemento) {
//         const novoNo = new Node(elemento);
//         novoNo.next = this.top;
//         this.top = novoNo;
//         this.count++;
//     }

//     pop() {
//         if (this.isEmpty()) {
//             throw new Error("Pilha vazia");
//         }
//         const removido = this.top.value;
//         this.top = this.top.next;
//         this.count--;
//         return removido;
//     }

//     isEmpty() {
//         return this.top === null;
//     }

//     size() {
//         return this.count;
//     }
// }

// export default PilhaEncadeada;

// //Lista 3: Questão 2
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class FilaEncadeada {
//     constructor() {
//         this.front = null;
//         this.rear = null;   
//         this.count = 0;   
//     }

//     enqueue(elemento) {
//         const novoNo = new Node(elemento);
//         if (this.isEmpty()) {
//             this.front = novoNo;
//             this.rear = novoNo;
//         } else {
//             this.rear.next = novoNo;
//             this.rear = novoNo;
//         }
//         this.count++;
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             throw new Error("Fila vazia");
//         }
//         const removido = this.front.value;
//         this.front = this.front.next;
//         this.count--;
//         if (this.front === null) { 
//             this.rear = null;
//         }
//         return removido;
//     }

//     isEmpty() {
//         return this.front === null;
//     }

//     size() {
//         return this.count;
//     }
// }

// export default FilaEncadeada;

// //Lista 3: Questão 3

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null; 
//     }
// }

// class ListaSimples {
//     constructor() {
//         this.nodes = []; 
//     }

//     add(value) {
//         const node = new Node(value);
//         this.nodes.push(node);
//         return node;
//     }

//     remove(index) {
//         if (index < 0 || index >= this.nodes.length) {
//             throw new Error("Index out of bounds");
//         }
//         return this.nodes.splice(index, 1)[0];
//     }

//     size() {
//         return this.nodes.length;
//     }

//     find(value) {
//         return this.nodes.find(node => node.value === value) || null;
//     }

//     toArray() {
//         return this.nodes.map(node => node.value);
//     }
// }

// export default ListaSimples;


// //Lista 3: Questão 4

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null; 
//     }
// }

// class ListaSimples {
//     constructor() {
//         this.nodes = []; 
//     }

//     add(value) {
//         const node = new Node(value);
//         this.nodes.push(node);
//         return node;
//     }

//     remove(index) {
//         if (index < 0 || index >= this.nodes.length) {
//             throw new Error("Index out of bounds");
//         }
//         return this.nodes.splice(index, 1)[0];
//     }

//     size() {
//         return this.nodes.length;
//     }

//     find(value) {
//         return this.nodes.find(node => node.value === value) || null;
//     }

//     toArray() {
//         return this.nodes.map(node => node.value);
//     }
// }

// function inverterLista(lista) {
//     const novaLista = new ListaSimples();
//     if (!lista.nodes) {
//         throw new Error("A lista não possui a propriedade 'nodes'");
//     }
//     for (let i = lista.nodes.length - 1; i >= 0; i--) {
//         novaLista.add(lista.nodes[i].value);
//     }
//     return novaLista;
// }

// export { ListaSimples, inverterLista };

// //Lista 3: Questão 5

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null; 
//     }
// }

// class ListaSimples {
//     constructor() {
//         this.nodes = []; 
//     }

//     add(value) {
//         const node = new Node(value);
//         this.nodes.push(node);
//         return node;
//     }

//     remove(index) {
//         if (index < 0 || index >= this.nodes.length) {
//             throw new Error("Index out of bounds");
//         }
//         return this.nodes.splice(index, 1)[0];
//     }

//     size() {
//         return this.nodes.length;
//     }

//     find(value) {
//         return this.nodes.find(node => node.value === value) || null;
//     }

//     toArray() {
//         return this.nodes.map(node => node.value);
//     }
// }


// function embaralharLista(lista) {
//     const values = lista.toArray();
    
//     for (let i = values.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [values[i], values[j]] = [values[j], values[i]];
//     }
    
//     const novaLista = new ListaSimples();
//     values.forEach(value => novaLista.add(value));
    
//     return novaLista;
// }

// export { ListaSimples, embaralharLista };

// //Lista 3: Questão 6
// class Node {
//     constructor(char) {
//         this.value = char;
//         this.next = null;
//     }
// }

// class StringLista {
//     constructor(str = "") {
//         this.head = null;
//         this.size = 0;
//         for (let char of str) {
//             this.add(char);
//         }
//     }
   
//     add(char) {
//         const node = new Node(char);
//         if (this.head === null) {
//             this.head = node;
//         } else {
//             let cur = this.head;
//             while (cur.next !== null) {
//                 cur = cur.next;
//             }
//             cur.next = node;
//         }
//         this.size++;
//     }
    
//     substring(A, B) {
//         if (A < 0 || B >= this.size || A > B) {
//             throw new Error("Índices inválidos");
//         }
//         const novaLista = new StringLista();
//         let cur = this.head;
//         let index = 0;
//         while (cur !== null) {
//             if (index >= A && index <= B) {
//                 novaLista.add(cur.value);
//             }
//             index++;
//             cur = cur.next;
//         }
//         return novaLista;
//     }
    
//     toString() {
//         let result = "";
//         let cur = this.head;
//         while (cur !== null) {
//             result += cur.value;
//             cur = cur.next;
//         }
//         return result;
//     }
    
//     toArray() {
//         let arr = [];
//         let cur = this.head;
//         while (cur !== null) {
//             arr.push(cur.value);
//             cur = cur.next;
//         }
//         return arr;
//     }
// }

// export {StringLista};

// //Lista 3: Questão 7
// //número total de soldados (n) e o número fixo para remoção (d)
// function josephus(n, d) {
//     const soldiers = [];
//     for (let i = 1; i <= n; i++) {
//         soldiers.push(i);
//     }
    
//     const eliminationOrder = []; 
//     let index = 0;

   
//     while (soldiers.length > 1) {
//         index = (index + d - 1) % soldiers.length;
//         const removed = soldiers.splice(index, 1)[0];
//         eliminationOrder.push(removed);
//     }

//     const survivor = soldiers[0];
    
//     return { eliminationOrder, survivor };
// }

// export {josephus};

//Lista 3: Questão 8
class Node {
    constructor(person) {
        this.person = person; 
        this.next = null;
    }
}

class PessoaList {
    constructor() {
        this.head = null;
    }

    add(data, second) {
        let name, age;
        if (second === undefined) {

            name = data.name;
            age = data.age;
        } else {
            if (typeof data === "string" && typeof second === "number") {
                name = data;
                age = second;
            } else if (typeof data === "number" && typeof second === "string") {
                age = data;
                name = second;
            } else {
                throw new Error("Dados inválidos");
            }
        }
        const person = { name, age };
        const node = new Node(person);

        if (this.head === null) {
            this.head = node;
        } else {
            let cur = this.head;
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = node;
        }
    }

    toArray() {
        const arr = [];
        let cur = this.head;
        while (cur !== null) {
            arr.push(cur.person);
            cur = cur.next;
        }
        return arr;
    }

    alphabeticalList() {
        const arr = this.toArray();
        arr.sort((a, b) => a.name.localeCompare(b.name));
        const newList = new PessoaList();
        arr.forEach(person => newList.add(person));
        return newList;
    }

    ageOrderedList() {
        const arr = this.toArray();
        arr.sort((a, b) => a.age - b.age);
        const newList = new PessoaList();
        arr.forEach(person => newList.add(person));
        return newList;
    }
}

export { PessoaList };