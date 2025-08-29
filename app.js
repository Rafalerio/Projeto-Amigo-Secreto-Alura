let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nomeAmigo = amigoInput.value.trim();

    // 1. Valida se o campo de nome está vazio
    if (nomeAmigo === '') {
        alert("Por favor, insira um nome.");
        return;
    }

    // 2. Valida se o nome já existe na lista
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
        amigoInput.value = '';
        return;
    }

    // 3. Adiciona o nome ao array e limpa o campo
    amigos.push(nomeAmigo);
    amigoInput.value = '';

    // 4. Atualiza a lista exibida na tela
    exibirAmigos();
}

function exibirAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    if (amigos.length > 0) {
        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement('li');
            li.textContent = amigos[i];
            listaAmigos.appendChild(li);
        }
    }
}

function sortearAmigo() {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (amigos.length < 2) {
        alert("É necessário pelo menos dois amigos para o sorteio.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    resultadoDiv.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
}