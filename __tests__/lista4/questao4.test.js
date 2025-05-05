const verificarVencedores = require('../../src/tarefas/lista4/questao4');

describe('Testando a função de verificação de vencedores', () => {
    test('Deve identificar vencedores da Sena e Quinta', () => {
        const sorteados = [10, 20, 30, 40, 50, 60];
        const apostas = [
            [10, 20, 30, 40, 50, 60],  
            [10, 20, 30, 40, 50],      
            [1, 2, 3, 4, 5, 6],        
            [10, 20, 30, 40, 50],     
            [1, 2, 3, 4, 5, 6, 7]     
        ];

        const resultados = verificarVencedores(sorteados, apostas);

        expect(resultados.sena).toEqual([1]);  
        expect(resultados.quinta).toEqual([2, 4]);  
    });

    test('Nenhum vencedor da Sena ou Quinta', () => {
        const sorteados = [10, 20, 30, 40, 50, 60];
        const apostas = [
            [1, 2, 3, 4, 5, 6],  
            [7, 8, 9, 11, 12, 13]  
        ];

        const resultados = verificarVencedores(sorteados, apostas);

        expect(resultados.sena).toEqual([]);  
        expect(resultados.quinta).toEqual([]); 
    });

    test('Apostador acertando exatamente 5 números', () => {
        const sorteados = [10, 20, 30, 40, 50, 60];
        const apostas = [
            [10, 20, 30, 40, 50],  
        ];

        const resultados = verificarVencedores(sorteados, apostas);

        expect(resultados.quinta).toEqual([1]);  
    });

    test('Apostador acertando exatamente 6 números', () => {
        const sorteados = [10, 20, 30, 40, 50, 60];
        const apostas = [
            [10, 20, 30, 40, 50, 60],  
        ];

        const resultados = verificarVencedores(sorteados, apostas);

        expect(resultados.sena).toEqual([1]);  
    });
});
