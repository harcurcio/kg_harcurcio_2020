//Harlie Curcio
//Kargo Software Engineer Intern Assessment
let words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
let phonetic = []

function intToString(arr) {
  for(let i=0; i<arr.length; i++) {
    if (arr[i]>9) { //if arr[i] is multiple digits
      splitDigits(arr[i])
    } else if (arr[i] <= 9 && arr[i] >= 0) { //if arr[i] is a single digit
      phonetic.push(words[arr[i]]) //gets int in arr and uses that for index of words
    } else { //invalid input
      phonetic.push('') 
    }
  }
  console.log(phonetic)
}

function splitDigits(num) {
  let digits = num.toString().split('')
  //maps the strings back to numbers
  let splitDigits = digits.map(Number)
  
  for(let i=0; i<splitDigits.length; i++) {
    splitDigits[i] = words[splitDigits[i]]
  }
  //concatenate the digit strings
  splitDigits = splitDigits.join('')
  phonetic.push(splitDigits)
}

intToString(process.argv.slice(2)) //slice(2) gets rid of the file location args