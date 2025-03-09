import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "../styles/ImageGallery.css";

const ImageGallery = ({ cards, padding }) => {

  return (
    <div className="bg-neutral-800">
      {
        window.innerWidth >= 1200 ? 
        <HorizontalScrollCarousel cards={cards} padding={padding}/>
        : 
        <section className="relative bg-black">
          <div style={{ color: "white" }} className="highlight"> Still Highlights </div>
          <div className="mobile-view">
            { cards.map((card) => {
              return <Card card={card} key={card.id}/>;
            })}
          </div>
        </section>
      }
     
    </div>
  );
};

const HorizontalScrollCarousel = ({ cards, padding }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div style={{ color: "white" }} className="highlight"> Still Highlights </div>
      <div className="sticky top-0 flex h-[100vh] items-center overflow-hidden" style={{ paddingLeft: `${padding}vw`}}>
        <motion.div style={{ x }} className="flex gap-4 carousel-container">
          {cards.map((card) => {
            return <Card card={card} key={card.id}/>;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 card"
    >
      <img
        loading="lazy"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        src={card.url}
        alt={"stills"}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></img>
    </div>
  );
};

export default ImageGallery;