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
          var arrofcon = contents.split("");
          var letters = [];
          var score = 0;

          arrofcon.every(element => {
            if(letters.includes(element))
            {
              letters = [];
              letters.push(element);
            }
            else{
              letters.push(element);
            }
            score++;
            if(letters.length == 4)
            {
              return false;
            }
            else {
              return true
            }
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

document.addEventListener("DOMContentLoaded", ready);