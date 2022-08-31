import React from 'react';
import Load from './Load';
import Save from './Save';
import { useState } from 'react';

const Actions = (props) => {
    const  [show, setshow] = useState(true);
    const onClickHanlder = (filenameRef)=> {
        props.onLoadHandler(filenameRef)
    }

    const onShowAllHandler = ()=> {
        setshow(prev => !prev)
        props.onShow(show)
    }
    return (
        <div>
            <Load onLoadHandler={onClickHanlder}></Load>
            {props.data && <Save onSave={props.onSave}></Save>}
            {props.data && <button className='show-all' onClick={onShowAllHandler}>{show ? 'Show All' : 'Show Only 2020 & 2019'}</button>}
        </div>
    );
};

export default Actions;