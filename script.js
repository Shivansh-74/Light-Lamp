const li = document.getElementById("light")
        const btn = document.getElementById("btn").addEventListener("click",light)
        function light(){
            if(li.style.visibility=="visible")
              li.style.visibility="hidden"
              else{
                  li.style.visibility="visible"
              }
        }