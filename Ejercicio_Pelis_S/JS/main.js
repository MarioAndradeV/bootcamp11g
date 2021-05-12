usersArray = []
userId = 0
const getUsers = () => {
    $.get("https://reqres.in/api/users?page=2",
        function (data) {
           // console.log(data.data)
            data.data.forEach(user => {
                selectUser(user)
            });
            
        },
    );
}



const getMovies = (title) => {
    if (usersArray.length){
        $.get(`http://www.omdbapi.com/?apikey=ed48d49e&t=${title}`,
        function (movie) {
            //console.log(movie)
            usersArray.forEach( user => {
                if( userId === user.id ){
                    
                    user.peliculas.push(movie)
                    console.log( user )
                    console.log( user )
                    console.log( userId )
                    console.log( movie )
                }
            })
        
        },
        
    );
    }
}



const selectUser = (user) => {
    $('#select-user').append(`<option>${user.first_name} ${user.last_name}</option>`)
    //console.log($('#select-user').v
}