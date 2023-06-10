let info = {
    name: 'JAFAR',
    age: 18,
    married: false,
    family: true,
    adress: {
        home: 'Registan',
        location: 'nearby Emirkhan',
        zipNumber: 7462232,
        numberOfhome: 964,
        phoneNumber: +99865222330
    },
    neighborsName: ['Begzod aka', 'Muhriddin', 'Begi aka']
}

let others = {
    name: 'Begzod',
    age: 'unknown',
    brain: false,
    wellKnown: true,
    phoneNumber: {
        cellPhone: 56644984651,
        extraPhoneNumber: 186444,
        secondName: 'Aka Begzod',
    }
}

let keys = Object.keys(info)
console.log(keys);

let value = Object.values(info)
console.log(value);

let sign = Object.assign({}, info, {others: others})
console.log(sign);
let arr = Object.entries(sign)
console.log(arr);

let types = {
number: [],
object: [],
boolean: [],
string: []
}


 arr.filter(begzod => {
if ((typeof (begzod)) === 'number'){
    types.number.push(begzod)
} else if ((typeof (begzod)) === 'object'){
    types.object.push(begzod)
} else if ((typeof (begzod)) === 'boolean'){
    types.boolean.push(begzod)
} else if ((typeof (begzod)) === 'string'){
    types.string.push(begzod)
}
})
console.log(types);