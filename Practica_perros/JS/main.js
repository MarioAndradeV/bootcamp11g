const getPetsData = () => {
    let petObject = {}
    $("form input").each(function (index) {
        let property = this.name
        let value = this.value

        petObject[property] = value
    });

    savePet(petObject)
}

const savePet = petData => {
    $.ajax({
        method: "POST",
        data: JSON.stringify(petData),
        url: "https://perritos-db998-default-rtdb.firebaseio.com/Perritos/.json",
        success: response => {
            console.log(response)
            printPets( getPet() )
        },
        error: error => {
            console.log(error)
        }
    })
}

$(".save-pet").click(getPetsData)

const getPet = () => {
    let PetsCollection;
    $.ajax({
        method: "GET",
        url: "https://perritos-db998-default-rtdb.firebaseio.com/Perritos/.json",
        success: response => {
            PetsCollection = response
        },
        async: false
    })
    return PetsCollection
}

const printPets = petsCollection => {
    console.log(petsCollection)
    $(".pets-wrapper").empty()
    for (pet in petsCollection) {
        let { img, name, race, gender } = petsCollection[pet]
        let petCard = `
            <div class="col-6">
                <div class="card mb-3">
                    
                    <div class="card-body">
                        <img src = ${img} >
                        <div class="card-text">Name: ${name}</div>
                        <div class="card-text">Race: ${race}</div>
                        <div class="card-text">Gender: ${gender}</div>
                        <div class="d-flex justify-content-between">
                            <div class="btn btn-secondary">Adoptar</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        `
        $(".pets-wrapper").append(petCard)
    }
}

printPets(getPets())