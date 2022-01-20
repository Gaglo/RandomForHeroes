
class CastleTown {
    id
    name
    simpleName
    isChecked
    iconURL
    icon
    constructor(id, name, simpleName, isChecked, iconURL) {
        this.id = id
        this.name = name
        this.simpleName = simpleName
        this.isChecked = isChecked
        this.iconURL = iconURL
        this.icon = Object.assign(new Image, {
            src: this.iconURL
        })
        // this.buildGUI(parent)
    }

    getIcon() {
        return this.icon
    }
    setCheck(status) {
        this.isChecked = status
    }
    buildGUI(parent) {
        let targetBox = document.getElementById(parent)
        let mainBox = document.createElement('DIV')
        mainBox.classList.add('vertical_box')
        let castleName = document.createElement('div')
        castleName.classList.add('eny_box')
        castleName.innerHTML = this.name
        mainBox.appendChild(castleName)

        let chooseBox = document.createElement('DIV')
        chooseBox.classList.add('vertical_box')
        let iconBox = document.createElement('div')
        iconBox.appendChild(this.icon)

        let inputCheckbox = document.createElement('input')
        inputCheckbox.checked = this.isChecked
        inputCheckbox.name = this.simpleName
        inputCheckbox.type = 'checkbox'
        inputCheckbox.id = this.id
        chooseBox.appendChild(iconBox)
        chooseBox.appendChild(inputCheckbox)
        mainBox.appendChild(chooseBox)
        targetBox.appendChild(mainBox)
    }

}

let castle = new CastleTown(0,'Рыцари', 'castle', true, 'https://heroes.thelazy.net/images/6/63/Adventure_Map_Castle_capitol.gif', 'input_box')
let rampart = new CastleTown(1,'Эльфы', 'rampart', true, 'https://heroes.thelazy.net/images/c/cd/Adventure_Map_Rampart_capitol.gif', 'input_box')
let tower = new CastleTown(2,'Маги', 'tower', true, 'https://heroes.thelazy.net/images/9/9f/Adventure_Map_Tower_capitol.gif', 'input_box')
let inferno = new CastleTown(3,'Дьяволы', 'inferno', false, 'https://heroes.thelazy.net/images/0/03/Adventure_Map_Inferno_capitol.gif', 'input_box')
let necropolis = new CastleTown(4,'Вампиры', 'necropolis', false, 'https://heroes.thelazy.net/images/7/70/Adventure_Map_Necropolis_capitol.gif', 'input_box')
let dungeon = new CastleTown(5,'Колдуны', 'dungeon', true, 'https://heroes.thelazy.net/images/7/74/Adventure_Map_Dungeon_capitol.gif', 'input_box')
let stronghold = new CastleTown(6,'Варвары', 'stronghold', true, 'https://heroes.thelazy.net/images/5/50/Adventure_Map_Stronghold_capitol.gif', 'input_box')
let fortress = new CastleTown(7,'Болотники', 'fortress', true, 'https://heroes.thelazy.net/images/d/df/Adventure_Map_Fortress_capitol.gif', 'input_box')
let conflux = new CastleTown(8,'Элементали', 'conflux', false, 'https://heroes.thelazy.net/images/a/ac/Adventure_Map_Conflux_capitol.gif', 'input_box')

let castles = [castle, rampart, tower, inferno, necropolis, dungeon, stronghold, fortress]

function addBox() {
    for(let i = 0; i < castles.length; i++) {
        castles[i].buildGUI('input_box')
    }
}

function random () {
    let selectedCastles = getSelectedCastles()
    let comparedList = comparedLists(selectedCastles)
    let randomCastle = royalRandom(comparedList)
    let img = randomCastle.iconURL
    console.log('icon: ' + randomCastle.getIcon())
    console.log('imgIconURL: ' + img)
    let obj = new CastleTown('13', randomCastle.name, randomCastle.simpleName, false, img)
    obj.buildGUI('output_box')
    // randomCastle.buildGUI('output_box')
    // randomCastle.buildGUI('output_box')
    // console.log(randomCastle.name)
}

function getSelectedCastles() {
    let castleId = []
    let list = document.getElementsByTagName('input')
    for (let input of list) {
        if(input.checked) {
            castleId.push(input.id)
        }
    }
    return castleId
}

function comparedLists(list) {
    let castlesForRandom = []
    for(let i = 0; i < list.length; i++) {
        castlesForRandom.push(castles[list[i]])
    }
    return castlesForRandom
}

function royalRandom(list) {
    if(list.constructor == Set){
        list = [...list]
    }
    let tempList = list.slice()
    while(tempList.length > 1) {
        let index = Math.floor(Math.random() * tempList.length)
        tempList.splice(index, 1) 
    }
    return tempList[0]
}



//THRASH

function buildCheckbox() {
    let list = document.getElementsByTagName('input')
    // console.log(list)
    for (let input of list) {
        console.log(input.checked)
    }
}
function temp() {
    let list = document.getElementsByTagName('input')
    console.log(list)
    for (let input of list) {
        console.log(input.checked)
    }
}