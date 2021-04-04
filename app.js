
var demo = document.querySelector("#demo")
console.log("conected")

function aliendata(mydata,leter){
  
  for (data in mydata){
 
  if(mydata[data].letter===leter){
    var span =document.createElement("span")
    span.innerText=myData[data].shape[1].color[2].legs[5].hands[2].code
    console.log(myData[data].shape[1].color[2].legs[5].hands[2].code)
    demo.appendChild(span)
    
  }
}
}



function split(letr){
  var value=letr.split("")
  for(lt in value){
    console.log(value[lt])
    aliendata(myData,value[lt])
    
  }
 
}

 split("LISUFTINE RPOCGER")

