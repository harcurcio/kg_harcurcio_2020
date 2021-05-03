//Harlie Curcio
//Kargo Software Engineer Intern Assessment
let num = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
let phonetic = []

function intToString(arr) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] == 0) {
      phonetic.push('Zero')
    } else {
      //gets int in arr and uses that for index of num
      phonetic.push(num[arr[i]])
    }
  }
  console.log(phonetic)
}

intToString(process.argv.slice(2)) //slice(2) gets rid of the file location args