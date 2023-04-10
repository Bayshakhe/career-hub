import React from "react";

const Blog = () => {
  return (
    <div style={{ maxWidth: "1400px" }} className="mx-auto px-5 py-12">
      <div className="bg-sky-50 p-5 mb-5 w-3/4 mx-auto">
        <h3 className="font-bold text-gradient text-lg">
          1. When Should you use context api?
        </h3>
        <p className="ml-5 mt-2 text-lg">
          Basically, we use context api when some data needs to be accessible by many level or components. But we can also access data by props drilling in the child components. Sometimes it will be very difficult when our project is large, and definately it can't handle reuse concept. <br />
          At that moment, we should use context api which is create in the parent component and wrap the main element. All child component under the main element can access this data without drilling.
        </p>
      </div>
      <div className="bg-sky-50 p-5 mb-5 w-3/4 mx-auto">
        <h3 className="font-bold text-gradient text-lg">
          2. What is custom hook?
        </h3>
        <p className="ml-5 mt-2 text-lg">
          Custom hook is React function which starts with "use" and then we have to add any meaningful name. When stateful logic need to be shared by two components then we can use custom hook. It is resque us to copying same logic for different components and increase reusability.
        </p>
      </div>
      <div className="bg-sky-50 p-5 mb-5 w-3/4 mx-auto">
        <h3 className="font-bold text-gradient text-lg">
          3. What is useRef? How does it work?
        </h3>
        <p className="ml-5 mt-2 text-lg">
          useRef is React funtion build-in hook which is immutable. In React we can not directly access DOM element. So we can access DOM element by using useRef. It takes an initial value and return an object and we can access it by ".current" property.
        </p>
      </div>
      <div className="bg-sky-50 p-5 mb-5 w-3/4 mx-auto">
        <h3 className="font-bold text-gradient text-lg">
          4. What is useMemo? How does it work?
        </h3>
        <p className="ml-5 mt-2 text-lg">
          useMemo is React funtion build-in hook which returns a memorize value. It take dependencies, and when this dependencies has changed it recompute the value. <br />
          This function helps to avoid costly calculations on every rendering.
        </p>
      </div>
    </div>
  );
};

export default Blog;
