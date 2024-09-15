"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link as Scroll } from "react-scroll";
// import { useEffect, useState } from "react";

const Hero = () => {
  //テキストアニメーションさせたい文字
  const words = "デジタル化";
  //分割する
  const word = words.split("");

  const textanimate = word.map((word, index) => {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: index * 0.15 }}
        key={index}
      >
        {word}
      </motion.span>
    );
  });

  return (
    <motion.section
      id="hero"
      className="flex flex-col-reverse lg:flex-row items-center justify-center sm:gap-4 md:gap-12 lg:gap-24 pt-16 lg:pt-32 lg:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="flex flex-col gap-4 lg:gap-8 items-center justify-center text-center lg:text-left lg:items-start p-8 md:p-0">
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance md:-mb-4">
          離島の未来を
          <span className="inline-block bg-foreground mx-1 px-2 -rotate-1">
            <span className="inline-block text-background rotate-1">
              {textanimate}
            </span>
          </span>
          で加速する
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          私たちは、IT研修とスキル習得プログラムを通じて、地域の人材を育成し、壱岐島のDX推進をサポートします。
        </p>
        <Scroll
          className="primary-foreground font-bold"
          to="contact"
          smooth={true}
          offset={-100}
        >
          {/* <Button
            size="lg"
            className="bg-cyan-600 text-white hover:bg-cyan-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
          >
            お問い合わせ
          </Button> */}
        </Scroll>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full"
      >
        <Image
          src="/hero.png"
          alt="Hero画像"
          className="w-full transform -rotate-3"
          priority={true}
          width={640}
          height={480}
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
