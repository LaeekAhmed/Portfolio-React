import React from "react";
import { Button } from 'flowbite-react';
import { Carousel } from 'flowbite-react';

export default function MyPage() {
  return (
    <Carousel onSlideChange={slideIdx=>console.log(slideIdx)}>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 1
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 2
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 3
      </div>
    </Carousel>
  )
}
