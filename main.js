// const TypeWriter = function(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement
//     this.words = words
//     this.txt = ''
//     this.wordIndex = 0
//     this.wait = parseInt(wait, 10)
//     this.type()
//     this.isDeleting = false
// }

// // TYPE METHOD
// TypeWriter.prototype.type = function(){
//     // CURRENT INDEX OF WORD
//     const current = this.wordIndex % this.words.length
//     // GET FULL TEXT OF CURRENT WORD
//     const fullTxt = this.words[current]
//     // CHECK IF DELETING
//     if(this.isDeleting){
//         // REMOVE A CHARACTER
//         this.txt = fullTxt.substring(0, this.txt.length - 1)

//     } else{
//         // ADD A CHARACTER
//         this.txt = fullTxt.substring(0, this.txt.length + 1)
//     }

//     // INSERT TXT INTO ELEMENT
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

//     // INITIAL  TYPE SPEED
//     let typeSpeed = 300
//     if(history.isDeleting){
//         typeSpeed /= 2
//     }

//     // IF WORD IS COMPLETE
//     if(!this.isDeleting && this.txt === fullTxt){
//         // PAUSE AT END
//         typeSpeed = this.wait
//         // SET DELETE TO TRUE
//         this.isDeleting = true
//     } else if(this.isDeleting && this.txt === ''){
//         this.isDeleting = false
//         // MOVE TO NEXT WORD
//         this.wordIndex++
//         // PAUSE BEFORE TYPING NEW WORD
//         typeSpeed = 500
//     }

//     setTimeout(() => this.type(), typeSpeed)
// }

// // INIT ON DOM LOAD
// document.addEventListener('DOMContentLoaded', init)

// // INIT APP
// function init(){
//     const txtElement = document.querySelector('.txt-type')
//     const words = JSON.parse(txtElement.getAttribute('data-words'))
//     const wait = txtElement.getAttribute('data-wait')
//     // INIT TYPEWRITER
//     new TypeWriter(txtElement, words, wait)
// }


class TypeWriter{
    constructor(txtElement, words, wait){
        this.txtElement = txtElement
        this.words = words
        this.txt = ''
        this.wordIndex = 0
        this.wait = parseInt(wait, 10)
        this.type()
        this.isDeleting = false
    }

    type(){
        // CURRENT INDEX OF WORD
    const current = this.wordIndex % this.words.length
    // GET FULL TEXT OF CURRENT WORD
    const fullTxt = this.words[current]
    // CHECK IF DELETING
    if(this.isDeleting){
        // REMOVE A CHARACTER
        this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else{
        // ADD A CHARACTER
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    // INSERT TXT INTO ELEMENT
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

    // INITIAL  TYPE SPEED
    let typeSpeed = 300
    if(history.isDeleting){
        typeSpeed /= 2
    }

    // IF WORD IS COMPLETE
    if(!this.isDeleting && this.txt === fullTxt){
        // PAUSE AT END
        typeSpeed = this.wait
        // SET DELETE TO TRUE
        this.isDeleting = true
    } else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false
        // MOVE TO NEXT WORD
        this.wordIndex++
        // PAUSE BEFORE TYPING NEW WORD
        typeSpeed = 500
    }

    setTimeout(() => this.type(), typeSpeed)
    }
}

// INIT ON DOM LOAD
document.addEventListener('DOMContentLoaded', init)

// INIT APP
function init(){
    const txtElement = document.querySelector('.txt-type')
    const words = JSON.parse(txtElement.getAttribute('data-words'))
    const wait = txtElement.getAttribute('data-wait')
    // INIT TYPEWRITER
    new TypeWriter(txtElement, words, wait)
}
