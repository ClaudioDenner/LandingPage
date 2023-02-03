var data = [
    
    {
    id:'1',
    genero:'feminino',
    faixaEtaria:'infantil',
    tipoProduto:'sandalia', 
    nomeProduto: 'Tênis Nike',
    descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    valor: 129.90,
    quantParcelasSemJuros: 2,
    urlImg: "img/products/assets/1.jfif",
    tamanhos: '36 ao 40',
    urlWhatsapp: 'https://wa.me/5571981720488?text=Olá!%20fiquei%20interessado(a)%20neste%20item:%20',
    

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
      urlImg: "img/products/assets/1.jfif",
      tamanhos: '36 ao 40',
      urlWhatsapp: 'https://wa.me/5571981720488?text=Olá!%20fiquei%20interessado(a)%20neste%20item:%20',
      
  
      },
      {
        id:'3',
        genero:'feminino',
        faixaEtaria:'infantil',
        tipoProduto:'sandalia', 
        nomeProduto: 'Tênis Nike',
        descricao: 'aqui tambem',
        valor: 129.90,
        quantParcelasSemJuros: 2,
        urlImg: "img/products/assets/1.jfif",
        tamanhos: '36 ao 40',
        urlWhatsapp: 'https://wa.me/5571981720488?text=Olá!%20fiquei%20interessado(a)%20neste%20item:%20',
        
    
        },
        {
          id:'4',
          genero:'feminino',
          faixaEtaria:'infantil',
          tipoProduto:'sandalia', 
          nomeProduto: 'Tênis Nike',
          descricao: 'deu certo',
          valor: 129.90,
          quantParcelasSemJuros: 2,
          urlImg: "img/products/assets/1.jfif",
          tamanhos: '36 ao 40',
          urlWhatsapp: 'https://wa.me/5571981720488?text=Olá!%20fiquei%20interessado(a)%20neste%20item:%20',
          
      
          },

]

   




   










const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      data: window.data,
      numbers: [1, 2, 3, 4, 5,6,7,8],

    
    }

  },

  computed: {
    evenNumbers() {
      return this.data.filter(n => {if(n.genero=='feminino'){console.log(n.descricao)}})
    }
  }
}).mount('#app')