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
          var arrofcon = contents.split("\r");
          var score = 0;

          arrofcon.forEach(element => {
            var results = element.split(",");
            var section1 = results[0];
            var section2 = results[1];

            var s1_split = section1.split("-");
            var s1_min = s1_split[0];
            var s1_max = s1_split[1];

            var s2_split = section2.split("-");
            var s2_min = s2_split[0];
            var s2_max = s2_split[1];

            var arr1 = [];
            var arr2 = [];

            for(var i = 1; i < parseInt(s1_max) + 1; i++)
            {
                if(i >= s1_min) arr1.push(i);
            }

            for(var i = 1; i < parseInt(s2_max) + 1; i++)
            {
                if(i >= s2_min) arr2.push(i);
            }

            //console.log(arr1, arr2);

            var containsAll1 = arr1.some(element => {
                return arr2.includes(element);
            });

            var containsAll2 = arr2.some(element => {
                return arr1.includes(element);
            });

            if(containsAll1 || containsAll2) score++;
          });

          //console.log(score);

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