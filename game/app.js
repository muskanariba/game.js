var character = document.getElementById('character')
var char = document.getElementById('char')
var left =0
var right = 0

function animation (){
    if(event.keyCode===39){
        character.src = "b.gif"
        right = right + 40
        character.style.left = right + "px"
       
        setTimeout(function(){
    
            character.src="https://www.fightersgeneration.com/np7/char/gifs/kyo/kyo-xi-turn.gif"
        },1000)
    }
    console.log(event.keyCode)
    if(event.keyCode===38){
        character.src = "d.gif"
        right = right + 40
        character.style.left = right + "px"
         character.style.height = "180px"
        character.style.width = "140px"
        setTimeout(function(){
    
            character.src="https://www.fightersgeneration.com/np7/char/gifs/kyo/kyo-xi-turn.gif"
        },1000)
    }


    if(event.keyCode===37){
        character.src = "b.gif"
        right = right - 80
        character.style.left = right + "px"
        setTimeout(function(){
    
            character.src="https://www.fightersgeneration.com/np7/char/gifs/kyo/kyo-xi-turn.gif"
        },1000)
    }

    if(event.keyCode===40){
        character.src = "e.gif"
        right = right + 60
        character.style.left = right + "px"
        setTimeout(function(){
    
            character.src="https://www.fightersgeneration.com/np7/char/gifs/kyo/kyo-xi-turn.gif"
        },1000)
    }
   

   if(event.keyCode===81) {   //by pressing w
    char.src = "h.gif"
    left = left +30
    char.style.right = left + "px"
    setTimeout(function(){
    
        char.src="p.gif"
    },1000)
}
}


window.onkeydown = animation