let categories=[
    { 
        name: "snakes",
        items:[
            {
                name: "anaconda",
                facts: "this is all about the anaconda.....",
                img: "images/anaconda.png"
            },
            {
                name: "viper",
                facts: "this is all about the viper.....",
                img: "images/viper.png"
            }
        ]
    },
    { 
        name: "toads",
        items:[
            {
                name: "common",
                facts: "this is all about the common toad.....",
                img: "images/commonToad.png"
            },
            {
                name: "yellow belly",
                facts: "this is all about the yellow belly.....",
                img: "images/yellowBelly.png"
            }
        ]
    }
]

let chosenCategoryIndex=Math.floor(Math.random(categories.length))
console.log(categories[chosenCategoryIndex])


//     {
//         name: "Toad",
//         img: "/images/toad.png",
//         dataSources:
//     }
// ]