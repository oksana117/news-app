/* eslint-disable react/prop-types */


const SearchTableResult = ({ data }) => {
    
  const dataKeys = Object.keys(data)
    

    return (
        <div>
            <h1>News Articles</h1>
            <ul>
                {dataKeys.map((article, index) => (
                    <li key={index}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                       
                    </li>
                ))}
            </ul>
        </div>
  
    <table>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Source</th>
                    <th>Publication Date</th>
                    <th>Description</th>
                </tr>
                {dataKeys.map((item) => (
                    <tr key={item.id}> 
                        <td>{item}</td>
                        <td>{item.url}</td>
                        <td>{item.published_at}</td>
                        <td>{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
          );


  
};

export default SearchTableResult;