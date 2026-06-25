const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });

    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll("#productGrid .product-card");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        productCards.forEach((card) => {
          const category = card.dataset.category;
          if (filter === "all" || category === filter) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });

    const challengeData = {
      1: {
        description: "iPhone X com tela preta. O aparelho liga, vibra, mas a tela não mostra imagem.",
        offers: [
          { title: "Técnica Juliana", text: "Troca de display e revisão completa - R$ 180" },
          { title: "Oficina TechFix", text: "Diagnóstico + reparo com peça compatível - R$ 210" },
          { title: "Compra para peças", text: "Oferta de compra no estado atual - R$ 130" }
        ]
      },
      2: {
        description: "Notebook Dell Inspiron 15 não liga. Possível problema na placa ou fonte.",
        offers: [
          { title: "DellCare Independente", text: "Diagnóstico elétrico e reparo de placa - R$ 250" },
          { title: "InfoLab RJ", text: "Substituição de conector/fonte e testes - R$ 220" }
        ]
      },
      3: {
        description: "PlayStation 4 superaquecendo e desligando após alguns minutos de uso.",
        offers: [
          { title: "Console Repair", text: "Limpeza interna + troca de pasta térmica - R$ 120" },
          { title: "GameFix Curitiba", text: "Revisão completa do sistema de ventilação - R$ 150" },
          { title: "Compra no estado", text: "Oferta para retirada de peças - R$ 200" }
        ]
      },
      4: {
        description: "Canon T5i com erro de lente. Desafio encerrado com oferta de compra aprovada.",
        offers: [
          { title: "FotoLab BH", text: "Compra aprovada no estado atual - R$ 300" }
        ]
      }
    };

    const challengeItems = document.querySelectorAll(".challenge-item");
    const challengeDescription = document.getElementById("challengeDescription");
    const offerBox = document.getElementById("offerBox");

    challengeItems.forEach((item) => {
      item.addEventListener("click", () => {
        challengeItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");

        const id = item.dataset.id;
        const data = challengeData[id];

        challengeDescription.textContent = data.description;
        offerBox.innerHTML = "";

        data.offers.forEach((offer) => {
          const div = document.createElement("div");
          div.className = "offer";
          div.innerHTML = `
            <strong>${offer.title}</strong>
            <p class="muted">${offer.text}</p>
          `;
          offerBox.appendChild(div);
        });
      });
    });

    const donationForm = document.getElementById("donationForm");
    const challengeForm = document.getElementById("challengeForm");
    const newsletterForm = document.getElementById("newsletterForm");

    donationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Doação enviada com sucesso! Nossa equipe entrará em contato.");
      donationForm.reset();
    });

    challengeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Desafio publicado com sucesso! Em breve você receberá lances.");
      challengeForm.reset();
    });

    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Inscrição realizada com sucesso!");
      newsletterForm.reset();
    });