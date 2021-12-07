
window.onload = fortuneC


// Fortune function
function fortuneC(){
   
    let fortuneText = document.getElementById('fortuneC')
    let fortuneBImg = document.getElementById('imageC')

    let fortuneTextArr = ["Success is not final, failure is not fatal: it is the courage to continue that counts.", "Believe you can and you're halfway there." , "No matter what you're going through, there's a light at the end of the tunnel.", "Life is like riding a bicycle. To keep your balance, you must keep moving." , "It is never too late to be what you might have been."]
    let fortuneImages = ["img/sucess.jpg", "img/believe.jpg","img/tunnel.jpg", "img/bicycle.jpg", "img/late.jpg"]

    let randNumber = Math.floor(Math.random()*fortuneTextArr.length)

    fortuneText.innerHTML = fortuneTextArr[randNumber]

    fortuneBImg.style.backgroundImage = "url(" + fortuneImages[randNumber] + ")"

}


