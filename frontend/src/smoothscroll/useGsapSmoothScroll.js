
// useGsapSmoothScroll.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapSmoothScroll = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(container, {
      y: () => -(container.scrollHeight - window.innerHeight),
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    const disableScroll = (e) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    };
    
    window.addEventListener("scroll", disableScroll);
    return () => window.removeEventListener("scroll", disableScroll);
  }, []);

  return containerRef;
};

export default useGsapSmoothScroll;
