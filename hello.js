function hexTorgb(hex){
    hex = hex.toString();

    console.log(hex);
    if(hex.charAt(0)=="#" && hex.length == 7)
    hex = hex.substring(1,7);

    else if(hex.charAt(0)!="#" && hex.length == 6)    
    hex = hex;

    else
        return "Not a valid hex number";
    
    document.body.style.backgroundColor = "#"+hex;
    var nun = parseInt(hex,16);
    r = (nun >> 16) & 255;
    g = (nun >> 8) & 255;
    b = nun & 255;

    return "rgb("+r+","+g+","+b+")";
}

function changeAns(){

    var hex = document.getElementById("GetHex").value;
    var ans = hexTorgb(hex);
    var my = document.getElementById("PutAns");
    my.innerHTML = ans;
}