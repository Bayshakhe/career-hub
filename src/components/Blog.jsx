import React from "react";

const Blog = () => {
  return (
    <div style={{ maxWidth: "1400px" }} className="mx-auto px-5 py-12">
      <div className="bg-sky-50 p-5 mb-5 w-3/4 mx-auto">
        <h3 className="font-bold text-gradient text-lg">
          1. When Should you use context api?
        </h3>
        <p className="ml-5 mt-2">
          Basically, we use context api when some data needs to be accessible by many level or components. But we can also access data by props drilling in the child components. Sometimes it will be very difficult when our project is large, and definately it can't handle reuse concept. <br />
          At that moment, we should use context api which is create in the parent component and wrap the main element. All child component under the main element can access this data without drilling.
        </p>
      </div>
      <div className="bg-sky-50 p-5 mb-5 w-3/4 mx-auto">
        <h3 className="font-bold text-gradient text-lg">
          2. What is custom hook?
        </h3>
        <p className="ml-5 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          consequuntur nisi quis laborum nemo architecto quae quas, in nihil
          delectus?
        </p>
      </div>
      <div className="bg-sky-50 p-5 mb-5 w-3/4 mx-auto">
        <h3 className="font-bold text-gradient text-lg">
          3. What is useRef? How does it work?
        </h3>
        <p className="ml-5 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          consequuntur nisi quis laborum nemo architecto quae quas, in nihil
          delectus?
        </p>
      </div>
      <div className="bg-sky-50 p-5 mb-5 w-3/4 mx-auto">
        <h3 className="font-bold text-gradient text-lg">
          4. What is useMemo? How does it work?
        </h3>
        <p className="ml-5 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          consequuntur nisi quis laborum nemo architecto quae quas, in nihil
          delectus?
        </p>
      </div>
    </div>
  );
};

export default Blog;
