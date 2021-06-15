function dados(event){
    const titulo = document.getElementById('titulo').value
    const descricao = document.getElementById('descricao').value
    const quartos = document.getElementById('quartos').value
    const vagasGaragem = document.getElementById('vagas-garagem').value
    const areaTerreno = document.getElementById('area-terreno').value
    const areaConstruida = document.getElementById('area-construida').value
    const localidade = document.getElementById('localidade').value
    const preco = document.getElementById('preco').value
    const imagem = document.getElementById('imagem').value

    if(titulo === "" || descricao ==="" ||quartos ===""|| vagasGaragem ===""|| areaTerreno===""||
            areaConstruida ===""||localidade===""||preco===""|| imagem===""){
                alert("Preencha todos os campos")
            }else{
                const lista = document.getElementById('lista')

    const campoTitulo = document.createElement('li')
    const campoDescri = document.createElement('li')
    const campoQuartos = document.createElement('li')
    const campoVagaGara = document.createElement('li')
    const campoAreaTerreno = document.createElement('li')
    const campoAreaconstru = document.createElement('li')
    const campoLocalidade = document.createElement('li')
    const campoPreco = document.createElement('li')
    const campoImagem = document.createElement('li')


    campoTitulo.innerHTML = "TÍTULO: " + titulo
    campoDescri.innerHTML = "DESCRIÇÃO: " + descricao
    campoQuartos.innerHTML = "QUARTOS: " + quartos
    campoVagaGara.innerHTML = "VAGAS DE GARAGEM: " + vagasGaragem
    campoAreaTerreno.innerHTML = "ÁREA DO TERRENO: " + areaTerreno + " M²"
    campoAreaconstru.innerHTML = "ÁREA CONSTRUÍDA: " + areaConstruida + " M²"
    campoLocalidade.innerHTML = "LOCALIDADE: " + localidade
    campoPreco.innerHTML = "PREÇO: R$ " + preco + "/mês"
    campoImagem.innerHTML = "IMAGEM: " + imagem + "<br><br><br>" + "------------------------------------------------------------"

    lista.appendChild(campoTitulo)
    lista.appendChild(campoDescri)
    lista.appendChild(campoQuartos)
    lista.appendChild(campoVagaGara)
    lista.appendChild(campoAreaTerreno)
    lista.appendChild(campoAreaconstru)
    lista.appendChild(campoLocalidade)
    lista.appendChild(campoPreco)
    lista.appendChild(campoImagem)
            }

    


    event.preventDefault();

}