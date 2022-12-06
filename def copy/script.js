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
          var max = 0;
          var nowmax = 0;
          arrofcon.forEach(element => {
            console.log(parseInt(element));
            if(parseInt(element) > 0)
            {
                var add = parseInt(element);
                nowmax += add;
            }
            else{
                if(nowmax > max)
                {
                    max = nowmax;
                }
                nowmax = 0;
            }
          });

          displayContents(max);
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