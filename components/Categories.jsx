import React from "react";

const categories = [
  {
    title: "Trending",
    img: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    desc: " Trending Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis",
  },
  {
    title: "Women",
    img: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    desc: "Women Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis",
  },
  {
    title: "Children",
    img: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    desc: "Children Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis",
  },
  {
    title: "Men",
    img: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    desc: "Men Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis",
  },
];

export function Categories() {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {categories.map((category) => (
        <CategoryCard key={category.title} category={category} />
      ))}
    </div>
  );
}

const CategoryCard = ({ category }) => {
  return (
    <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
      <img
        src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{category.title}</h1>
        <p className="mt-2 text-sm text-gray-300">{category.desc}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          Shop Now &rarr;
        </button>
      </div>
    </div>
  );
};
