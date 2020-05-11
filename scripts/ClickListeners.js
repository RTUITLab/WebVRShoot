Play_b.addEventListener('click',function(event){
    Press_mus.emit("press")
    startgame()
})
Text_p.addEventListener('click',function(event)
{
    Open_menu()
    Press_mus.emit("Press")

})
Sun.addEventListener('click', function(event)
{
    if (!light)
    {
        Hemi.setAttribute("light","intensity",2)
        Direct.setAttribute("light","intensity",0.17)
        Sky_box.setAttribute("src","models/Day_sky.png")
        Sun.setAttribute("gltf-model","#Sun_glb")
        light=!light;
    }
    else
    {
        Hemi.setAttribute("light","intensity",1.3)
        Direct.setAttribute("light","intensity",0.1)
        Sky_box.setAttribute("src","models/Night_sky.png")
        Sun.setAttribute("gltf-model","#Moon_glb")
        light=!light;
    }
})
Casual_b.addEventListener('click',function(event)
{
    Press_mus.emit("Press")
    Right_hand.setAttribute('raycaster','showLine',true)
    Casual_b.children[1].setAttribute('color','white')
    Real_mus.children[1].setAttribute('color','black')
})
Realistic_b.addEventListener('click',function(event)
{
    Press_mus.emit("Press")
    Right_hand.setAttribute('raycaster','showLine',false)
    Casual_b.children[1].setAttribute('color','black')
    Realistic_b.children[1].setAttribute('color','white')
})
Settings_b.addEventListener('click',function(event)
{
    Open_settings()
    Press_mus.emit("Press")
})
Easy_b.addEventListener('click',function(event)
{
    Press_mus.emit("Press")
    difficulty = "Easy"
    Easy_b.children[1].setAttribute('color','white')
    Medium_b.children[1].setAttribute('color','black')
    Hard_b.children[1].setAttribute('color','black')
})
Medium_b.addEventListener('click',function(event)
{
    Press_mus.emit("Press")
    difficulty = "Medium"
    Easy_b.children[1].setAttribute('color','black')
    Medium_b.children[1].setAttribute('color','white')
    Hard_b.children[1].setAttribute('color','black')
})
Hard_b.addEventListener('click',function(event)
{
    Press_mus.emit("Press")
    difficulty = "Hard"
    Easy_b.children[1].setAttribute('color','black')
    Medium_b.children[1].setAttribute('color','black')
    Hard_b.children[1].setAttribute('color','white')
})
Back_b.addEventListener('click',function(event)
{
    Close_settings()
    Press_mus.emit("Press")
})
Effect_down.addEventListener('click',function(event)
{
    if (Head.getAttribute('sound-controller').esound>0)
    {
    Head.setAttribute('sound-controller','esound',Math.round((Head.getAttribute('sound-controller').esound-0.1)*10)/10)
    }
    Press_mus.emit("Press")
})
Effect_up.addEventListener('click',function(event)
{
    if (Head.getAttribute('sound-controller').esound<1)
    {
    Head.setAttribute('sound-controller','esound',Math.round((Head.getAttribute('sound-controller').esound+0.1)*10)/10)
    }
    Press_mus.emit("Press")
})
Music_down.addEventListener('click',function(event)
{
    if (Head.getAttribute('sound-controller').msound>0)
    {
    Head.setAttribute('sound-controller','msound',Math.round((Head.getAttribute('sound-controller').msound-0.1)*10)/10)
    }
    Press_mus.emit("Press")
})
Music_up.addEventListener('click',function(event)
{
    if (Head.getAttribute('sound-controller').msound<1)
    {
    Head.setAttribute('sound-controller','msound',Math.round((Head.getAttribute('sound-controller').msound+0.1)*10)/10)
    }
    Press_mus.emit("Press")
})
Master_down.addEventListener('click',function(event)
{
    if (Head.getAttribute('sound-controller').massound>0)
    {
    Head.setAttribute('sound-controller','massound',Math.round((Head.getAttribute('sound-controller').massound-0.1)*10)/10)
    }
    Press_mus.emit("Press")
})
Master_up.addEventListener('click',function(event)
{
    if (Head.getAttribute('sound-controller').massound<1)
    {
    Head.setAttribute('sound-controller','massound',Math.round((Head.getAttribute('sound-controller').massound+0.1)*10)/10)
    }
    Press_mus.emit("Press")
})