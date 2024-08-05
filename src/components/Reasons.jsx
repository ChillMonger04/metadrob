/* eslint-disable react/no-unescaped-entities */
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reasons = () => {
  const container = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const textElements = gsap.utils.toArray(".reason-text");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=600%",
          pin: true,
          scrub: true,
          markers: false,
        },
      });

      textElements.forEach((text, i) => {
        if (textElements[i + 1]) {
          tl.to(text, { opacity: 0 }, "+=0.5")
            .to(textElements[i + 1], { opacity: 1 }, "<")
            .to(
              textElements,
              { yPercent: -(100 * (i + 1)), ease: "none" },
              "<"
            );
        }
      });
      tl.to({}, {}, "+=0.5");
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full rounded-3xl bg-[#96EFFF] py-10 px-4 text-black -mt-[3.5vw]">
      <div className="container" ref={container}>
        <div className="left-container">
          <div className="left-content flex flex-col items-center justify-center">
            <p className="text-xl font-bold font-['FoundersGrotesk'] text-[3vw] mb-7 text-white px-4 py-1 tracking-wide bg-gray-700 rounded-md">
              VIRTUAL RETAIL SUPREMACY
            </p>
            <p className="text-4xl font-semibold mb-2">
              Why Switch to Virtual Retail Stores?
            </p>
            <p className="text-sm font-light leading-relaxed opacity-80">
              Discover the future of shopping with Virtual Retail Stores.
              Embrace a digital transformation that offers unparalleled
              convenience, personalized experiences, and innovative
              technologies.
            </p>
          </div>
        </div>
        <div className="right-container scrollbar-hide">
          <div className="right-content">
            <div className="reason-text">
              <div className="flex flex-col">
                <h1 className="font-[FoundersGrotesk] text-[7vw] font-bold leading-none mb-1">
                  4x
                </h1>
                <h2 className="uppercase leading-none text-[2.4vw] mb-2">
                  Enhanced Customer Engagement
                </h2>
                <p className="text-sm font-light leading-relaxed opacity-80 w-[75%]">
                  Experience a quantum leap in customer interaction with our
                  platform. We’ve amplified engagement fourfold by delivering
                  personalized, interactive features that captivate and retain
                  users like never before.
                </p>
              </div>
            </div>
            <div className="reason-text">
              <div className="flex flex-col">
                <h1 className="font-[FoundersGrotesk] text-[7vw] font-bold leading-none mb-1">
                  67%
                </h1>
                <h2 className="uppercase leading-none text-[2.4vw] mb-2">
                  Reduced Returns
                </h2>
                <p className="text-sm font-light leading-relaxed opacity-80 w-[75%]">
                  Significantly cut down on return rates with our innovative
                  solutions. Our platform's advanced predictive analytics and
                  tailored recommendations have led to a remarkable 67% decrease
                  in product returns, ensuring higher satisfaction and fewer
                  hassles.
                </p>
              </div>
            </div>

            <div className="reason-text">
              <div className="flex flex-col">
                <h1 className="font-[FoundersGrotesk] text-[7vw] font-bold leading-none mb-1">
                  2x
                </h1>
                <h2 className="uppercase leading-none text-[2.4vw] mb-2">
                  Higher Conversion
                </h2>
                <p className="text-sm font-light leading-relaxed opacity-80 w-[75%]">
                  Double your conversion rates with our cutting-edge technology.
                  By leveraging personalized recommendations and optimized user
                  experiences, our platform has achieved a 2x increase in
                  conversion rates, turning more visitors into loyal customers.
                </p>
              </div>
            </div>
            <div className="reason-text">
              <div className="flex flex-col">
                <h1 className="font-[FoundersGrotesk] text-[7vw] font-bold leading-none mb-1">
                  45%
                </h1>
                <h2 className="uppercase leading-none text-[2.4vw] mb-2">
                  Enhanced Impulsive Buying
                </h2>
                <p className="text-sm font-light leading-relaxed opacity-80 w-[75%]">
                  Experience a 45% boost in impulsive purchases with our
                  innovative features. Our platform’s strategic prompts and
                  engaging content drive spontaneous buying decisions,
                  encouraging customers to act on their impulses and make more
                  frequent purchases.
                </p>
              </div>
            </div>
            <div className="reason-text">
              <div className="flex flex-col">
                <h1 className="font-[FoundersGrotesk] text-[7vw] font-bold leading-none mb-1">
                  20%
                </h1>
                <h2 className="uppercase leading-none text-[2.4vw] mb-2">
                  Enhanced Upselling
                </h2>
                <p className="text-sm font-light leading-relaxed opacity-80 w-[75%]">
                  Achieve a remarkable 20% increase in upselling success with
                  our advanced techniques. Our platform optimizes the customer
                  journey with tailored recommendations and strategic prompts,
                  making it easier to suggest complementary products and elevate
                  the overall purchase value.
                </p>
              </div>
            </div>
            <div className="reason-text">
              <div className="flex flex-col">
                <h1 className="font-[FoundersGrotesk] text-[7vw] font-bold leading-none mb-1">
                  28%
                </h1>
                <h2 className="uppercase leading-none text-[2.4vw] mb-2">
                  Enhanced Cross-selling
                </h2>
                <p className="text-sm font-light leading-relaxed opacity-80 w-[75%]">
                  Experience a significant 28% boost in cross-selling
                  effectiveness with our innovative strategies. Our platform
                  expertly identifies and presents relevant complementary
                  products, driving increased sales and maximizing the potential
                  of each transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
