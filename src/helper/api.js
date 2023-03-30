import {React, useEffect } from "react";

useEffect(() => {
    const url = 'https://api.github.com/users/eneskalkann/repos'


    const fetchDatas = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
        }
        catch(err){
            console.log('error',err)
        }
    }
    fetchDatas()
})