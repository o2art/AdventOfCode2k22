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

          function Enum(values){
            for( var i = 0; i < values.length; ++i ){
                this[values[i]] = i + 1;
            }
            return this;
        }

          var score = 0;
          var win = 6;
          var draw = 3;
          var lose = 0;

          var type = new Enum(["X", "Y", "Z"]);
          console.log(type.X, type.Y, type.Z);

          arrofcon.forEach(element => {
            if(element.includes("A"))
            {
                if(element.includes("X"))
                {
                    score += lose + type.Z;
                }
                else if(element.includes("Y"))
                {
                    score += draw + type.X;
                }
                else
                {
                    score += win + type.Y;
                }
            }
            else if(element.includes("B"))
            {
                if(element.includes("X"))
                {
                    score += lose + type.X;
                }
                else if(element.includes("Y"))
                {
                    score += draw + type.Y
                }
                else
                {
                    score += win + type.Z;
                }
            }
            else
            {
                if(element.includes("X"))
                {
                    score += lose + type.Y;
                }
                else if(element.includes("Y"))
                {
                    score += draw + type.Z;
                }
                else
                {
                    score += win + type.X;
                }
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