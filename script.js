const cardapio = [
    {
      imagem: 'hamburguer tradicional.jpg',
      nome: '01 Hambúrguer Tradicional',
      descricao: 'Pão, carne, alface, tomate e queijo',
      preco: 15.99
    },
    {
      imagem: 'hamburguer vegetariano.webp',
      nome: '02 Hambúrguer Vegetariano',
      descricao: 'Pão, hambúrguer de grão de bico, alface, tomate e queijo vegano',
      preco: 13.99
      
    },
    {
      imagem: 'hamburguer vegano.jpg',
      nome: '03 Hambúrguer Vegano',
      descricao: 'Pão, hambúrguer vegano, tomate, alface, cebola roxa e molho vegano',
      preco: 20.99
    },
    {
      imagem: 'hamburguer cheese frango.jpg',
      nome: '04 Hambúrguer Cheese Frando',
      descricao: 'Pão de brioche, hamburger artesanal de frango 150g, maionese do chef tradicional, queijo muçarela, pepino agridoce, alface e tomate.',
      preco: 18.50
    },
    {
      imagem: 'hamburguer de picanha.jpg',
      nome: '05 Hambúrguer de Picanha',
      descricao: 'Pão, hambúrguer de picanha, alface, tomate e queijo ,cebola ',
      preco: 25.50
    },
    {
      imagem: 'hamburguer de frango.jpg',
      nome: '06 Hambúrguer de Frango',
      descricao: 'Pão, hambúrguer de frango, alface, tomate, queijo e maionese',
      preco: 16.80
    },
    {
      imagem: 'hamburguer especial.jpg',
      nome: '07 Hambúrguer Especial',
      descricao: 'Pão, carne, bacon, cebola caramelizada, queijo cheddar e molho especial',
      preco: 17.60
    },
    {
      imagem: 'hamburguer de cordeiro.jpg',
      nome: '08 Hambúrguer de Cordeiro',
      descricao: 'Pão, hambúrguer de cordeiro, rúcula, tomate seco e molho de iogurte',
      preco: 19.70
    },
    {
      imagem: 'hambuguer de peixe .jpg',
      nome: '09 Hambúrguer de Peixe',
      descricao: 'Pão, hambúrguer de peixe, alface, tomate e maionese de limão',
      preco: 28.40
    },
    
  ];
  
  const cardapioContainer = document.getElementById('cardapio');
  
  cardapio.forEach(item => {
    const itemCardapio = document.createElement('div');
    itemCardapio.classList.add('item-cardapio');
  
    const imagem = document.createElement('img');
    imagem.src = item.imagem;
    itemCardapio.appendChild(imagem);
  
    const nome = document.createElement('h2');
    nome.textContent = item.nome;
    itemCardapio.appendChild(nome);
  
    const descricao = document.createElement('p');
    descricao.textContent = item.descricao;
    itemCardapio.appendChild(descricao);
  
    const preco = document.createElement('span');
    preco.textContent = `R$ ${item.preco.toFixed(2)}`;
    itemCardapio.appendChild(preco);
  
    cardapioContainer.appendChild(itemCardapio);
  });
  