// Declaration of Variables
var saveAns = []
var saveEquations = []
let firstNum, secondNum, op
// Function to get value in Input Display
let currentVal = document.getElementById('input')
function getVal(num) {
  if (currentVal.value == 0) {
    currentVal.value = num
  } else {
    currentVal.value += num
  }
}
// Function To Get Anwser In Calculator
let equation = document.querySelector('.previous')
let ansFunc = document.querySelector('.equal')
ansFunc.addEventListener('click', ans)
function ans() {
  equation.value = currentVal.value + ' = '
  currentVal.value = eval(currentVal.value)
  saveAns.push(currentVal.value)
  saveEquations.push(equation.value)
  showHistory()
}

// Delete Function
let delVal = document.querySelector('#delete')
delVal.addEventListener('click', function () {
  let str = currentVal.value
  let remove = str.slice(0, -1)
  currentVal.value = remove
})

// Function To All Clear Display
let clear = document.querySelector('.clear')
clear.addEventListener('click', allClear)
function allClear() {
  currentVal.value = 0
  equation.value = ''
}

//Function For Open and Close History Tab
let icon = document.querySelector('.icon i')
let history = document.querySelector('.history')
let back = document.querySelector('.back')
back.addEventListener('click', function () {
  history.style.display = 'none'
})
icon.addEventListener('click', function () {
  history.style.display = 'block'
})

// Function For Show Saved History
function showHistory() {
  for (i = 0; i < saveEquations.length; i++) {
    var lastHistory =
      "<div class='historyBox'><span>" +
      saveEquations[i] +
      '</span><span>' +
      saveAns[i] +
      '</span></div>'
  }

  document.getElementById('saveHis').innerHTML += lastHistory
}
