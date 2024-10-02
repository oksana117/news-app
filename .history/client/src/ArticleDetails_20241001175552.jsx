// ArticleDetails.js
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/articles/${id}`)
      .then(response => response.json())
      .then(data => setArticle(data))
      .catch(error => console.error('Error fetching article details:', error));
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-details">
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} />
      <p><strong>Source:</strong> {article.source}</p>
      <p><strong>URL:</strong> <a href={article.url} target="_blank" rel="noopener noreferrer">{article.url}</a></p>
      <p><strong>Description:</strong> {article.description}</p>
    </div>
  );
}

export default ArticleDetails;
