
let images = ['castle.gif', 'rampart.gif', 'tower.gif', 'inferno.gif', 'necropolis.gif', 'dungeon.gif', 'stronghold.gif', 'fortress.gif']
let castles = []

class Castle {

    castleIndex
    isChecked
    image
    constructor(castleIndex, isChecked, image) {
        this.castleIndex = castleIndex
        this.isChecked = isChecked
        this.image = image
    }
}

class Icon {

    classList
    parent
    image
    isChecked

    constructor(classList, parent, obj) {
        this.classList = classList
        this.parent = parent
        this.image = obj.image
        this.isChecked = obj.isChecked
        this.selectIndex = obj.castleIndex
        this.buildIcon()
    }
    buildIcon() {
        let imageTarget = document.getElementById(this.parent)
        let mainBox = document.createElement('DIV')
        mainBox.classList.add('vertical_box')
        let castleName = document.createElement('div')
        castleName.classList.add('eny_box')
        mainBox.appendChild(castleName)

        let chooseBox = document.createElement('DIV')
        chooseBox.classList.add('vertical_box')

        let img = document.createElement('img')
        img.src = this.image
        img.alt = 'ашня'

        let inputCheckbox = document.createElement('input')
        inputCheckbox.checked = this.isChecked
        inputCheckbox.type = 'checkbox'
        inputCheckbox.id = this.selectIndex

        chooseBox.appendChild(img)
        chooseBox.appendChild(inputCheckbox)
        mainBox.appendChild(chooseBox)
        imageTarget.appendChild(mainBox)
    }

}

class IconR extends Icon {
    constructor(classList, parent, obj) {
        super('eny_box', 'output_box', obj)
    }
    buildIcon() {
        let imageTarget = document.getElementById(this.parent)
        let img = document.createElement('img')
        img.src = this.image
        img.alt = 'ашня'
        imageTarget.appendChild(img)
    }
}

for(let i = 0; i < images.length; i++) {
    let castleIndex = i
    let castle = new Castle(castleIndex, true, images[i])
    castles.push(castle)
}

for(let i = 0; i < castles.length; i++) {
    let castle = castles[i]
    new Icon('eny_box', 'input_box', castle)
}

function getSelectedCastleIndexes() {
    let castleIndexes = []
    let list = document.getElementsByTagName('input')

    for (let input of list) {
        if(input.checked) {
            castleIndexes.push(input.id)
        }
    }
    if(castleIndexes.length == 0) {
        return undefined
    } else return castleIndexes
}

function compareLists(list) {
    if(list == undefined) {
        return undefined
    }
    let castlesForRandom = []
    for(let i = 0; i < list.length; i++) {
        castlesForRandom.push(castles[list[i]])
    }
    return castlesForRandom
}

function random() {
    let selectedCastlesIndexes = getSelectedCastleIndexes()
    let castlesForRandom = compareLists(selectedCastlesIndexes)
    if(castlesForRandom == undefined) {
        alert('No data')
        return
    }
    let randomCastle =  royalRandom(castlesForRandom)
    new IconR('eny_box', 'output_box', randomCastle)
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