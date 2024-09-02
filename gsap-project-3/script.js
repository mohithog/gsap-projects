gsap.to("#page2 img" , {
    width : "100%" ,

    scrollTrigger:{
        scroller: "body" ,
        trigger: "#page2",
        markers:true ,
        start:"top 0",
        end:"top -100%",
        scrub: 2 ,
        pin:true
    }
})