import React from 'react';

const Akr = (props) => {
    let api = 'apa';
    return <p onClick={() => {api='budi';console.log("bdi perbuadbs");}}>{`Hello Akr ${api}`}</p>
};

export default Akr;