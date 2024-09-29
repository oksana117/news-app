/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const SearchTableResult = ({ data }) => {
    
    const dataKeys = Object.keys(data)
    

    return (
        <div>
 
            <center><h1>Latest News</h1></center>
 
            {dataKeys.map((news) => (
 
                <div className="card">
 
                    <div className="card-body">
 
                        <h5 className="card-title">{news.title}</h5>
 
                        <h6 className="card-subtitle mb-2 text-muted">{news.author}</h6>
 
                        <p className="card-text">{news.description}</p>
 
                      </div>
 
                </div>
 
            ))}
 
        </div>
     
       /* <table>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Source</th>
                    <th>Publication Date</th>
                    <th>Description</th>
                </tr>
                {data.map((item) => (
                    <tr key={item.id}> 
                        <td>{item.title}</td>
                        <td>{item.url}</td>
                        <td>{item.published_at}</td>
                        <td>{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>*/


    );
};

export default SearchTableResult;