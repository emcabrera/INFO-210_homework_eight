// const list = [1, 2, 3, 4]
// const sentences = ["The cow goes moo.", "The turkey goes gobble gobble.", "Luke says the most cray stuff."]
//
// const newList = list.map(itm =>
//     itm + 2
// )
//
// const sum = list.reduce((sum, item) => {
//     return sum + item;
// })
//
// const paragraph = sentences.reduce((para, item) => {
//     return para + item + " ";
// })
//
// console.log(paragraph)
//
// console.log(sum)

// const lemons = ["green", "yellow", "blue", "brown", "yellow"]

const pokemon = [
    { name: "Flareon", type: "fire", maxHp: 334, attack: 130 },
    { name: "Horsea", type: "water", maxHp: 246, attack: 40 },
    { name: "Pichu", type: "electric", maxHp: 244, attack: 40 },
    { name: "Ivysaur", type: "grass", maxHp: 324, attack: 62 }
];

const pokemonCheck = pokemon.map(itm => {
    if (itm === "yellow" || itm === "green") {
        return 1
    } else {
        return 0
    }
})

const renderedPokemon = pokemon.map(itm => {
    const ele = document.createElement("div")
    ele.innerHTML = itm;
    ele.style.textTransform = "uppercase";
    ele.style.fontWeight = "bold"
    ele.style.color = itm;
    return ele;
})

function filterPokemon(fil) {
    if (fil === "all") {
        return pokemon.map(itm => {
            const ele = document.createElement("div")
            ele.innerHTML = itm;
            ele.style.textTransform = "uppercase";
            ele.style.fontWeight = "bold"
            ele.style.color = itm;
            return ele;
        })
    } else {
        const filteredPokemon = pokemon.filter(itm =>
            itm === "yellow" || itm === "green"
        )

        return filteredPokemon.map(itm => {
            const ele = document.createElement("div")
            ele.innerHTML = itm;
            ele.style.textTransform = "uppercase";
            ele.style.fontWeight = "bold"
            ele.style.color = itm;
            return ele;
        })
    }
}

document.getElementById("select").addEventListener("change", (e) => {
    // console.log(e.target.value)
    renderPokemon(filterPokemon(e.target.value));
})


document.getElementById("search").addEventListener("input", (e) => {
    console.log(e.target.value)
    const searchValue = e.target.value;
    const searchedPokemon = pokemon.filter(itm =>
        itm.includes(searchValue)
    )
    const newPokemon = searchedPokemon.map(itm => {
        const ele = document.createElement("div")
        ele.innerHTML = itm;
        ele.style.textTransform = "uppercase";
        ele.style.fontWeight = "bold"
        ele.style.color = itm;
        return ele;
    })

    renderPokemon(newPokemon);
})

function renderPokemon(pokemon) {
    document.getElementById("wrapper").innerHTML = "";
    pokemon.forEach(itm => {
        document.getElementById("wrapper").appendChild(itm)
    })
}


// renderLemons(renderedLemons);


// console.log(renderedLemons)

// console.log(filteredLemons)


//
// console.log(lemonCheck)
//
// console.log(newList)

