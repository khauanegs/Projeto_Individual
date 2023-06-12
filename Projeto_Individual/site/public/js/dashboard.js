function obterVotos() {
    fetch("/grafico/obterVotos", { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(resposta)
                plotarGrafico(resposta)
                plotarGraficoPorcentagem(resposta)
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}
function plotarGrafico(resposta){
  // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: 'Votos',
            data: [],
            borderWidth: 1,
            tension: 0.5,
            inflateAmount: 0.2,
            backgroundColor: [
                '#7F0909FF',
                '#FDB813FF',
                '#0E6BA8FF',
                '#1D3B8A',
                '#6B4F1BFF',
                '#2E2E2EFF',
                '#006400FF',
                '#FFD700FF',
                '#8B4513FF',
                '#4B0082FF'
            ],
            borderColor: [
                '#7F0909FF',
                '#FDB813FF',
                '#0E6BA8FF',
                '#1D3B8A',
                '#6B4F1BFF',
                '#2E2E2EFF',
                '#006400FF',
                '#FFD700FF',
                '#8B4513FF',
                '#4B0082FF'
            ],
        }]
    }
    console.log(resposta);


    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var voto = resposta[i];
        labels.push(voto.nome);
        dados.datasets[0].data.push(voto.qtdVotos);
    }

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'bar',
        data: dados
    };

    console.log(resposta);

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById('telaGrafico'),
        config,
    );
}


function plotarGraficoPorcentagem(resposta){
    // Criando estrutura para plotar gráfico - labels
      let labels = [];
  
      // Criando estrutura para plotar gráfico - dados
      let dados = {
          labels: labels,
          datasets: [{
              label: 'Votos',
              data: [],
              borderWidth: 1,
              tension: 0.5,
              inflateAmount: 0.2,
              backgroundColor: [
                  '#7F0909FF',
                  '#FDB813FF',
                  '#0E6BA8FF',
                  '#1D3B8A',
                  '#6B4F1BFF',
                  '#2E2E2EFF',
                  '#006400FF',
                  '#FFD700FF',
                  '#8B4513FF',
                  '#4B0082FF'
              ],
              borderColor: [
                  '#7F0909FF',
                  '#FDB813FF',
                  '#0E6BA8FF',
                  '#1D3B8A',
                  '#6B4F1BFF',
                  '#2E2E2EFF',
                  '#006400FF',
                  '#FFD700FF',
                  '#8B4513FF',
                  '#4B0082FF'
              ],
          }]
      }
      console.log(resposta);
  
      var totalVotos = 0
      for(i = 0; i < resposta.length; i++){
        var voto = resposta[i];
        totalVotos += voto.qtdVotos
      }
      // Inserindo valores recebidos em estrutura para plotar o gráfico
      for (i = 0; i < resposta.length; i++) {
          var voto = resposta[i];
          var porcentagemPersonagem = voto.qtdVotos/totalVotos * 100
          labels.push(voto.nome);
          dados.datasets[0].data.push(porcentagemPersonagem);
      }
  
      // Criando estrutura para plotar gráfico - config
      const config = {
          type: 'pie',
          data: dados
      };
  
      console.log(resposta);
  
      // Adicionando gráfico criado em div na tela
      let myChart = new Chart(
          document.getElementById('graficoPorcentagem'),
          config,
      );
  }


setTimeout(() => {
    obterVotos()
}, 1000)