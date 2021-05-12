// $('#toggle-text').click(()=>{
//     $('#text').toggle()
// })
    
  
//Ejercicio 1
// $(".radio-wrapper input[type='radio']").click( ()=> {
//     let selection = $(".radio-wrapper input[type='radio']:checked").val()
//     if (selection =="square"){
//         $('#figura').css('height','60px')
//         $('#figura').css('width','60px')
//         $('#figura').css('border-radius','0%')
//     }
//     else if (selection =="rectangle"){
//         $('#figura').css('height','60px')
//         $('#figura').css('width','120px')
//         $('#figura').css('border-radius','0%')
//     }
//     if (selection =="circle"){
//         $('#figura').css('height','60px')
//         $('#figura').css('width','60px')
//         $('#figura').css('border-radius','50%')
//     }
    
// })






//Ejercicio 2

var image = [
    "https://picsum.photos/id/237/500/500",
    "https://picsum.photos/seed/picsum/500/500",
    "https://picsum.photos/id/214/500/500",
    "https://picsum.photos/id/215/500/500",
    "https://picsum.photos/id/218/500/500",
    "https://picsum.photos/id/280/500/500"
]
var contImg = 0

$('#text2').html(`1/${image.length}`)
$("#siguiente").click(()=>{
    if (contImg >= image.length-1){
         contImg = image.length-1
         
     }
    else{
        contImg += 1
        
        
    }
    // contImg===image.length-1
    //     ? $("#siguiente").attr("disabled",true)
    //     : $("#siguiente").attr("disabled",false)
    let img1= $("#imagenAlt").attr("src",image[contImg])
    console.log(contImg)
    console.log(image.length-1)
    $('#text2').html(`${contImg+1}/${image.length}`)
})

$("#atras").click(()=>{
    if (contImg <= 0){
        contImg = 0
    }
    else{
        contImg -- 
    }
    // contImg===0
    //     ? $("#atras").attr("disabled",true)
    //     : $("#atras").attr("disabled",false)
    let img1= $("#imagenAlt").attr("src",image[contImg])
    console.log(contImg)
    console.log(image.length-1)
    $('#text2').html(`${contImg+1}/${image.length}`)     
})


