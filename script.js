var tl = gsap.timeline()


tl.to(".pg1",{
    y:"80vh",
    scale:0.7,
    duration:0
})


tl.to(".pg1",{
    y:"0vh",
    delay:1,
    duraton:1
})
tl.to(".pg1",{
    rotate:360,
    scale:1,
    delay:1.5,
    duration:1.3
    
})