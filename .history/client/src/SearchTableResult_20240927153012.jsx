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
                {dataKeys.map((item, index) => (
                    <tr key={index}> 
                        <tdkey={index}>{item.title}</tdkey=>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SearchTableResult;