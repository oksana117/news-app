/* eslint-disable react/prop-types */


const SearchTableResult = ({ data }) => {
    
    //const dataKeys = Object.keys(data)
    

    return (
        <div>
 
            <center><h1>Latest News</h1></center>
 
            {newss.map((news) => (
 
                <div className="card">
 
                    <div class="card-body">
 
                        <h5 class="card-title">{news.title}</h5>
 
                        <h6 class="card-subtitle mb-2 text-muted">{news.author}</h6>
 
                        <p class="card-text">{news.description}</p>
 
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