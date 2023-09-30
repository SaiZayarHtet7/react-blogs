import { useNavigate, useParams } from "react-router-dom";
import "./home.css";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

function BlogDetail() {
  let id = useParams().id;

  let url = "http://localhost:3001/blogs/" + id;
  let { data: blog, loading, error } = useFetch(url);

  let navigate = useNavigate();

  useEffect(() => {
    if (error) {
      ///redirecting to homepage due to error
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [error, navigate]);

  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>loading...</div>}
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <p>posted by {blog.author}</p>
          <p>{blog.body}</p>
        </div>
      )}
    </div>
  );
}

export default BlogDetail;
