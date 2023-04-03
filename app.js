

const search = ()=>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("grid")
    const vedio = document.querySelectorAll(".each-user")
    const vedio_name= storeitems.getElementsByTagName("p")

    for(var i= 0; i< vedio_name.length; i++){
        let match = vedio[i].getElementsByTagName('p')[0];
        if (match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                vedio[i].style.display = " ";

            }else{
                vedio[i].style.display = "none ";
            }


        
        }
    }
    
}