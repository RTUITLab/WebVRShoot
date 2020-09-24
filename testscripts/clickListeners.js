Sun.addEventListener('click', function(event)
{
    if (!light)
    {
        Hemi.setAttribute("light","intensity",2)
        Direct.setAttribute("light","intensity",0.17)
        Sky_box.setAttribute("src","models/Day_sky.png")
        Sun.setAttribute("visible","true")
        Moon.setAttribute("visible","false")
        light=!light;
    }
    else
    {
        Hemi.setAttribute("light","intensity",1.3)
        Direct.setAttribute("light","intensity",0.1)
        Sky_box.setAttribute("src","models/Night_sky.png")
        Sun.setAttribute("visible","false")
        Moon.setAttribute("visible","true")
        light=!light;
    }
})
Play_b.addEventListener('click',function(event){
    Press_mus.emit("press")
    console.log('clicked')
  //  startgame()
})