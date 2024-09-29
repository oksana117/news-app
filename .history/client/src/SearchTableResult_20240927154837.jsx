/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const SearchTableResult = ({ data }) => {
    
    const dataKeys = Object.keys(data)
    var myuniqueidcounter = 0;
function uniqueId() {
    myuniqueidcounter += 1
    return myuniqueidcounter;
}
    let keyedData = data.map(value => Object.assign(value, { Id: uniqueId() }));
    

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
                        <td>{item}</td>
                        <td>{item}</td>
                        <td>{index.published_at}</td>
                        <td>{index.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>

     



    );
};

export default SearchTableResult;