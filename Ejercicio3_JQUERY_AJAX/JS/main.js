// /*
//     let xhttp = new XMLHttpRequest();
    
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             let response = xhttp.responseText
//             console.log( response  )
//         }
//     }

//     xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/israel/mentors.json", true);

//     xhttp.send( JSON.stringify(mentor) )
// */


// /*

// $.ajax({
//         method:  "GET", /*"GET" || "POST" || "PATCH" ||"DELETE" || "PUT"
//         data:,  aquí va lo que vamos a enviar
//         url: a donde haremos la petición
//         success:  callback para cuando la petición es exitosa
//         error: callback para cuando hay error en la petición

//     })
// */
// const getData = () => {
//     $.ajax({
//         method: "GET",
//         url: "https://ajaxclass-1ca34.firebaseio.com/11g/mario/mentors/.json",
//         success: response => {
//             console.log(response)
//         },
//         error: error => {
//             console.log(error)
//         }
//     })
// }

// getData()

// const saveData = () => {
//     $.ajax({
//         method: "POST",
//         url: "https://ajaxclass-1ca34.firebaseio.com/11g/mario/mentors/.json",
//         data: JSON.stringify({
//             age: "14",
//             name: "Mel",
//             phone: "123456789"
//         }),
//         success : response => {
//             console.log(response)
//         },
//         error : error => {
//             console.log(error)
//         }
//     })
// }

// // content-wrapper.innerHTML+=
// // let age = html.innerHTML+="<p>id="+mario.mentors.age;
// // console.log(age)


// var div=document.getElementById("show");
// div.innerHTML=mario.mentors.age;
// // const deleteData = key => {
// //     $.ajax({
// //         method:"DELETE",
// //         url:`https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums/${key}.json`,
// //         success: response => {
// //             console.log( response)
// //         },
// //         error: error => {
// //             console.log( error )
// //         }
// //     })
// // }

// // /*-MYDA8x4vqzZgP8h2q-5*/

// // const updateData = key => {
// //     $.ajax({
// //         method:"PATCH",
// //         url:`https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums/${key}.json`,
// //         data: JSON.stringify({ gender:"Symphonic Metal"}),
// //         success: response => {
// //             console.log( response )
// //         },
// //         error: error => {
// //             console.log( error )
// //         }
// //     })
// // }


// // const putData = key => {
// //     $.ajax({
// //         method:"PUT",
// //         url:`https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums/${key}.json`,
// //         data: JSON.stringify({ gender:"Symphonic Metal"}),
// //         success: response => {
// //             console.log( response )
// //         },
// //         error: error => {
// //             console.log( error )
// //         }
// //     })
// // }

// // let cardHtml = `<div class="card">
// // <div class="card-body">
// //     <div class="card-title">Un título</div>
// //     <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor est, maiores a illum quod laboriosam fugit ut esse aliquid quos?</div>
// // </div>
// // </div>`



const time =() =>{
    let today  = new Date ();
    let fullDate = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`
    let fullTime = `${today.getHours()}:${today.getMinutes()}`
    console.log(fullDate)
    console.log(fullTime)


}




