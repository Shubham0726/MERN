import React, { useState, useEffect } from 'react';

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);   
        window.addEventListener('resize', handleResize);
    })
    return width;
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    function handleChange (e) {
        setValue(e.target.value);
    }
    return{
        value,
        onChange : handleChange,
    };
}

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    })
}

const FirstHook = () => {
    const name = useFormInput('Shubham');
    const surname = useFormInput('Mishra');
    const width = useWindowWidth();
    useDocumentTitle(name.value + ' ' + surname.value);
    return(
        <>
        <input {...name} />
        <input {...surname} /><br />
       <h3>  <span>Changing Window Width =  </span>{width}</h3>
        </>
    )
}

export default FirstHook;