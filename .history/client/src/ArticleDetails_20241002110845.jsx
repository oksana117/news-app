// ArticleDetails.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/articles/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setArticle(data))
      .catch(error => {
        console.error('Error fetching article details:', error);
        setError('Failed to fetch article details. Please try again later.');
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
      <div className="article-details">
          <br></br>
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} />
      <p><strong>Source:</strong> {article.source}</p>
      <p><strong>URL:</strong> <a href={article.url} target="_blank" rel="noopener noreferrer">{article.url}</a></p>
      <p><strong>Description:</strong> {article.description} <a href={article.url} target="_blank" rel="noopener noreferrer" style=""color: #cc0000>Read more</a></p>
    </div>
  );
}

export default ArticleDetails;
