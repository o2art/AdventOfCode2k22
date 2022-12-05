const alphabet = new Enum([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ]);

function ready(){
    console.log("DOM is ready");
    
    function readSingleFile(e) {
        var file = e.target.files[0];
        if (!file) {
          return;
        }

        var reader = new FileReader();
        reader.onload = function(e) {
            var contents = e.target.result;
            var arrofcon = contents.split("\r");

            var priorities = [];

            arrofcon.forEach(element => {
                var middle = Math.floor(element.length / 2);

                var s1 = element.substr(1, middle);
                var s2 = element.substr(middle + 1);

                var arr1 = s1.split("");
                var arr2 = s2.split("");

                arr1.every(element => {
                    if(arr2.includes(element)){
                        priorities.push(element);
                        return false;
                    }
                    return true;
                });
            });

            var score = 0;
            priorities.forEach(element => {
                score += alphabet[element];
            });

            displayContents(score);
        };

        reader.readAsText(file);
    }
      
    function displayContents(contents) {
        var element = document.getElementById('file-content');
        element.textContent = contents;
    }
      
      document.getElementById('file-input')
        .addEventListener('change', readSingleFile, false);
}

function Enum(values)
    {
        for( var i = 0; i < values.length; ++i ){
            this[values[i]] = i + 1;
        }
        return this;
    }

document.addEventListener("DOMContentLoaded", ready);