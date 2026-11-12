import gsap from "gsap"
import { SplitText } from "gsap/all";

export const heroContentAnimation = () => {
    gsap.registerPlugin(SplitText)
    const t1 = gsap.timeline();

    t1.from(".hero-title",{
        opacity : 0,
        y: 10,
        duration : 0.85,
        ease : "power3.inOut"
    })

    const split = new SplitText(".hero-heading",{
        type : "words",
        mask : "words",
        autoSplit : true,
    })

    t1.from(split.words , {
        yPercent : 110,
        opacity : 0,
        autoAlpha : 0,
        duration : 1.2,
        stagger : 0.115,
        ease : "power3.inOut"
    },"-=0.4")

    const split2 = new SplitText(".hero-paragraph",{
        type : "chars",
        mask : "chars",
        autoSplit : true,
    })

    t1.from(split2.chars , {
        yPercent : 110,
        opacity : 0,
        autoAlpha : 0,
        duration : 1.2,
        stagger : 0.01,
        ease : "power3.inOut"
    },"-=0.85")

    t1.from(".hero-button",{
        xPercent : -110,
        opacity : 0,
        duration : 0.45,
        stagger : 0.2,
        ease : "sine.inOut"
    },"-=0.4")
    t1.from(".hero-button-2",{
        xPercent : -110,
        opacity : 0,
        duration : 0.45,
        stagger : 0.2,
        ease : "elastic.inOut"
    },"<=0.2")

    t1.from(".hero-images > *",{
        yPercent : 110,
        opacity : 0,
        duration : 0.45,
        stagger : 0.2,
        ease : "bounce.inOut"
    },">")

    const split3 = new SplitText(".hero-clients-data" , {
        type : "chars",
        mask : "chars",
        autoSplit : true,
    })

    t1.from(split3.chars , {
        yPercent : 110,
        opacity : 0,
        duration : 1.2,
        stagger : 0.01,
        ease : "power4.inOut"
    },"-=0.45")



    return t1;
}