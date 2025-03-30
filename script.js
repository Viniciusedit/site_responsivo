document.addEventListener("DOMContentLoaded", function () {
  // Dados dos produtos
  const produtos = [
    {
      id: 1,
      nome: "Aromatizador de Ambiente Bambu",
      preco: 45.0,
      imagem: "img/Bambu.png",
      descricao: "Aromatizador de ambiente com fragrância de bambu",
      categoria: "aromatizadores de ambiente",
    },
    {
      id: 2,
      nome: "Aromatizador de Ambiente de Encantos da Terra",
      preco: 45.0,
      imagem: "img/Encantos_da_terra.png",
      descricao: "Aromatizador de ambiente com fragrância de Encantos da Terra",
      categoria: "aromatizadores de ambiente",
    },
    {
      id: 3,
      nome: "Aromatizador de Ambiente de Alecrim",
      preco: 45.0,
      imagem: "img/Alecrim.jpeg",
      descricao: "Aromatizador de ambiente com fragrância de Alecrim",
      categoria: "aromatizadores de ambiente",
    },
    {
      id: 4,
      nome: "Aromatizador de Ambiente de Verbera",
      preco: 45.0,
      imagem: "img/Verbera.jpeg",
      descricao: "Aromatizador de ambiente com fragrância de Verbera",
      categoria: "aromatizadores de ambiente",
    },
    {
      id: 5,
      nome: "Aromatizador em Spray de Alecrim",
      preco: 35.0,
      imagem: "img/Alecrim.jpeg",
      descricao: "Aromatizador em spray com fragrância de Alecrim",
      categoria: "aromatizadores em spray",
    },
    {
      id: 6,
      nome: "Aromatizador em Spray de Bambu",
      preco: 35.0,
      imagem: "img/Bambu.jpeg",
      descricao: "Aromatizador em spray com fragrância de Bambu",
      categoria: "aromatizadores em spray",
    },
    {
      id: 7,
      nome: "Aromatizador em Spray de Cascas e Folhas",
      preco: 35.0,
      imagem: "img/Cascas_e_folhas.jpeg",
      descricao: "Aromatizador em spray com fragrância de Cascas e Folhas",
      categoria: "aromatizadores em spray",
    },
    {
      id: 8,
      nome: "Aromatizador em Spray de Cereja e Avelã",
      preco: 35.0,
      imagem: "img/Cereja_e_avelã.jpeg",
      descricao: "Aromatizador em spray com fragrância de Cereja e Avelã",
      categoria: "aromatizadores em spray",
    },
    {
      id: 9,
      nome: "Body Splash de Cereja e Avelã",
      preco: 35.0,
      imagem: "img/Cereja_e_avela.jpeg",
      descricao: "Body splash com fragrância de Cereja e Avelã",
      categoria: "body splashes",
    },
    {
      id: 10,
      nome: "Body Splash de Flor de Cerejeira",
      preco: 35.0,
      imagem: "img/Flor_de_cerejeira.jpeg",
      descricao: "Body splash com fragrância de Cereja e Avelã",
      categoria: "body splashes",
    },
    {
      id: 11,
      nome: "Body Splash de Maracujá",
      preco: 35.0,
      imagem: "img/Maracuja.jpeg",
      descricao: "Body splash com fragrância de Maracujá",
      categoria: "body splashes",
    },
    {
      id: 12,
      nome: "Body Splash de Melancia",
      preco: 35.0,
      imagem: "img/Melancia.jpeg",
      descricao: "Body splash com fragrância de Melancia",
      categoria: "body splashes",
    },
    {
      id: 13,
      nome: "Creme Hidratante Corporal de Cereja e Avelã",
      preco: 40.0,
      imagem: "img/Avelã_e_cereja_150ml.jpeg",
      descricao: "Creme hidratante para o corpo de Cereja e Avelã",
      categoria: "cremes",
    },
    {
      id: 14,
      nome: "Creme Hidratante Corporal de Cereja e Avelã",
      preco: 18.0,
      imagem: "img/Avelã_e_cereja_60ml.jpeg",
      descricao: "Creme hidratante para o corpo de Cereja e Avelã",
      categoria: "cremes",
    },
    {
      id: 15,
      nome: "Creme Hidratante Corporal de Flor de Cerejeira",
      preco: 40.0,
      imagem: "img/Flor_de_cerejeira_150ml.jpeg",
      descricao: "Creme hidratante para o corpo de Flor de Cerejeira",
      categoria: "cremes",
    },
    {
      id: 16,
      nome: "Creme Hidratante Corporal de Flor de Cerejeira",
      preco: 18.0,
      imagem: "img/Flor_de_cerejeira_60ml.jpeg",
      descricao: "Creme hidratante para o corpo de Flor de Cerejeira",
      categoria: "cremes",
    },
    {
      id: 17,
      nome: "Creme Hidratante Corporal de Melancia",
      preco: 18.0,
      imagem: "img/Melancia_60ml.jpeg",
      descricao: "Creme hidratante para o corpo de Melancia",
      categoria: "cremes",
    },
    {
      id: 18,
      nome: "Creme Hidratante Corporal de Melancia",
      preco: 18.0,
      imagem: "img/Melancia_150ml.jpeg",
      descricao: "Creme hidratante para o corpo de Melancia",
      categoria: "cremes",
    },
    {
      id: 19,
      nome: "Sabonete Líquido de Chocolate",
      preco: 25.0,
      imagem: "img/Chocolate.jpeg",
      descricao: "Sabonete líquido suave para peles sensíveis",
      categoria: "sabonetes",
    },
    {
      id: 20,
      nome: "Sabonete Líquido de Limão",
      preco: 25.0,
      imagem: "img/Limao.jpeg",
      descricao: "Sabonete líquido suave para peles sensíveis",
      categoria: "sabonetes",
    },
    {
      id: 21,
      nome: "Sabonete Líquido de Morango",
      preco: 25.0,
      imagem: "img/Morango.jpeg",
      descricao: "Sabonete líquido suave para peles sensíveis",
      categoria: "sabonetes",
    },
    {
      id: 22,
      nome: "Sabonete de Açafrão e Mel",
      preco: 18.0,
      imagem: "img/Acafrao_mel-18,00.jpeg",
      descricao: "Sabonete natural com açafrão e mel",
      categoria: "sabonetes",
    },
    {
      id: 23,
      nome: "Sabonete de Argila Verde",
      preco: 15.0,
      imagem: "img/Argila_verde-15,00.jpeg",
      descricao: "Sabonete com argila verde para pele oleosa",
      categoria: "sabonetes",
    },
    {
      id: 24,
      nome: "Sabonete de Arruda, Alecrim e Sal Grosso",
      preco: 15.0,
      imagem: "img/Arruda_alecrim_sal_grosso.jpeg",
      descricao: "Sabonete com arruda, alecrim e sal grosso",
      categoria: "sabonetes",
    },
    {
      id: 25,
      nome: "Sabonete de Babosa e Mel",
      preco: 18.0,
      imagem: "img/Babosa_mel-18,00.jpeg",
      descricao: "Sabonete hidratante com babosa e mel",
      categoria: "sabonetes",
    },
    {
      id: 26,
      nome: "Sabonete de Bergamota",
      preco: 18.0,
      imagem: "img/Bergamota.jpeg",
      descricao: "Sabonete com fragrância de bergamota",
      categoria: "sabonetes",
    },
    {
      id: 27,
      nome: "Sabonete de Carvão Ativado",
      preco: 15.0,
      imagem: "img/Carvao_ativado-15,00.jpeg",
      descricao: "Sabonete detox com carvão ativado",
      categoria: "sabonetes",
    },
    {
      id: 28,
      nome: "Sabonete de Cereja e Avelã",
      preco: 18.0,
      imagem: "img/Cereja_Avela-18,00.jpeg",
      descricao: "Sabonete com fragrância de cereja e avelã",
      categoria: "sabonetes",
    },
    {
      id: 29,
      nome: "Sabonete de Cereja e Avelã 02",
      preco: 18.0,
      imagem: "img/Cereja_Avela02-18,00.jpeg",
      descricao: "Sabonete com fragrância de cereja e avelã - versão 2",
      categoria: "sabonetes",
    },
    {
      id: 30,
      nome: "Sabonete de Cravo e Canela",
      preco: 18.0,
      imagem: "img/Cravo_canela.jpeg",
      descricao: "Sabonete com fragrância de cravo e canela",
      categoria: "sabonetes",
    },
    {
      id: 31,
      nome: "Sabonete de Dolomita",
      preco: 15.0,
      imagem: "img/Dolomita_15,00.jpeg",
      descricao: "Sabonete mineral com dolomita",
      categoria: "sabonetes",
    },
    {
      id: 32,
      nome: "Sabonete de Flor de Laranjeira",
      preco: 18.0,
      imagem: "img/Flor_de_laranjeira-18,00.jpeg",
      descricao: "Sabonete com fragrância de flor de laranjeira",
      categoria: "sabonetes",
    },
    {
      id: 33,
      nome: "Sabonete de Flor de Laranjeira 02",
      preco: 18.0,
      imagem: "img/Flor_de_laranjeira02-18,00.jpeg",
      descricao: "Sabonete com fragrância de flor de laranjeira - versão 2",
      categoria: "sabonetes",
    },
    {
      id: 34,
      nome: "Sabonete de Maracujá",
      preco: 18.0,
      imagem: "img/Maracuja-18,00.jpeg",
      descricao: "Sabonete calmante com maracujá",
      categoria: "sabonetes",
    },
    {
      id: 35,
      nome: "Sabonete Olho Grego",
      preco: 18.0,
      imagem: "img/Olho_Grego-18,00.jpeg",
      descricao: "Sabonete com propriedades de proteção",
      categoria: "sabonetes",
    },
    {
      id: 36,
      nome: "Aromatizador de Carro Fresh de Alecrim",
      preco: 15.0,
      imagem: "img/Alecrim.jpeg",
      descricao: "Aromatizador para carro com fragrância fresh de alecrim",
      categoria: "aromatizadores de carro",
    },
    {
      id: 37,
      nome: "Aromatizador de Carro Fresh de Lavanda",
      preco: 15.0,
      imagem: "img/lavanda.jpeg",
      descricao: "Aromatizador para carro com fragrância fresh de lavanda",
      categoria: "aromatizadores de carro",
    },
  ];

  // Elementos DOM
  const produtosContainer = document.querySelector(".produtos");
  const carrinhoSidebar = document.getElementById("carrinho-sidebar");
  const overlay = document.getElementById("overlay");
  const abrirCarrinhoBtn = document.getElementById("abrir-carrinho");
  const fecharCarrinhoBtn = document.getElementById("fechar-carrinho");
  const carrinhoItensContainer = document.getElementById("carrinho-itens");
  const contadorCarrinho = document.getElementById("contador-carrinho");
  const carrinhoTotal = document.getElementById("carrinho-total");
  const enviarWhatsappBtn = document.getElementById("enviar-whatsapp");
  const filtroBtns = document.querySelectorAll(".filtro-btn");
  const barraPesquisa = document.getElementById("barra-pesquisa");
  const suggestions = document.getElementById("suggestions");
  const suggestionItems = document.querySelectorAll(".suggestion-item");

  // Carrinho
  let carrinho = [];

  // Carregar produtos
  function carregarProdutos(categoria = "todos", termoBusca = "") {
    produtosContainer.innerHTML = "";

    let produtosFiltrados = produtos;

    if (categoria !== "todos") {
      produtosFiltrados = produtosFiltrados.filter((produto) => {
        if (categoria === "aromatizadores") {
          return produto.categoria.includes("aromatizador");
        }
        if (categoria === "cosmeticos") {
          return ["body splashes", "cremes", "sabonetes"].includes(
            produto.categoria
          );
        }
        if (categoria === "automotivo") {
          return produto.categoria === "aromatizadores de carro";
        }
        return produto.categoria === categoria;
      });
    }

    if (termoBusca) {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) =>
          produto.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
          produto.categoria.toLowerCase().includes(termoBusca.toLowerCase())
      );
    }

    if (produtosFiltrados.length === 0) {
      produtosContainer.innerHTML =
        '<p class="sem-resultados">Nenhum produto encontrado</p>';
      return;
    }

    produtosFiltrados.forEach((produto) => {
      const produtoHTML = `
                    <div class="produto" data-id="${
                      produto.id
                    }" data-categoria="${produto.categoria}">
                        <img src="${produto.imagem}" alt="${produto.nome}">
                        <div class="produto-info">
                            <h3>${produto.nome}</h3>
                            <p class="produto-preco">R$ ${produto.preco.toFixed(
                              2
                            )}</p>
                            <button class="adicionar-carrinho" data-id="${
                              produto.id
                            }">Adicionar ao Carrinho</button>
                        </div>
                    </div>
                `;
      produtosContainer.innerHTML += produtoHTML;
    });
  }

  // Adicionar produto ao carrinho
  function adicionarAoCarrinho(id) {
    const produto = produtos.find((p) => p.id === id);

    if (produto) {
      const itemExistente = carrinho.find((item) => item.id === id);

      if (itemExistente) {
        itemExistente.quantidade++;
      } else {
        carrinho.push({
          ...produto,
          quantidade: 1,
        });
      }

      atualizarCarrinho();
      mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
    }
  }

  // Mostrar notificação
  function mostrarNotificacao(mensagem) {
    const notificacao = document.createElement("div");
    notificacao.className = "notificacao";
    notificacao.textContent = mensagem;
    document.body.appendChild(notificacao);

    setTimeout(() => {
      notificacao.classList.add("mostrar");
    }, 10);

    setTimeout(() => {
      notificacao.classList.remove("mostrar");
      setTimeout(() => {
        document.body.removeChild(notificacao);
      }, 300);
    }, 3000);
  }

  // Remover produto do carrinho
  function removerDoCarrinho(id) {
    const itemIndex = carrinho.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      if (carrinho[itemIndex].quantidade > 1) {
        carrinho[itemIndex].quantidade--;
      } else {
        carrinho.splice(itemIndex, 1);
      }

      atualizarCarrinho();
    }
  }

  // Atualizar carrinho
  function atualizarCarrinho() {
    carrinhoItensContainer.innerHTML = "";

    let total = 0;

    carrinho.forEach((item) => {
      const itemTotal = item.preco * item.quantidade;
      total += itemTotal;

      const itemHTML = `
                    <div class="carrinho-item">
                        <img src="${item.imagem}" alt="${item.nome}">
                        <div class="carrinho-item-info">
                            <h4>${item.nome}</h4>
                            <p>R$ ${item.preco.toFixed(2)}</p>
                        </div>
                        <div class="carrinho-item-quantidade">
                            <button class="diminuir" data-id="${
                              item.id
                            }">-</button>
                            <span>${item.quantidade}</span>
                            <button class="aumentar" data-id="${
                              item.id
                            }">+</button>
                        </div>
                    </div>
                `;
      carrinhoItensContainer.innerHTML += itemHTML;
    });

    carrinhoTotal.textContent = `R$ ${total.toFixed(2)}`;
    contadorCarrinho.textContent = carrinho.reduce(
      (sum, item) => sum + item.quantidade,
      0
    );

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }

  // Enviar pedido por WhatsApp
  function enviarPedidoWhatsApp() {
    if (carrinho.length === 0) {
      mostrarNotificacao("Seu carrinho está vazio!");
      return;
    }

    const numeroWhatsApp = "555499370787"; // Substitua pelo seu número
    const formaPagamento = document.querySelector(
      'input[name="pagamento"]:checked'
    ).value;

    let mensagem = "Olá, gostaria de fazer um pedido:\n\n";

    mensagem += "📋 *Itens do Pedido:*\n";
    carrinho.forEach((item) => {
      mensagem += `✔ ${item.nome} - ${item.quantidade}x - R$ ${(
        item.preco * item.quantidade
      ).toFixed(2)}\n`;
    });

    const total = carrinho.reduce(
      (sum, item) => sum + item.preco * item.quantidade,
      0
    );
    mensagem += `\n💰 *Total: R$ ${total.toFixed(2)}*`;
    mensagem += `\n\n💳 *Forma de Pagamento:* ${formaPagamento}`;

    if (formaPagamento === "Dinheiro") {
      mensagem += "\n\nPor favor, informe o troco necessário.";
    }

    mensagem += "\n\nPor favor, confirme meu pedido. Obrigada!";

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(url, "_blank");
  }

  // Carregar carrinho salvo
  function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    if (carrinhoSalvo) {
      carrinho = JSON.parse(carrinhoSalvo);
      atualizarCarrinho();
    }
  }

  // Barra de pesquisa
  function configurarBarraPesquisa() {
    // Mostrar sugestões ao clicar na barra
    barraPesquisa.addEventListener("focus", () => {
      suggestions.style.display = "block";
    });

    // Esconder sugestões ao clicar fora
    document.addEventListener("click", (e) => {
      if (e.target !== barraPesquisa && e.target !== suggestions) {
        suggestions.style.display = "none";
      }
    });

    // Preencher barra ao clicar em sugestão
    suggestionItems.forEach((item) => {
      item.addEventListener("click", () => {
        barraPesquisa.value = item.textContent;
        suggestions.style.display = "none";
        const categoriaAtiva = document
          .querySelector(".filtro-btn.active")
          .getAttribute("data-categoria");
        carregarProdutos(categoriaAtiva, item.textContent);
      });
    });

    // Pesquisar ao digitar
    barraPesquisa.addEventListener("input", (e) => {
      const termo = e.target.value;
      if (termo.length > 2) {
        const categoriaAtiva = document
          .querySelector(".filtro-btn.active")
          .getAttribute("data-categoria");
        carregarProdutos(categoriaAtiva, termo);
      } else if (termo.length === 0) {
        const categoriaAtiva = document
          .querySelector(".filtro-btn.active")
          .getAttribute("data-categoria");
        carregarProdutos(categoriaAtiva);
      }
    });

    // Pesquisar ao pressionar Enter
    barraPesquisa.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const termo = barraPesquisa.value;
        const categoriaAtiva = document
          .querySelector(".filtro-btn.active")
          .getAttribute("data-categoria");
        carregarProdutos(categoriaAtiva, termo);
      }
    });

    // Pesquisar ao clicar no botão de pesquisa
    document.querySelector(".search-btn").addEventListener("click", () => {
      const termo = barraPesquisa.value;
      const categoriaAtiva = document
        .querySelector(".filtro-btn.active")
        .getAttribute("data-categoria");
      carregarProdutos(categoriaAtiva, termo);
    });
  }

  // Event Listeners
  abrirCarrinhoBtn.addEventListener("click", () => {
    carrinhoSidebar.classList.add("aberto");
    overlay.classList.add("mostrar");
  });

  fecharCarrinhoBtn.addEventListener("click", () => {
    carrinhoSidebar.classList.remove("aberto");
    overlay.classList.remove("mostrar");
  });

  overlay.addEventListener("click", () => {
    carrinhoSidebar.classList.remove("aberto");
    overlay.classList.remove("mostrar");
  });

  filtroBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filtroBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const categoria = btn.getAttribute("data-categoria");
      carregarProdutos(categoria);
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("adicionar-carrinho")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      adicionarAoCarrinho(id);
    }

    if (e.target.classList.contains("aumentar")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      adicionarAoCarrinho(id);
    }

    if (e.target.classList.contains("diminuir")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      removerDoCarrinho(id);
    }
  });

  enviarWhatsappBtn.addEventListener("click", enviarPedidoWhatsApp);

  // Inicialização
  carregarProdutos();
  carregarCarrinho();
  configurarBarraPesquisa();
});
