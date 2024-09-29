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

        <table>
           <thead>
        <tr>
          {Object.keys(data).map((item) => {
            return <th key={item}>{item}.</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {[...Array(maxRowLenght)].map((element, index) => {
          return (
            <tr>
              {Object.values(data).map((item) => {
                return (
                  <td>
                    item[index] === "boolean"
                      ? item[index].toString()
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