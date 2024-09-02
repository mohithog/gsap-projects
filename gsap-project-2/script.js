gsap.from("#page1 #circle",{
    scale : 0,
    delay : 1,
    duration : 2 ,
    rotate: 360
})
gsap.from("#page2 #circle",{
    scale : 0,
    duration : 0.1 ,
    rotate: 360 ,
    //scrollTrigger:"#page2 #circle"

    // same work as before

    // scrollTrigger:{
    //     trigger:"#page2 #circle",
    //     scroller:"body"
    // }
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        markers:true ,
        start:"bottom 50%" , 
        scrub:2     //   chatgpt -     values ->   true    /    1 - 5 for smoothness
    }
})