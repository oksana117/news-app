/* eslint-disable react/prop-types */

const SearchTableResult = ({ [data] ) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Source</th>
                    <th>Publication Date</th>
                    <th>Description</th>
                </tr>
                {data.map((item) => (
                    <tr key={item.author}>
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