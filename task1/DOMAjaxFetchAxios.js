var int1= document.getElementById("tg1");
var int2 = document.getElementById("tg2");
var int3 = document.getElementById("tg3");
var btn1 = document.getElementById("btg");
var tb = document.getElementById("body0");
var counter = 1;
btn1.addEventListener("click", function ()
 {

        var tr = document.createElement("tr");
        var text1 = document.createElement("th");
            text1.innerText = counter++;
                tr.appendChild(text1);
            
        var text2 = document.createElement("th");
            text2.innerText = int2.value;
            tr.appendChild(text2);
                
        var text3 = document.createElement("th");
            text3.innerText = int3.value;
            tr.appendChild(text3);
            
            
            tb.appendChild(tr);
            int2.value = " ";
            int3.value = " ";
    
})