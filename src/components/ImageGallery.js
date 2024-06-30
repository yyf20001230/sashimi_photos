import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "../styles/ImageGallery.css";


const ImageGallery = () => {
  return (
    <div className="bg-neutral-800">
      {
        window.innerWidth >= 1200 ? 
        <HorizontalScrollCarousel />
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

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div style={{ color: "white" }} className="highlight"> Still Highlights </div>
      <div className="sticky top-0 flex h-[100vh] items-center overflow-hidden">
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

const cards = [
  {
    url: require("../assets/stills/Necro1.png"),
    title: "Title 1",
    id: 1,
  },
  {
    url: require("../assets/stills/Necro2.png"),
    title: "Title 2",
    id: 2,
  },
  {
    url: require("../assets/stills/Necro3.png"),
    title: "Title 3",
    id: 3,
  },
  {
    url: require("../assets/stills/Clark1.JPG"),
    title: "Title 4",
    id: 4,
  },
  {
    url: require("../assets/stills/Clark2.JPG"),
    title: "Title 5",
    id: 5,
  },
  {
    url: require("../assets/stills/Flare1.png"),
    title: "Title 6",
    id: 6,
  },
  {
    url: require("../assets/stills/Noumena1.png"),
    title: "Title 7",
    id: 7,
  }
];