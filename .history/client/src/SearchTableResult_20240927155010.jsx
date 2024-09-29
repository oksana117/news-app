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
                {dataKeys.map((item) => (
                    <tr key={keyedData}> 
                        <td>{item.title}</td>
                        <td>{item.}</td>
                        <td>{item.published_at}</td>
                        <td>{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>

     



    );
};

export default SearchTableResult;