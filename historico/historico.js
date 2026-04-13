const modal = document.getElementById('modal-pasta');
const btnAbrirModal = document.getElementById('abrir-modal');
const btnCancelar = document.getElementById('btn-cancelar');
const btnConfirmar = document.getElementById('btn-confirmar');
const inputNome = document.getElementById('nome-pasta');
const gridPastas = document.getElementById('grid-pastas');

// Função para fechar modal e limpar input
const fecharModal = () => {
    modal.style.display = 'none';
    inputNome.value = '';
};

// Abrir modal
btnAbrirModal.addEventListener('click', () => {
    modal.style.display = 'flex';
    inputNome.focus();
});

// Cancelar
btnCancelar.addEventListener('click', fecharModal);

// Criar Pasta dinamicamente
btnConfirmar.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    
    if (nome !== "") {
        // Cria o elemento do card
        const novoCard = document.createElement('div');
        novoCard.classList.add('item-card');
        
        // Adiciona o HTML interno da pasta
        novoCard.innerHTML = `
            <div class="folder-main">
                <div class="folder-tab"></div>
            </div>
            <p class="label-red">${nome}</p>
        `;

        // Adiciona evento de clique para a nova pasta
        novoCard.addEventListener('click', () => {
            alert(`Abrindo pasta: ${nome}`);
        });

        // Coloca na tela
        gridPastas.appendChild(novoCard);
        
        fecharModal();
    } else {
        alert("Por favor, digite um nome.");
    }
});

// Adiciona funcionalidade de clique nas pastas que já estavam no HTML
document.querySelectorAll('.pasta-clicavel').forEach(pasta => {
    pasta.addEventListener('click', () => {
        const nome = pasta.querySelector('p').innerText;
        alert(`Abrindo pasta: ${nome}`);
    });
});