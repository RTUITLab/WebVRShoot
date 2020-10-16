Play_c.addEventListener('mousedown',function(event){
    Press_mus.emit("press")
    startgame()
})
Text_c.addEventListener('mousedown',function(event)
{
    Open_menu()
    Press_mus.emit("Press")

})
Sun.addEventListener('mousedown', function(event)
{
    if (!light)
    {
        Hemi.setAttribute("light","intensity",2)
        Direct.setAttribute("light","intensity",0.17)
        Sky_box.setAttribute("src","#Day_sky_tex")
        Sun.setAttribute("visible","true")
        Moon.setAttribute("visible","false")
        light=!light;
    }
    else
    {
        Hemi.setAttribute("light","intensity",1.3)
        Direct.setAttribute("light","intensity",0.1)
        Sky_box.setAttribute("src","#Night_sky_tex")
        Sun.setAttribute("visible","false")
        Moon.setAttribute("visible","true")
        light=!light;
    }
})
Casual_c.addEventListener('mousedown',function(event)
{
    Press_mus.emit("Press")
    Casual_b.children[0].setAttribute('visible','true')
    Realistic_b.children[0].setAttribute('visible','false')
    Right_hand.setAttribute('raycaster','showLine',true)
    Cursor.setAttribute('visible',"true")
})
Realistic_c.addEventListener('mousedown',function(event)
{
    Press_mus.emit("Press")
    Casual_b.children[0].setAttribute('visible','false')
    Realistic_b.children[0].setAttribute('visible','true')
    Right_hand.setAttribute('raycaster','showLine',false)
    Cursor.setAttribute('visible',"false")
})
Settings_c.addEventListener('mousedown',function(event)
{
    Open_settings()
    Press_mus.emit("Press")
})
Easy_c.addEventListener('mousedown',function(event)
{
    Press_mus.emit("Press")
    difficulty = "Easy"
    Easy_b.children[0].setAttribute('visible','true')
    Medium_b.children[0].setAttribute('visible','false')
    Hard_b.children[0].setAttribute('visible','false')
})
Medium_c.addEventListener('mousedown',function(event)
{
    Press_mus.emit("Press")
    difficulty = "Medium"
    Easy_b.children[0].setAttribute('visible','false')
    Medium_b.children[0].setAttribute('visible','true')
    Hard_b.children[0].setAttribute('visible','false')
})
Hard_c.addEventListener('mousedown',function(event)
{
    Press_mus.emit("Press")
    difficulty = "Hard"
    Easy_b.children[0].setAttribute('visible','false')
    Medium_b.children[0].setAttribute('visible','false')
    Hard_b.children[0].setAttribute('visible','true')
})
Back_c.addEventListener('mousedown',function(event)
{
    Close_settings()
    Press_mus.emit("Press")
})
Effect_down_c.addEventListener('mousedown',function(event)
{
    if (Head.getAttribute('sound-controller').esound>0)
    {
    Head.setAttribute('sound-controller','esound',Math.round((Head.getAttribute('sound-controller').esound-0.1)*10)/10)
    }
    Press_mus.emit("Press")
})
Effect_up_c.addEventListener('mousedown',function(event)
{
    if (Head.getAttribute('sound-controller').esound<1)
    {
    Head.setAttribute('sound-controller','esound',Math.round((Head.getAttribute('sound-controller').esound+0.1)*10)/10)
    }
    Press_mus.emit("Press")
})
Music_down_c.addEventListener('mousedown',function(event)
{
    if (Head.getAttribute('sound-controller').msound>0)
    {
    Head.setAttribute('sound-controller','msound',Math.round((Head.getAttribute('sound-controller').msound-0.1)*10)/10)
    }
    Press_mus.emit("Press")
})
Music_up_c.addEventListener('mousedown',function(event)
{
    if (Head.getAttribute('sound-controller').msound<1)
    {
    Head.setAttribute('sound-controller','msound',Math.round((Head.getAttribute('sound-controller').msound+0.1)*10)/10)
    }
    Press_mus.emit("Press")
})
Master_down_c.addEventListener('mousedown',function(event)
{
    if (Head.getAttribute('sound-controller').massound>0)
    {
    Head.setAttribute('sound-controller','massound',Math.round((Head.getAttribute('sound-controller').massound-0.1)*10)/10)
    }
    Press_mus.emit("Press")
})
Master_up_c.addEventListener('mousedown',function(event)
{
    if (Head.getAttribute('sound-controller').massound<1)
    {
    Head.setAttribute('sound-controller','massound',Math.round((Head.getAttribute('sound-controller').massound+0.1)*10)/10)
    }
    Press_mus.emit("Press")
})
Reset.addEventListener('mousedown',function(event){
    textplane("Game was restared")
})