function cycle(arr){
    let sum = 0
    for(let i = 0; i < arr.length;i++){
        sum += i
        console.log(sum)
    }
}
cycle([1,2,3,4,5,6])

let sum = 0
function cyclesecond(arr){
    for(let i = 0; i < arr.length;i++){
        if(arr[i] >= 0){
            sum += arr[i]
        }
    }
}
cyclesecond([-1,-2,-3,4,5,6])
console.log(sum)

function cyclethird(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > 3){
            console.log(arr[i])
        }
    }
}
cyclethird("Java","JS","Python","TypeScript","C++","C#","Basic")

function cyclefour(arr){
    for(let i = 0; i < arr.length;i++){
        if(arr[i][0] === 'A' || arr[i][0] === 'U'){
            console.log (arr[i])
        }
    }
    return arr[i]
}
cyclethird ("Alvi", "Milana", "Dukhvah", "Muhammad", "Mansur", "Ahmad", "Antonio")

function deleteMessages(array) {
    let newArray = []
    for (let i = 0; i < array.length;i++) {
        if (array[i].deleted !== true) {
            newArray.push(array[i])
        }
    }
    return newArray
}

const messages = [
    { text: 'hello', deleted: true },
    { text: 'bue', deleted: false },
    { text: 'js is a beauty', deleted: false },
    { text: 'pair programming', deleted: true },
    { text: 'this is my horse', deleted: false },
];

console.log(deleteMessages(messages))