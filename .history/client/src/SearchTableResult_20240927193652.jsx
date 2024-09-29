/* eslint-disable react/prop-types */


const SearchTableResult = ({ data }) => {
    
  const dataKeys = Object.keys(data)
    

    return (
         <div>
            <h1>News Articles</h1></div>
        <table>
      
       <tbody>
                <tr>
                    <th>Title</th>
                    <th>Source</th>
                    <th>Publication Date</th>
                    <th>Description</th>
                </tr>
                {dataKeys.map((article, index) => (
                    <tr key={index}> 
                        <td>{article.title}</td>
                        <td>{article.url} </td>
                        <td>{article.published_at}</td>
                        <td>{article.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      
    
    
    );


  
};

export default SearchTableResult;