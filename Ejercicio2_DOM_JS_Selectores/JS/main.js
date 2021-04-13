/* let arrayName = [ "jaime", "Beto", "Mariana"]
const printList = () => {
  let list = document.createElement("ul")
  arrayName.forEach(name => {
    let itemList = document.createElement("li")
    let itemText = document.createTextNode (name)
    itemList.appendChild(itemText)
    list.appendChild(itemList)
  })
    document.body.appendChild(list)
} */



let mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
  ]
  
   const PrintTables = (array)=>{
     var mytable = document.createElement("table")
     mytable.className="table table-striped table-dark"
     var myThead = document.createElement("thead")
     var mytr = document.createElement("tr")
     
     let columH = ["Mentor", "HTML" , "CSS", "JS", "ReactJS", "Promedio "]
     columH.forEach((header) =>{
      var thName = document.createElement("th")
      var textTitle = document.createTextNode(header)
      thName.appendChild(textTitle)
      mytr.appendChild(thName)
      myThead.appendChild(mytr)
    })
      mytable.appendChild(myThead)
      var tBody = document.createElement("tbody")
      let generalAverage = 0
    array.forEach((mentor)=>{ 
      
      let trcolum = document.createElement("tr")
      let tdMentor = document.createElement("td")
      let texMentor = document.createTextNode(mentor.name)
      tdMentor.appendChild(texMentor)
      trcolum.appendChild(tdMentor)
      console.log(tBody);
      let tdAverage = document.createElement("td")
      let averageacum = 0
     
    mentor.scores.forEach((scoreMentor)=>{
      
      let tdHtml = document.createElement("td")
      let texHtml = document.createTextNode(scoreMentor.score)

      scoreMentor.score < 8 ? tdHtml.classList.add("bg-warning"): tdHtml.classList.add("bg-success")

      averageacum += scoreMentor.score
      tdHtml.appendChild(texHtml)
      trcolum.appendChild(tdHtml)
      
      })
      let scoreAverage = averageacum/mentor.scores.length
      let averagetxt = document.createTextNode(scoreAverage)
      generalAverage+= scoreAverage
      tdAverage.appendChild(averagetxt)
      trcolum.appendChild(tdAverage)
      tBody.appendChild(trcolum)
      console.log(scoreAverage);
     
    })
    
    let avegareMentor = generalAverage/array.length
    console.log(avegareMentor);
    mytable.appendChild(tBody)
    document.body.appendChild(mytable)
    document.write ("<p class= 'bg-dark text-white mt-0 text-center'> El promedio general de los mentores de Kodemia es: <b class= bg-danger>" +  avegareMentor + '</b></p>' )
    
    
  
    }
    

    const getLowerScore = () => {
        let scores = document.querySelectorAll('td.bg-danger').length;
        console.log(scores);
        return scores;
    }
    
    PrintTables(mentorsArray)


    document.getElementById("button").addEventListener("click", getLowerScore)
    // document.getElementById("button").addEventListener("click", () => {
    //     console.log("Hola")
    // })


  