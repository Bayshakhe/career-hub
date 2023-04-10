import React, { useEffect, useState } from "react";

const JobCategoryList = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="text-center py-28">
      <h3 className="text-4xl font-bold mb-3">Job Category List</h3>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex flex-col md:flex-row gap-5 justify-center mt-8 mx-16">
        {cards?.map((card) => (
          <li
            className="bg-sky-50 p-8 text-left rounded-lg list-none"
            key={card.id}
          >
            <img className="h-8 mb-3" src={card.icon} alt="" />
            <p className="font-bold text-lg">{card.category}</p>
            <p className="text-sm">{card.vacancy}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default JobCategoryList;
