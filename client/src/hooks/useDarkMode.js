import React, { useEffect } from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";


export const useDarkMode = (key) => {

const [value, setValue] = useLocalStorage(key);
useEffect(() => {
    const body = document.querySelector('body');
    if(value) {
        body.className = "dark-mode";
    }
    else {
        body.className = "";
    }
}, [value]);

return [value, setValue];
};