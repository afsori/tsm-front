// https://virtserver.swaggerhub.com/swaggerpayment/GetDataBuilding/1.0.0/building_data

import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentPagination from "../ContentPagination";
import Pagination from "../ContentPagination/Pagination";
import "./content.css";

const PaginationComponent = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage] = useState(7);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://virtserver.swaggerhub.com/swaggerpayment/GetDataBuilding/1.0.0/building_data"
      );
      setPost(res.data);
      console.log("length", res.data.length);
      setLoading(false);
    };
    fetchPost();
  }, []);

  // console.log(post)
  //Get Current  Post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setcurrentPage(pageNumber);
  return (
    <div className="wrapper-container">
      <div className="container mt-4">
        <div className="wrapper-title-paginate">
          <h3 className="text-primary mb-2">Daftar Gedung</h3>
          {/* <input onChange={e => setQuery(e.target.value)} placeholder="searching now"/> */}
        </div>
        <ContentPagination
          hasil={currentPost}
          posts={currentPost}
          loading={loading}
        />
        <Pagination
          postPerPage={postPerPage}
          totalPost={post.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default PaginationComponent;
