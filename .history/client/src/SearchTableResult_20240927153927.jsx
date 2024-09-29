/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const SearchTableResult = ({ data }) => {
    
    //const dataKeys = Object.keys(data)
    return (
      
   /* <ul>
      {dataKeys.map((item, index) => (
        
          <li key={index}>{item}</li>
   
        
      ))}
    </ul>
  );*/
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
                        <td>{item}</td>
                        <td>{index.url}</td>
                        <td>{index.published_at}</td>
                        <td>{index.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>*/

          <table border={1}>
    <thead>
      <tr>
        {Object.keys(data).map((item) => {
          return <th key={item}>{item}.</th>;
        })}
      </tr>
    </thead>
    <tbody>
      {[
        ...Array(
          Math.max(...Object.values(data).map((item) => item.length))
        ),
      ].map((itm, idx) => {
        return (
          <tr>
            {Object.values(data).map((item) => {
              return (
                <td>
                  {typeof item[idx] === "boolean"
                    ? new Boolean(item[idx]).toString()
                    : ""}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  </table>


    );
};

export default SearchTableResult;