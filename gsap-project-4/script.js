gsap.to("#page2 h1" , {
    transform:"translateX(-120%)" ,

    scrollTrigger:{
        scroller:"body",
        trigger:"#page2",
        markers:true,
        start:"top 0" ,
        end:"top -120%",
        scrub: 2,
        pin:true
    }
})