import React from "react";

const TopButton = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Oslo",
    },
    {
      id: 2,
      title: "Helsingfors",
    },
    {
      id: 3,
      title: "Istanbul",
    },
    {
      id: 4,
      title: "Spain",
    },
    {
      id: 5,
      title: "Pakistan",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city, index) => (
        <button
          className="text-white text-lg font-medium"
          key={index}
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
