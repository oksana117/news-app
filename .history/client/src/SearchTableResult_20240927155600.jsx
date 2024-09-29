/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const SearchTableResult = ({ data }) => {
    
    const dataKeys = Object.keys(data)
    

    return (
       
      
   /* <ul>
      {dataKeys.map((item, index) => (
        
          <li key={index}>{item}</li>
   
        
      ))}
    </ul>
  );*/

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
                        <td>{item.title}</td>
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