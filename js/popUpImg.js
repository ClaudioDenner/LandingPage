    document.addEventListener('keydown', function(tecla){ if(tecla.keyCode==27){downPopUpImg()}});
    //imgs.addEventListener("click",function(){console.log('clicou')})
    var imgs = document.querySelectorAll('#ItemUrlImg')
    imgs.forEach(imagens=>{

    imagens.addEventListener("click",function(){
        newUrl = imagens.src.toString()
        
        idProduct = imagens.getAttribute('dataId').toString()
        nameProduct = imagens.getAttribute('dataName').toString()
        descricaoProduct = imagens.getAttribute('dataDescricao').toString()
        tamanhosProduct = imagens.getAttribute('dataTamanhos').toString()
        quantParcelasProduct = imagens.getAttribute('dataQuantParcelasSemJuros').toString()
        valorProduct = imagens.getAttribute('dataValor').toString()




        alterUrlPopUp(newUrl, idProduct,nameProduct,descricaoProduct,tamanhosProduct,quantParcelasProduct, valorProduct)




    })



function alterUrlPopUp(newUrl,idProduct,nameProduct,descricaoProduct,tamanhosProduct,quantParcelasProduct, valorProduct){
    
    url = newUrl
    let imgPopUp = document.getElementById('imgPopUp')
    
    imgPopUp.setAttribute('src',url)


    //setando detalhes do produto
    id = idProduct
    name = nameProduct
    descricao = descricaoProduct
    tamanhos = tamanhosProduct
    valor = valorProduct
    parcelas = quantParcelasProduct


    document.getElementById('idProductDetails').innerText = id
    document.getElementById('nameProductDetails').innerText = name
    document.getElementById('descricaoProductDetails').innerText = descricao
    document.getElementById('tamanhosProductDetails').innerText = tamanhos
    document.getElementById('valorProductDetails').innerText = valor
    document.getElementById('parcelasProductDetails').innerText = parcelas






}   

})
//imgs.addEventListener("click",function(){console.log('clicou')})




function popUpImg(){

var popUpImg = document.getElementById('popUpImg')

popUpImg.style.display = "flex"
popUpImg.style.position = "fixed"



}


function downPopUpImg(){


    var popUpImg = document.getElementById('popUpImg')





popUpImg.style.display = "none"
popUpImg.style.position = "fixed"

}