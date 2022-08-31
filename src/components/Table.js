import React, {useState}from 'react';


const Table = (props, pageNumber) => {
    const show = props.show
    const data = props.data?.prizes
    const [page, setPage] = useState(20);
    const [loaded, setLoaded] = useState(false);

    const onLoadMoreHandler = () => {
        if(page > data.length){
            setLoaded(true)
        }
        setPage(prev => prev+10)
    }
    let allJSX = []
    if(data && show){
          allJSX = data.slice(0,page+10).map(prize => (
        <tr key={prize.category+prize.year}>
        <td>
            {prize.year}
        </td>
        <td>
            {prize.category}
        </td>
        <td>
        {prize.laureates?.map(laureate => {
            return  laureate.firstname + ' ' + laureate.surname+  ' '
        })}
        </td>
        </tr>
        ))
    }

    if(data && !show){
        allJSX = data.filter(prize => prize.year == '2020' || prize.year == '2019').map(prize => (
            <tr key={prize.category+prize.year}>
            <td>
                {prize.year}
            </td>
            <td>
                {prize.category}
            </td>
            <td>
            {prize.laureates?.map(laureate => {
                return  laureate.firstname + ' ' + laureate.surname+  ' '
            })}
            </td>
            </tr>
            ))
    }
        
    return (
        <div>
           {data ?  <table>
            <tbody>
                <tr>
                    <th>Year</th>
                    <th>Category</th>
                    <th>Laureates</th>
                </tr>
                
                <>
                    {allJSX}
                </>
                </tbody>
                 </table>  : <div className='empty'>Please Click <b>Load JSON</b> to Load the Data</div> }
                 {!loaded && data && show &&<button onClick={onLoadMoreHandler} className='load'>LoadMore</button>}
        </div>
  
    );
};

export default Table;