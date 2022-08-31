import React from 'react';
import { useRef } from 'react';

const Load = (props) => {
    const filenameRef = useRef()

    const onClickHanlder = ()=> {
        props.onLoadHandler(filenameRef.current.value)
    }
    return (
        <div>
            <input ref={filenameRef} defaultValue="prize.json"></input>
            <button onClick={onClickHanlder}>Load JSON</button>
        </div>
    );
};

export default Load;