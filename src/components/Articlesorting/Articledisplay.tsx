import { useEffect, useState } from "react";
import Article from "./Article";
function Articledisplay({ articles }) {
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    const sorted = articles?.sort((a, b) => b.upvotes - a.upvotes);
    setArticleList(sorted);
  }, []);
  const handleMostUpvoted = () => {
    // Logic for most Upvotes articles
    const sorted = [...articleList].sort((a, b) => b.upvotes - a.upvotes);
    setArticleList(sorted);
  };

  const handleMostRecent = () => {
    // Logic for most recent articles
    const sorted = [...articleList].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setArticleList(sorted);
  };
  return (
    <>
      <div className="App">
        <div
          className=" align-items-center justify-content-center"
          style={{ textAlign: "center" }}
        >
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="btn btn-success"
            onClick={handleMostUpvoted}
            style={{ margin: "10px 10px" }}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="btn btn-success"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Article articles={articleList} />
      </div>
    </>
  );
}

export default Articledisplay;
