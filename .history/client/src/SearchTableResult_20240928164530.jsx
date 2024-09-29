/* eslint-disable react/prop-types */


const SearchTableResult = ({ data }) => {
    
  const dataKeys = Object.keys(data)
    
   
    return (
        
      <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Source</th>
          <th>Publication Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {news
          .filter(article => 
            article.title.toLowerCase().includes(query) ||
            article.description.toLowerCase().includes(query)
          )
          .map((article, index) => (
            <tr key={index}>
              <td>{article.title}</td>
              <td>{article.url}</td>
              <td>{article.published_at}</td>
              <td>{article.description}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
      
    
    
    );


  
};



export default SearchTableResult;