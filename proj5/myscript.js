let state = true;

// Style application function
$(document).ready(function(){
    $('#sButton5').click(function(){
        $('#special').css("color", "green");
        $('.highlight').css("background-color","yellow")
        $('.p1').each(function(){
            $(this).css("color","white")
            $(this).css("background-color","green")
            $(this).css("border","1px solid black")
            $(this).css("padding","0.5em")
            alert($(this).text())
        })
    })
});


// Image application functions
$(document).ready(function(){
    $("#hButton").click(function(){
        $("#img5").hide()
    })
})


$(document).ready(function(){
    $("#showButton").click(function(){
        $("#img5").show()
    })
})

$(document).ready(function(){
    $("#fOutButton").click(function(){
        $("#img5").fadeOut("slow","linear")
    })
})


$(document).ready(function(){
    $("#fInButton").click(function(){
        $("#img5").fadeIn(3000,"linear")
    })
})



// Animate application function
$(document).ready(function(){
	
   
        $("#aButton").on('click', function() {	
            if (state){
                $("#animateObject").animate({
                    left: '300px',
                    opacity: '0.4',
                    height: '+=100px',
                    width: '+=100px'
                });
                state=false
            }

            else{
                $("#animateObject").animate({
                    opacity: '0.9',
                    height: '-=100px',
                    width: '-=100px'
                });
                state = true
            }
			
        });
    
    
});


// Form application function
$(document).ready(function(){

    $("input").change(function(){
        let $unameVal = $("#uname").val()
        let $passwordVal = $("#password").val()

        if ($unameVal.length === 0){
            $("#uname").focus()
            $("#uname").css("background-color","yellow")
            alert("Please enter a username")
        }

        if ($passwordVal.length === 0){
            $("#password").focus()
            $("#password").css("background-color","yellow")
            alert("Please enter a password")
        }

        if ($unameVal.length===0 || $passwordVal.length===0){
            let $final = ""
            $("#demo").html($final)
        }

        if ($unameVal.length!==0 && $passwordVal.length!==0){
            let $final = "<p> Username : " + $unameVal + "</p>" + "<p> Password : " + $passwordVal + "</p>"
            $("#demo").html($final)
        }
        

    })
    
})