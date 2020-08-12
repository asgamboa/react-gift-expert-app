import React/*, { useState, useEffect }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images,loading} = useFetchGifs(category);// se nombra en la desestructuración




    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading</p>}

            <div className='card-grid'>
                {images.map(img => (
                    <GifGridItem
                        key={img.id}
                        // Se manda cada una de las propiedades mediante desestructuración
                        {...img}
                    />
                ))}
            </div>
        </>
    )
}
 