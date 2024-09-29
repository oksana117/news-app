/* eslint-disable react/prop-types */

const SearchTableResult = ({ data }) => {
    
    const dataKeys = Object.keys(data)
    return (
      
    <ul>
      {dataKeys.map((item, index) => (
        
          <li key={index}>{item}</li>
          <li></li>
        
      ))}
    </ul>
  );
/*
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
                        <td>{index.title}</td>
                        <td>{index.url}</td>
                        <td>{index.published_at}</td>
                        <td>{index.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );*/
};

export default SearchTableResult;