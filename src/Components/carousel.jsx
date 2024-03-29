import { Carousel } from 'flowbite-react';

export default function SlideAsAnything() {
  return (
    <Carousel>
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


