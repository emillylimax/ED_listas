const MinHeap = require('../../src/tarefas/lista4/questão1');

test('insere e extrai corretamente', () => {
  const heap = new MinHeap();

  heap.insert(5);
  heap.insert(2);
  heap.insert(8);
  heap.insert(1);

  expect(heap.peek()).toBe(1);
  expect(heap.extractMin()).toBe(1);
  expect(heap.extractMin()).toBe(2);
  expect(heap.size()).toBe(2);
});
