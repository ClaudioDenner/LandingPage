var data = [
    
    {
    id:'1',
    genero:'masculino',
    faixaEtaria:'adulto',
    tipoProduto:'sandalia', 
    nomeProduto: 'Tênis Nike',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    valor: 129.90,
    quantParcelasSemJuros: 2,
    urlImg: "img/products/assets/60.jfif",
    tamanhos: '36 ao 40',
    urlWhatsapp: 'https://wa.me/5571981720488?text=Olá!%20fiquei%20interessado(a)%20neste%20item:%20',
    filtroClassificacao: 'all/masculino/outros/sandalia'
    

    },
    {
      id:'2',
      genero:'feminino',
      faixaEtaria:'infantil',
      tipoProduto:'sandalia', 
      nomeProduto: 'Tênis Nike',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      valor: 129.90,
      quantParcelasSemJuros: 2,
      urlImg: "img/products/assets/50.jfif",
      tamanhos: '36 ao 40',
      urlWhatsapp: 'https://wa.me/5571981720488?text=Olá!%20fiquei%20interessado(a)%20neste%20item:%20',
      filtroClassificacao: 'all/feminino/infantil/sandalia'
      
  
      },
      {
        id:'3',
        genero:'feminino',
        faixaEtaria:'adulto',
        tipoProduto:'sandalia', 
        nomeProduto: 'Tênis Nike',
        descricao: 'aqui tambem',
        valor: 129.90,
        quantParcelasSemJuros: 2,
        urlImg: "img/products/assets/40.jfif",
        tamanhos: '36 ao 40',
        urlWhatsapp: 'https://wa.me/5571981720488?text=Olá!%20fiquei%20interessado(a)%20neste%20item:%20',
        filtroClassificacao: 'all/feminino/adulto/sandalia'
    
        },
        {
          id:'4',
          genero:'feminino',
          faixaEtaria:'infantil',
          tipoProduto:'sandalia', 
          nomeProduto: 'Tênis Nike',
          descricao: 'deu certo',
          valor: 229.90,
          quantParcelasSemJuros: 2,
          urlImg: "img/products/assets/30.jfif",
          tamanhos: '36 ao 40',
          urlWhatsapp: 'https://wa.me/5571981720488?text=Olá!%20fiquei%20interessado(a)%20neste%20item:%20',
          filtroClassificacao: 'all/masculino/infantil/sandalia'
          
      
          },

]

   




   










const { createApp } = Vue

createApp({
  data() {
    return {
      data: window.data,
      awesome: true,
      teste: true,
      

    
    }

  },

  computed: {
    resultFilters() {
      

      return this.data.filter(results => {if(results.faixaEtaria=='a'){return results}})
    }

  }
}).mount('#app')