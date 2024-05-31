"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
import Link from "next/link";
import { projects } from "@/data";

interface ThreeDCardDemoProps {
  title: string;
  img: string;
  href: string;
  des: string;
  iconLists: string[];
}

export function ThreeDCardDemo({
  title,
  img,
  href,
  des,
  iconLists,
}: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-2xl p-6 border">
        <CardItem translateZ="100" className="w-full mt-2">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {des}
        </CardItem>
        <CardItem translateZ="60">
          <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex items-center">
              {iconLists.map((icon, index) => (
                <div
                  key={icon}
                  className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 sm:w-8 sm:h-8 justify-center items-center flex"
                  style={{ transform: `translateX(-${5 * index * 2}px)` }}
                >
                  <img src={icon} alt={icon} className="p-2" />
                </div>
              ))}
            </div>
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ={20}
            as={Link}
            href={href}
            target="__blank"
            className="px-4 py-2 rounded-xl text-sm lg:text-md font-normal text-purple"
          >
            Check Live Site →
          </CardItem>
          {/* <CardItem
            translateZ={20}
            as="button"
            href={href}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Read More
          </CardItem> */}
        </div>
      </CardBody>
    </CardContainer>
  );
}
