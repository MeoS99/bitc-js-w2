var n="java scripting"

/// BT1

function ucFirst(n) {
    var splitn = n.toLowerCase().split(" ");
   
    for (var i = 0; i < splitn.length; i++) {

        splitn[i] = splitn[i].charAt(0).toUpperCase() + splitn[i].substring(1);     
      
    }
    
    return splitn.join(" "); 
 }
 document.write(ucFirst(n));
 
// BT2

document.write(n.replace(/a/g,"4").replace(/c/g,"3").replace(/i/g,"2").trim());

// BT3

    if(n.length>=3){
        if(n.slice(-3)=="ing"){
            document.write(n+"ly");
        }
        else{
            document.write(n+"ing");
        }
    }else{
        document.write(n);
    }
