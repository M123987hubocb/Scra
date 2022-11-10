const words = ["hippopotamus",
                "goat",
                "donkey",
                "girffe",
                "flaningo",
                "sheep",
                "elephant",
                "dolphin",
                "whale",
                "bear",
]


let word = randomWord(words); //calling the function randomWordsand passing words array in that.

const mixed = scramble(word); //Whatever result we got word, passing that to scramble function

addText(mixed)


function randomWord(my_array) {
   var num = Math.floor((Math.random() *  my_array.length) +1);
   console.log(my_array [num])
   return my_array[num];
}

function scramble(word) {
    const scrambledArray = [];
    console.log("Inthebeginning"+word)
    word = word.split(''); //It will split all letters of the word to separate letters
    console.log("aftersplitting"+word)
    while(word.length > 0) {    //creating loop
      var maxIndex = word.length;
      var randomIndex = Math.floor(Math.random()*maxIndex);
      scrambledArray.push(word[randomIndex]) //getting the letter from position of randomIndex and saving that letter in our array
  word.splice(randomIndex, 1) //removing that letter from 'word' array
      console.log("aftersplicing"+word)
    }
    return scrambledArray.join(''); //join() returns all values of an array as a string
  }

 
  function addText (text) {
    document.getElementById('text1').innerHTML = text;
  }

  function check() {
    var answer = document.getElementById('input0').value;
    console.log(word)
    console.log(answer)
    if(answer == word) {
      alert("Correct answer");
      newWord();
    } else {
      alert("Incorrect answer. Try again!");
    }
    console.log("checking");
  }


  function newWord() {
    word = randomWord(words);
    var scramble = scramble(word);
    addText(scramble);
    document.getElementById('input0').value = '';
  }

  const button  = document.getElementById("buttons");
button.addEventListener("click", check);