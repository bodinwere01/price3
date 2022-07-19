const slider = document.getElementById("myRange");
const output = document.getElementById("price");
const output2 = document.getElementById("price2");
const output3 = document.getElementById("typeprice");
const output4 = document.getElementById("typeprice2");
var progressbar = document.getElementById("probar");
const pageview= document.getElementById("pageview");
var checkbox= document.getElementById("checkbox");





let result = 16;
let selection = "month";

function howtoResult(price,int){
  if(int === "month"){
    result= price;
  }else if(int === "year"){
    result = price*12*0.75;
  }
}


function sliderChange(value) {
    switch(value){
      case "1":
         result =8;
         howtoResult(result,selection);
        slider.setAttribute("aria-valuenow",1);
        pageview.innerHTML="10K PAGEVIEWS"
        progressbar.style.width = "0%";   
        output.innerHTML = "$"+result+".00";
  output2.innerHTML =  "$"+result+".00";
  output3.innerHTML = "/"+selection;
  output4.innerHTML = "/"+selection;
  break;
    case "2":
      result = 12;
      howtoResult(result,selection);
      slider.setAttribute("aria-valuenow",2);
        pageview.innerHTML="50K PAGEVIEWS"
        progressbar.style.width = "25%";   
        output.innerHTML = "$"+result+".00";
        output2.innerHTML =  "$"+result+".00";
        output3.innerHTML = "/"+selection;
        output4.innerHTML = "/"+selection;
  break;
   case "3":
    result = 16;
    howtoResult(result,selection);
    slider.setAttribute("aria-valuenow",3);
        pageview.innerHTML="100K PAGEVIEWS"
         progressbar.style.width = "50%";   
         output.innerHTML = "$"+result+".00";
         output2.innerHTML =  "$"+result+".00";
         output3.innerHTML = "/"+selection;
         output4.innerHTML = "/"+selection;
   break;
   case "4":
    result = 24;
    howtoResult(result,selection);
    slider.setAttribute("aria-valuenow",4);
        pageview.innerHTML="500K PAGEVIEWS"
          progressbar.style.width = "75%";   
          output.innerHTML = "$"+result+".00";
          output2.innerHTML =  "$"+result+".00";
          output3.innerHTML = "/"+selection;
          output4.innerHTML = "/"+selection;
   break;
   case "5":
   result = 36;
    howtoResult(result,selection);
    slider.setAttribute("aria-valuenow",5);
        pageview.innerHTML="1M PAGEVIEWS"
         progressbar.style.width = "100%";   
         output.innerHTML = "$"+result+".00";
         output2.innerHTML =  "$"+result+".00";
         output3.innerHTML = "/"+selection;
         output4.innerHTML = "/"+selection;
  break;
  default:
    break;
    }
}

function pricetoggle(value){
  if(value === true){
    selection = "year";
    checkbox.setAttribute("aria-checked",true);
    sliderChange(slider.value);
  }else{
    selection = "month";
    checkbox.setAttribute("aria-checked",false);
    sliderChange(slider.value);
  }
};
slider.oninput = function(){
  sliderChange(this.value);
};


checkbox.oninput = function(){
  pricetoggle(this.checked);
};

