import React from 'react';

const Save = (props) => {
    return (
        <div>
            <button className='save' onClick={props.onSave}>Save the File As YAML</button>
        </div>
    );
};

export default Save;