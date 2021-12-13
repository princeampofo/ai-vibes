// Change Style Application function

let state = true

function change(){
    let shape = document.getElementById('firstShape')
    let sText = document.getElementById('sText')
    let changeStyles = document.getElementById('changeStyles')


    if (state){
        shape.style.borderRadius = "70%"
        shape.style.transition = "all 0.9s"
        shape.style.backgroundColor = "#feae96"
        shape.style.backgroundImage= "linear-gradient(315deg, #feae96 0%, #fe0944 74%)"
        sText.innerHTML = "This is an oval/circle shape. Click again to square/rectangle up!"
        changeStyles.style.backgroundColor = "#abe9cd"
        changeStyles.style.backgroundImage= "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)"
        changeStyles.style.transition = "all 0.9s"
        state = false
    }
    
    
    else if (state===false) {
        shape.style.width = "60%"
        shape.style.height= "320px" 
        shape.style.transition = "all 0.9s"
        shape.style.borderRadius = "0%"
        changeStyles.style.backgroundColor = "#feae96"
        changeStyles.style.backgroundImage= "linear-gradient(315deg, #feae96 0%, #fe0944 74%)"
        shape.style.backgroundColor = "#abe9cd"
        shape.style.backgroundImage= "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)"
        changeStyles.style.transition = "all 0.9s"
        sText.innerHTML = "This is a square/rectangle shape. Click again to see an oval/circle shape!"
        state = true
    }

}



// Random prize winner function

function randPrize(){
    let prizeImg = document.getElementById('prizeImg')
    let prizeText = document.querySelector('.prizeText')

    const prizeTextArr = ["an Iphone 13", "a BMW" , "a Macbook", "a Ferrari" , "an Ipad"]
    const prizeImgArr = ["img/iphone13.jpg", "img/bmw.jpg","img/macbook.jpg", "img/ferrari.jpg", "img/ipad.jpg"]

    let randNumber = Math.floor(Math.random()*prizeTextArr.length)

    prizeImg.src = prizeImgArr[randNumber]
    prizeImg.style.visibility = "visible"
    prizeText.innerHTML = "Congratulations! You won " + prizeTextArr[randNumber]


}


// Swap Text function
function swapT(){

    let p1Text = document.getElementById('p1')
    let p2Text = document.getElementById('p2')

    let tempText = p1Text.innerHTML
    p1Text.innerHTML = p2Text.innerHTML
    p2Text.innerHTML = tempText
}


// Swap Image function 
function swapImg(){
    let swapImg1 = document.getElementById('swapImg1')
    let swapImg2 = document.getElementById('swapImg2')

    let tempImg = swapImg1.src

    swapImg1.src = swapImg2.src
    swapImg2.src = tempImg
}
