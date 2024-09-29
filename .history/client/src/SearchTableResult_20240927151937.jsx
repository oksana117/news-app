/* eslint-disable react/prop-types */

const SearchTableResult = ({ data }) => {
    
    const dataKeys = Object.keys(data)
    return (
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
                        <td>{index.title} console.log()</td>
                        <td>{index.url}</td>
                        <td>{index.published_at}</td>
                        <td>{index.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SearchTableResult;