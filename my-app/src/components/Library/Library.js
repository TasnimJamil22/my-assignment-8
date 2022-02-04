import React, { useEffect, useState } from 'react';
import Writters from '../Writters/Writters';
import './Library.css'

const Library = () => {
    const [writters,setWritters] = useState([]);

    useEffect( ()=>{
        fetch('./writters.JSON')
        .then(res => res.json())
        .then(data=>setWritters(data));
      },[])

      const handleAddToCart = (Writters) => {
          console.log(writters.name);
      }
    return (
        <div className='library'>
            <div className='library-container'>
                 
                {
                    writters.map(writter => <Writters
                    writter={writter}
                    handleAddToCart={handleAddToCart}
                    >

                    </Writters>
                    )
                }
            </div>
            <div><p>hmm hmm!!</p></div>
        </div>
    );
};

export default Library;