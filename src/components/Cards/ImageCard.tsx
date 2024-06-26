"use client";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { sampleImages } from "@/lib/images";
import Loader from "../Icons/Loader";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ImageCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, sampleImages.length, page);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page],
  );

  // change image index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page, paginate]);

  useEffect(() => {
    const img = new Image();
    img.src = sampleImages[imageIndex].src;
    img.onload = () => setIsLoading(false);
    return () => {
      img.onload = null;
    };
  }, [imageIndex]);

  return (
    <div className="relative flex h-[35rem] w-[35rem] items-center justify-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        {isLoading ? (
          <Loader />
        ) : (
          <motion.img
            className="relative h-[20rem] w-[30rem] rounded-lg object-cover shadow-lg md:h-[30rem]"
            onLoad={() => setIsLoading(false)}
            key={page}
            src={sampleImages[imageIndex].src}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "keyframes" },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
