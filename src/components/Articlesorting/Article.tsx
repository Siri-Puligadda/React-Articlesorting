function Article({ articles }) {
  return (
    <div className="" style={{ width: "80%", margin: "0px 50px" }}>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Upvotes</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr data-testid="article" key={index}>
              <td data-testid="article-title">{article.title}</td>
              <td data-testid="article-upvotes">{article.upvotes}</td>
              <td data-testid="article-date">{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Article;
