var elements = document.querySelectorAll(".container div")

for(i=0; i < elements.length; i++){

     elements[i].onclick = function(){

        var el = elements[0]
        while(el){
            console.log(el)
            if(el.tagName === "DIV"){             
                el.classList.remove("active")
            }
            el= el.nextSibling
        }
        this.classList.add("active")
    }

}




