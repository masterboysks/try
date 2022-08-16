import React, { useState, useEffect } from "react";

const Pagination = () => {
  const [post, setPost] = useState([]);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(10);
  console.log(post);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/comments");
      const dataJ = await data.json();
      setPost(dataJ);
    };
    fetchApi();
  }, []);
  console.log(post);
  const lastPost = number * postPerPage; //1*10=10
  const firstPost = lastPost - postPerPage; //10-10=0
  const currentPost = post.slice(firstPost, lastPost); //0-0
  const pageNumber = [];
  //1<(0/0) false
  for (let i = 1; i <= Math.ceil(post.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {currentPost.map((Val, i) => {
                return (
                  <>
                    <tr className="border-dark text-center border-2" key={i}>
                      <td className="border-dark th-1 border-2">{Val.id}</td>
                      <td className="border-dark th-1 border-2">{Val.name}</td>
                      <td className="border-dark th-1 border-2">{Val.email}</td>
                      <td className="border-dark th-1 border-2">{Val.body}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>

          <div className="my-3 text-center">
            <button
              className="btn-primary px-3 py-1 m-1 text-center"
              onClick={() => setNumber(number - 1)}
            >
              Previous
            </button>

            {pageNumber.map((Elem) => {
              return (
                <>
                  <button
                    className="btn-outline-dark px-3 py-1 m-1 text-center"
                    onClick={() => ChangePage(Elem)}
                  >
                    {Elem}
                  </button>
                </>
              );
            })}
            <button
              className="btn-primary px-3 py-1 m-1 text-center"
              onClick={() => setNumber(number + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
