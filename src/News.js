import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  let total=38;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=a6c98f237f9340f8bb74c5409fd1d189&page=${page}&pageSize=${props.pageSize}`;
        const response = await fetch(url);
        const parsedData = await response.json();
        setArticles(parsedData.articles);
        setLoading(false);
    };

    fetchData();
  }, [page, props.category,props.pageSize]); // Update on category change as well

  const handleNextClick = () => {
    if (page < (Math.ceil(total / props.pageSize) || 1)) { // Use total if available
      setPage(page + 1);
    }
  };

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <div className="container my-3">
        <h2 className="text-center">NewsMonkey - {props.category.toUpperCase()} NEWS</h2>
        <p className="text-center">{loading && <Spinner />}</p>
        <div className="row">
          {!loading && articles.map((element) => (
            <div className="col md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={element.description ? element.description.slice(0, 88) : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                name={element.source.name}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page >= (Math.ceil(total / props.pageSize) || 1)} // Disable on last page
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
