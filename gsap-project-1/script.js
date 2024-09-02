var tl = gsap.timeline();

tl.from("#navbar h1",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.3
})
tl.from("img",{
    x:50,
    opacity:0,
    rotate:45,
    duration:0.5,
    stagger:0.5
})
tl.from("#main h2",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.1
})
tl.from("#main h3",{
    x:500,
    opacity:0,
    duration:0.8
})