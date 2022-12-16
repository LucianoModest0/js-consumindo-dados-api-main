async function adressFetch (cep){
    var erroMessage = document.getElementById('erro');
    erroMessage.innerHTML = '';
    try {
        var cepFetch = await fetch (`https://viacep.com.br/ws/${cep}/json/`)
        var cepJson = await cepFetch.json();
        if(cepJson.erro) {
            throw Error('CEP inexistente');
        }
        
        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');
    
      
        logradouro.value = cepJson.logradouro;
        bairro.value = cepJson.bairro;
        cidade.value = cepJson.localidade;
        estado.value = cepJson.uf;


        console.log(cepJson);
        return cepJson;
    } catch (erro) {
        erroMessage.innerHTML = `<p style='color: red; margin-left: 10px; margin-top: 5px'>CEP inválido. Verifique o número digitado!</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => adressFetch(cep.value));
