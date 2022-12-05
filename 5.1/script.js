const arr1 = ["L", "C", "G", "M", "Q"];
const arr2 = ["G", "H", "F", "T", "C", "L", "D", "R"];
const arr3 = ["R", "W", "T", "M", "N", "F", "J", "V"];
const arr4 = ["P", "Q", "V", "D", "F", "J"];
const arr5 = ["T", "B", "L", "S", "M", "F", "N"];
const arr6 = ["P", "D", "C", "H", "V", "N", "R"];
const arr7 = ["T", "C", "H"];
const arr8 = ["P", "H", "N", "Z", "V", "J", "S", "G"];
const arr9 = ["G", "H", "F", "Z"];
//56
const arr = [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];

async function ready(){
    console.log("DOM is ready");
    
    function readSingleFile(e) {
        var file = e.target.files[0];
        if (!file) {
          return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
          var contents = e.target.result;
          var arrofcon = contents.split("\r\n");

          arrofcon.forEach(element => {
            var moveArr = element.match(/\d+/g,'');
            for(var i = 0; i < moveArr[0]; i++)
            {
              arr[parseInt(moveArr[2] - 1)].unshift(arr[parseInt(moveArr[1] - 1)].shift());
            }
          });

          var crate = [];

          arr.forEach((element, i) => {
            crate.push(arr[i].shift());
          });

          displayContents(crate.join(""));
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

document.addEventListener("DOMContentLoaded", ready);