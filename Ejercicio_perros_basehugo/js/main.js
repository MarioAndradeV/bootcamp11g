$(document).ready( function(){
    $(".content-wrapper").load('./views/home.html')
    loadView("./views/home.html", "home")
})

$('.navbar-nav a').click( event => {
    event.preventDefault()
    let view = event.target.dataset.viewTarget 
    let url = `./views/${view}.html`
    $(".nav-item").removeClass("active")
    $(event.target).closest(".nav-item").addClass("active")
    loadView( url, view )
})

const loadView = (url, view)  => {
    $('.content-wrapper').load(url, () => {
        console.log( view )
        switch ( view ) {
            case "home":
                alert("cargando home")
                break
            
            case "pets":
                getPets()
                break

            case "users":
                alert("cargando users")
                getOwners()
                break

            default:
                alert("cargando home")
        }
    })
}

const getPets = () => {
    $.ajax({
        method:"GET",
        url:"https://ajaxclass-1ca34.firebaseio.com/11g/hugo/pets/.json",
        success: response => {
            console.log( response )
        },
        error: error => {
            console.log( error )
        }
    })
}


const getuserData = () => {
    let userObject = {}
    $("form input").each(function (index) {
        let property = this.name
        let value = this.value

        userObject[property] = value
    });

    saveUser(userObject)
}


const saveUser = userData => {
    $.ajax({
        method: "POST",
        data: JSON.stringify(userData),
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/hugo/owners/.json",
        success: response => {
            console.log(response)
            
        },
        error: error => {
            console.log(error)
        }
    })
}


$(".saveowner").click(getuserData)



const getOwners = () => {
    let ownerCollection;
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/hugo/owners/.json",
        success: response => {
            ownerCollection = response
        },
        async: false
    })
    return ownerCollection
}
/*Event handlers*/

$(".content-wrapper").on("click", ".add-user", () => {
    console.log( " agregando usuario ")
})

$(".content-wrapper").on("click", ".delete-user",() => {
    console.log( "borrando usuario")
})

$(".content-wrapper").on("click", ".saveowner",() => {
    console.log( "guardando usuario")
})
//--------//


