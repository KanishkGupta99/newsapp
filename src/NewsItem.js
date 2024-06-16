import React from 'react';

export default function NewsItem(props) {
  const handleImageError = (event) => {
    event.target.src = "https://via.placeholder.com/150";
  };

  return (
    <div>
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{props.name}</span>

          <img src={props.imageUrl ? props.imageUrl : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"} className="card-img-top" alt="..." onError={handleImageError} />
          <div className="card-body">
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <p className='card-text'><small className='text-muted'>By {props.author ? props.author : "Unknown"} on {props.date.slice(0, 10)}</small></p>
            <a href={props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
