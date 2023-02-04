document.addEventListener('keydown', function(tecla){ if(tecla.keyCode==27){downPopUpImg()}});
//imgs.addEventListener("click",function(){console.log('clicou')})
var imgs = document.querySelectorAll('#ItemUrlImg')
imgs.forEach(imagens=>{

    imagens.addEventListener("click",function(){
        let newUrl = imagens.src.toString()
        alterUrlPopUp(newUrl)
    })


function alterUrlPopUp(newUrl){
url = newUrl
let imgPopUp = document.getElementById('imgPopUp')

imgPopUp.setAttribute('src',url)


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