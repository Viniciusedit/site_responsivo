document.addEventListener("DOMContentLoaded", function () {
  // Dados dos produtos
  const produtos = [
    {
      id: 1,
      nome: "Vestido Floral",
      preco: 129.99,
      imagem: "https://via.placeholder.com/300/844a4f/ffffff?text=Vestido",
      descricao: "Vestido floral elegante",
      categoria: "roupas",
    },
    {
      id: 2,
      nome: "Sapato Social",
      preco: 199.99,
      imagem: "https://via.placeholder.com/300/844a4f/ffffff?text=Sapato",
      descricao: "Sapato social confortável",
      categoria: "calcados",
    },
    {
      id: 3,
      nome: "Bolsa de Couro",
      preco: 159.99,
      imagem: "https://via.placeholder.com/300/844a4f/ffffff?text=Bolsa",
      descricao: "Bolsa de couro legítimo",
      categoria: "acessorios",
    },
    {
      id: 4,
      nome: "Blusa de Seda",
      preco: 79.99,
      imagem: "https://via.placeholder.com/300/844a4f/ffffff?text=Blusa",
      descricao: "Blusa de seda natural",
      categoria: "roupas",
    },
    {
      id: 5,
      nome: "Sandália Comfort",
      preco: 119.99,
      imagem: "https://via.placeholder.com/300/844a4f/ffffff?text=Sandália",
      descricao: "Sandália com palmilha anatômica",
      categoria: "calcados",
    },
    {
      id: 6,
      nome: "Colar Prateado",
      preco: 59.99,
      imagem: "https://via.placeholder.com/300/844a4f/ffffff?text=Colar",
      descricao: "Colar em prata 925",
      categoria: "acessorios",
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

  // Carrinho
  let carrinho = [];

  // Carregar produtos
  function carregarProdutos(categoria = "todos") {
    produtosContainer.innerHTML = "";

    let produtosFiltrados = produtos;

    if (categoria !== "todos") {
      produtosFiltrados = produtos.filter(
        (produto) => produto.categoria === categoria
      );
    }

    produtosFiltrados.forEach((produto) => {
      const produtoHTML = `
                <div class="produto" data-id="${produto.id}" data-categoria="${
        produto.categoria
      }">
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
                        <button class="diminuir" data-id="${item.id}">-</button>
                        <span>${item.quantidade}</span>
                        <button class="aumentar" data-id="${item.id}">+</button>
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

    const numeroWhatsApp = "SEU_NUMERO_AQUI"; // Substitua pelo seu número
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
});
