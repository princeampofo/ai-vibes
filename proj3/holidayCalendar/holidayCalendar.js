
//variable
var dates = new Array(1);
var output = document.getElementById('output')
var imag = document.getElementById('img1')
var output1 = document.getElementById('output1')


//arrays
monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"]

holiday = ["Labor Day", "Indigenous day","Marthin Luther King Jr. Birthday","President's Day","Memorial Day","Juneteenth","Juneteenth","Independence Day"]

imagesArray = ['labor.jpg','indigenous.jpg','martin.jpg','presidents.jpg','memorial.jpg','juneteenth.jpeg','juneteenth.jpeg','independence.jpg','thanksgiving.jpg','halloween.jpg','winterbreak.jpg','spring.jpg','disappointed.jpg']


citation = ["https://images2.minutemediacdn.com", "https://osdnewsandnotes.files.wordpress.com","https://bloximages.newyork1.vip.townnews.com","https://www.makeitgrateful.com", "https://mycalumetpark.com", "https://news.ucdenver.edu", "https://news.ucdenver.edu","https://ignation.ca/","https://happythanksgivingpictures.com/","https://www.history.com/", "https://www.ambridge.k12.pa.us","https://qvcc.edu/","https://i.pinimg.com/"]


dates[0] =[09,06,2021]
dates[1]=[10,11,2021]
dates[2]=[01,17,2022]
dates[3]=[02,21,2022]
dates[4]=[05,30,2022]
dates[5]=[06,19,2022]
dates[6]=[06,20,2022]
dates[7]=[07,04,2022]


//Holiday check function
document.getElementById('checkDate').addEventListener('click',()=>{
    var state = true
    let selectedDate = document.getElementById('hdate').value ;

    let convertedDate = new Date(selectedDate)


    let month = convertedDate.getUTCMonth()
    let day = convertedDate.getUTCDate()
    let validMonth = month +1
    let year = convertedDate.getUTCFullYear()
   

    if (validMonth===11 && year===2021 && day<27 && day >24){
        output.innerHTML = "This is not an NYU holiday but it's Thanksgiving Day."
        imag.src = imagesArray[8]
        output1.innerHTML = "This image was taken from " + citation[8] +".";
    }

    else if (validMonth===10 && year===2021 && day===31){
        output.innerHTML = "This is not an NYU Holiday but it's Halloween!"
        imag.src = imagesArray[9]
        output1.innerHTML = "This image was taken from " + citation[9] +".";

    }

    else if ((validMonth===12 && year===2021 && day>22 && day<32) || (validMonth===01 && year===2022 && day>=01 && day<03) ){
        output.innerHTML = "This is not an NYU Holiday but Winter Recess for students."
        imag.src = imagesArray[10]
        output1.innerHTML = "This image was taken from " + citation[10] +".";
    }

    else if ((validMonth===03 && year===2022 && day>=14 && day<=20)){
        output.innerHTML = "This is not a Holiday but Spring break for students."
        imag.src = imagesArray[11]
        output1.innerHTML = "This image was taken from " + citation[11] +".";

    }

    else{
        for (let i = 0; i<dates.length ; i++ ){
        
            if (validMonth===dates[i][0] && day === dates[i][1] && year===dates[i][2]){
                output.innerHTML ="This is an NYU Holiday. " + monthArray[month] + " " + day +"," + year + " is " + holiday[i] +".";
                imag.src = imagesArray[i]
                output1.innerHTML = "This image was taken from " + citation[i] +".";
                state = False
                break;
                
            }
        }

        if (state){
            output.innerHTML="This is not an NYU Holiday!!Try another date!!"
            imag.src = imagesArray[12]
            output1.innerHTML = "This image was taken from " + citation[12] +".";

        }

    }

})