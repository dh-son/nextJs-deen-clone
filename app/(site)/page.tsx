"use client";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";

const homImages = ["/home-1.png", "/home-2.png", "/home-3.png"];
const mobileHomeImages = [
  "/mobileHome-1.png",
  "/mobileHome-2.png",
  "/mobileHome-3.png",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (
        currentIndex === homImages.length - 1 ||
        currentIndex === mobileHomeImages.length - 1
      ) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <section className="w-full transition bg-neutral-200">
      {/* mode: pc */}
      <div className="hidden lg:block">
        <Image
          src={homImages[currentIndex]}
          alt="homeImage"
          width={1920}
          height={1080}
          layout="responsive"
        />
      </div>
      {/* mode: mobile */}
      <div className="lg:hidden">
        <Image
          src={mobileHomeImages[currentIndex]}
          alt="mobileHomeImage"
          width={1125}
          height={1756}
          layout="responsive"
        />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
