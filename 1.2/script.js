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
          var max1 = 0;
          var max2 = 0;
          var max3 = 0;
          var nowmax = 0;

          arrofcon.forEach(element => {
            if(parseInt(element) > 0)
            {
                var add = parseInt(element);
                nowmax += add;
            }
            else{
                if(nowmax >= max1)
                {
                    max3 = max2;
                    max2 = max1;
                    max1 = nowmax;
                }
                else if(nowmax >= max2)
                {
                    max3 = max2;
                    max2 = nowmax;
                }
                else if(nowmax >= max3)
                {
                    max3 = nowmax;
                }
                //console.log(max1, max2, max3, nowmax);
                nowmax = 0;
            }
          });

          var sum = [max1, max2, max3].reduce((a,b) => a  + b, 0);

          displayContents(sum);
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