/*
https://ajaxclass-1ca34.firebaseio.com/11g/{su_nombre}/mentors.json
nuevo mentor - CRUD APP
newObject = {
    name,
    age,
    phone
}
*/


testMentor = {
    name:"Israel",
    phone:"55588844411",
    age:"12"
}


const getMentor = () => {

    let xhttp = new XMLHttpRequest();   
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhttp.responseText) 
            console.log(response)
        }
    }

    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/11g/mario/mentors.json", true);
    xhttp.send();
}




const saveMentor = () => {

    let xhttp = new XMLHttpRequest();   
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log(response)
        }
    }

    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/mario/mentors.json", true);
    xhttp.send( JSON.stringify(testMentor) );
}



const deleteMentor = () => {

    let xhttp = new XMLHttpRequest();   
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log(response)
        }
    }
    
    xhttp.open("DELETE", "https://ajaxclass-1ca34.firebaseio.com/11g/mario/${mentorKey}.json", true);
    xhttp.send();
}



const getMentorForm = () => {
    
}