async function main(){
    let url = await fetch("https://covid-19.dataflowkit.com/v1")
    let data= await url.json()
    let arr= await data
    return arr 


}
async function display(fun){
    try{
        
        let text= await main()
        for(i=0;i<text.length-1;i++){
        
         names=text[i]["Country_text"]
         totc=text[i]["Total Cases_text"]
         totd=text[i]["Total Deaths_text"]
         totr=text[i]["Total Recovered_text"]
         newd=text[i]["New Deaths_text"]
         newc=text[i]["New Cases_text"]
         ac=text[i]["Active Cases_text"]
         lu=text[i]["Last Update"]
        




        let first=document.createElement("ul")
        first.className="p-2 bd-highlight"
        let second=document.createElement("div")
        second.className="card "
        second.style="width: 18rem"
        
        
         let third=document.createElement("div")
         third.className="card-body "
         
         third.innerHTML=`<h5 class="card-title">${names}</h5>
         <br>
         <p class="card-text  "><b>Total cases:</b> ${totc}<br>
         <b>Total deaths:</b> ${totd}<br>
         <b>Total recovered:</b> ${totr}<br>
         <b>New deaths:</b> ${newd}<br>
         <b>New cases:</b> ${newc}<br>
         <b>Active cases:</b> ${ac}<br>
         <b>Last updated:</b> ${lu}<br>
         </p> `
         
         second.appendChild(third)
        first.appendChild(second)
        let s=document.getElementById("id")
        s.appendChild(first)
        
    }
    fun()
    }catch(err){
        console.log(err);}
    }
  

display(find)
function find(){
    val=document.getElementById("search").value
    val=val.toLowerCase()
    console.log(val);

     value=document.querySelectorAll("ul")
     Array.from(value).forEach(function(valuee){
         var ss=valuee.querySelector(".card-title").textContent
         if(ss.toLowerCase().indexOf(val)!= -1){
             valuee.style.display="block"

         }
         else{
            valuee.style.display="none"
         }
     })


}



 
