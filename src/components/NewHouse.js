import React, { useState } from 'react';
import { housesApi } from '../rest/HousesApi';


export const NewHouse = () => {
     
    const [name, setName] = useState('');    

    const onSubmit = (e) => {
        e.preventDefault();
        
        console.log(name)
        housesApi.post(name);
        
        setName('');
        
    }
    
    return (
        <div className='newhouse'>
            <h2> Add a new House</h2>
            <br></br>
            
            <form onSubmit={onSubmit}>
                
                <input
                    type='text'
                    placeholder='Name of your new home'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name={name}
                />
                <button className='addRoom' type='submit'>Add House</button>
            </form>
        </div>
    )
};