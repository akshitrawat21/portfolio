"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center sm:items-start">
      {/* Left Section */}
      <section
        ref={ref}
        id="home"
        className="w-full max-w-[50rem] mb-10 sm:mb-28 text-left"
      >
        <motion.h1
          className="mb-10 mt-4 px-5 text-4xl font-medium !leading-[1.7] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm AKSHIT.<br></br></span> I'm a{" "}
          <span className="font-bold">Full-Stack Developer</span> with{" "}
          <span className="font-bold"> 0-1 years</span> of experience.{" "}<br></br>
          <span className="italic">I enjoy building sites & apps</span>. 
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white ml-0 px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white ml-2 mr-1 px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/akshitresume.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com/in/akshitrawat21/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/akshitrawat21"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </section>

      {/* Right Section */}
      <section className="w-full max-w-[50rem] flex justify-center sm:justify-center mb-10 sm:mb-0 ml-0 mr-5">
        {/* Image from local directory */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="ml-auto"
        >
          <Image
            src="/Profile pic.png" // Path to your image
            alt="Profile Image"
            width={350} // Set the desired width
            height={350} // Set the desired height
            className="rounded-lg object-cover"
          />
        </motion.div>
      </section>
    </div>
  );
}
