import gsap from 'gsap';

const animateProgress = () => {
    gsap.set(".progress", {opacity: 0});
    gsap.to(".progress", 3, {
        opacity: 1,
        // ease: ""
    })
    gsap.set(".line-1", {opacity:1, translateY: "100px"});
    gsap.to(".line-1", 1, {
        translateY: 0,
        ease: "slow.out",
    })
    gsap.set(".line-2", {opacity:1, translateY: "200px", delay: 1});
    gsap.to(".line-2", 1.5, {
        translateY: 0,
        // delay: 1,
        ease: "slow.out",
    })
    gsap.set(".line-3", {opacity:1, translateY: "300px", delay: 2});
    gsap.to(".line-3", 2, {
        translateY: 0,
        // delay: 1,
        ease: "slow.out",
    })
    // gsap.set(".line-3", {opacity:1, translateY: "100px"});
    // gsap.to(".line-3", 1, {
    //     translateY: 0,
    //     delay: 2,
    //     ease: "slow.out",
    // })
    // gsap.to(".line-2", 3, {
    //     opacity: 1,
    //     // ease: ""
    // })
    // gsap.to(".line-3", 3, {
    //     opacity: 1,
    //     // ease: ""
    // })
}

const animateHeart = () => {
    gsap.to("#now-red-heart", 2, {
        scale: 4, 
        y: -600,
        // yPercent: -200,
        // rotateY: 200,
        yoyo: true, 
        repeat: 0, 
        ease: "slow.out",
        delay: 3.125
    });
}

const aimateGradientBG = () => {
    gsap.set(".gradient-bg", {display: "block", delay: 3})
    gsap.to(".gradient-bg", 2, {
        yPercent: -125,
        opacity: 1,
        yoyo: true,
        repeat: 0,
        delay: 3,
        ease: "power1.out",
    }).then(() => {
        gsap.set(".hero-text", {
            display: "none"
        })
        gsap.set(".logo-container", {
            display: "none"
        })
        gsap.set(".gradient-bg", {
            display: "none"
        })
    })
}

const animatePageLoad = () => {
    if(window.innerWidth > 720) {
        gsap.set("#page_load", {display: "block", opacity: 0});
        gsap.to("#page_load", 1, {
            opacity: 1,
            yoyo: true, 
            repeat: 0,
            ease: "power4.out",
            delay: 5.5
        });
    } else {
        gsap.set("#page_load_mobile", {display: "block", opacity: 0});
        gsap.to("#page_load_mobile", 1, {
            opacity: 1,
            yoyo: true, 
            repeat: 0,
            ease: "power4.out",
            delay: 5.5
        });
    }
    gsap.set(".gradient-bg", {display: "none"});
}

const showBella = () => {
    gsap.to("#bella", 0.05, {
        display: "block",
        xPercent: "-50",
        ease: "none",
        // yoyo: true, 
        // repeat: 0,
        delay: 6.5
    });
}

const animateBella = () => {
    gsap.set("#bella", {display: "block", x:"-242px"});
    gsap.to("#bella", 0.5, {
        translateX: "0",
        yoyo: true, 
        ease: "slow.out",
        delay: 6.55
    });
    gsap.to("#wink", 0.5, {
        // translateX: "242px",
        display: "block",
        yoyo: true, 
        // repeat: 5,
        ease: "slow.out",
        delay: 9
    });
    gsap.to("#wink", 0.5, {
        // translateX: "242px",
        display: "none",
        yoyo: true, 
        // repeat: 5,
        ease: "slow.out",
        delay: 9.5
    });
}

const animateOncomingCar = () => {
    gsap.to("#oncoming_car", 2, {
        translateX: 0,
        translateY: 0,
        ease: "power4.out",
        delay: 7.6
    });
}

const fadeLogoIn = () => {
    if(window.innerWidth > 720) {
        gsap.fromTo("#bella_logo", {opacity: 0}, {opacity: 1, duration: 1, ease: 'slow.out', delay: 10.65})
    }   else {
        gsap.fromTo("#bella_logo_mobile", {opacity: 0}, {opacity: 1, duration: 1, ease: 'slow.out', delay: 10.65})
        gsap.fromTo("#bella_mobile", {opacity: 0}, {opacity: 1, duration: 1, ease: 'slow.out', delay: 10.65})
    }
}

const animateSocialsLeft = () => {
    gsap.set("#socials_left", {display: "block", opacity: 0,  transformOrigin: "50% 50%" ,scale: 0.4, rotate: "45deg", translate: "0% 21%"});
    gsap.to("#socials_left", 1, {
        rotate: 0,
        opacity: 1,
        scale: 1,
        translateY: "-32%",
        ease: "power1.out",
        delay: 10.65
    });
}

const animateSocialsRight = () => {
    gsap.set("#socials_right", {display: "block", opacity: 0,  transformOrigin: "50% 50%" ,scale: 0.4, rotate: "45deg", translate: "0% 21%"});
    gsap.to("#socials_right", 2, {
        rotate: 0,
        opacity: 1,
        scale: 1,
        translateY: "-32%",
        ease: "power1.out",
        delay: 11.65
    });
}

const animateSocialsMobile = () => {
    gsap.set("#socials_mobile", {display: "block", opacity: 0,  transformOrigin: "50% 50%" ,scale: 0.4, rotate: "45deg", translate: "0% 21%"});
    gsap.to("#socials_mobile", 1, {
        rotate: 0,
        opacity: 1,
        scale: 1,
        translateY: "-32%",
        ease: "power1.out",
        delay: 10.65
    });
}

// const animateWink = () => {
//     gsap.fromTo()
// }

// const gsapEffects = [
//     { 
//       id: "fadeSlideGradient",  
//       props: { opacity: 0.5, x: 300, yoyo: true, repeat: 0 }
//     },
//     { 
//       id: "fadeSlideFrom", 
//       animate: 'from',
//       props: { opacity: 0.25, x: 300, yoyo: true, repeat: 0  }
//     },
//     { 
//       id: "fadeSlideFromTo", 
//       animate: 'fromTo', 
//       props: { opacity: 0.1, x: 300}, 
//       props2: { opacity: 1, x: 600, yoyo: true, repeat: -1  }
//     }
//   ];
  
//   gsapEffects.forEach(effect => {
//     gsap.registerEffect({
//       name: effect.id,
//       defaults: { duration: 1 },
//       extendTimeline: true,
//       effect(targets, config) {
//         if(effect.animate === 'from'){
//           return gsap.from(targets, {...effect.props,...config })
//         } 
//         else if (effect.animate === 'fromTo'){ 
//           return gsap.fromTo(targets, {...effect.props,...config }, {...effect.props2})
//           }
//         else {
//           return gsap.to(targets, {...effect.props,...config })
//         }
//       }
//     });
//   });
  
//   let tl = gsap.timeline();
//   tl.fadeSlideTo(".fadeSlideTo")
//     .fadeSlideFrom(".fadeSlideFrom", 0)
//     .fadeSlideFromTo(".fadeSlideFromTo", 0)
  
export const animate = () => {
    animateProgress();
    animateHeart();
    aimateGradientBG();
    animatePageLoad();
    // showBella();
    animateBella();
    fadeLogoIn();
    if(window.innerWidth > 720) {
        animateOncomingCar();
        animateSocialsLeft();
        animateSocialsRight();
    }   else {
        animateSocialsMobile();
    }
}
