function verificarVencedores(sorteados, apostas) {
    const vencedoresSena = [];
    const vencedoresQuinta = [];

    apostas.forEach((aposta, index) => {
        let acertos = 0;
        aposta.forEach(numero => {
            if (sorteados.includes(numero)) {
                acertos++;
            }
        });

        if (acertos === 6) {
            vencedoresSena.push(index + 1);
        } else if (acertos === 5) {
            vencedoresQuinta.push(index + 1);
        }
    });

    return {
        sena: vencedoresSena,
        quinta: vencedoresQuinta
    };
}

module.exports = verificarVencedores;
