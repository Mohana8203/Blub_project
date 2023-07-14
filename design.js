function changeImage()
{
    var pic = document.getElementById("bulb");
    if(pic.src.match("on"))
    {
        console.log("ON");
        pic.src = "bulb_off1.jpg";

    }
    else
    {
        console.log("OFF");
        pic.src = "bulb_on1.jpg";
    }
}