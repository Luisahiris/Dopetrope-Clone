let countD = 0
let countP = 0
let countB = 0
let bar = document.getElementById('bar')
document.getElementById('dropdown').onclick = () => {
    countD = countD +1
    const element = document.getElementById('first')
    let style = 'inline'
    if (countD % 2 === 0){
        style = 'none'
    }
    element.style.display = style
} 

document.getElementById('phasellus').onclick = () => {
    countP = countP +1
    const element = document.getElementById('second')
    let style = 'inline'
    if (countP % 2 === 0){
        style = 'none'
    }
    element.style.display = style
}
bar.onclick = () => {
    countB = countB +1
    const element = document.getElementById('nav')
    let style = 'none'
    let left = '30px'
    if (countB % 2 !== 0){
        style = 'inline'
        left = '80%'
    }
    bar.style.left = left
    element.style.display = style
}