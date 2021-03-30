const {inherits} = require('util')
const {EventEmitter} = require('events')

function Character(name){
    this.name = name
}

// pass all the methods the superConstrutor to a constructor, in this case Character
inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')

chapolin.on('help', ()=>console.log(`Eu o ${chapolin.name} colorado`))

console.log('Oh! E agora, que poderá me defender')
chapolin.emit('help')
/*
const ev = new EventEmitter()


// executes everytime when the event is emitted
ev.on('saySomething',(message)=>{
    console.log('I hear you', message)
})


// executes once when the event is emitted
ev.once('saySomething',(message)=>{
    console.log('I hear you', message)
})

// call a event
ev.emit('saySomething', 'Alex')
ev.emit('saySomething', 'A')
*/

