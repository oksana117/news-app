
import { useParams } from 'react-router-dom';

function ArticleDetails({ articles }) {
  const { articleId } = useParams();
  const article = articles.find(article => article._id === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-details">
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} className="article-image" />
      <p><strong>Source:</strong> <a href={article.url} target="_blank" rel="noopener noreferrer">{article.source}</a></p>
      <p><strong>Publication Date:</strong> {new Date(article.pub_date).toLocaleDateString()}</p>
      <p><strong>Description:</strong> {article.description}</p>
      <p><strong>Content:</strong> {article.content}</p>
    </div>
  );
}

export default ArticleDetails;
