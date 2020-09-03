import React from 'react';
import {useFetchGifs} from '../Hooks/useFetchGifs';
import { GrifGridItem } from './GrifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images ,loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            <div className="card-grid">
                { loading && <p className="animate__animated animate__flash">...Loading...</p>}
                {
                    images.map( (img) => (
                        <GrifGridItem
                            key={img.id}
                            {... img}
                        />
                    ))
                }
            </div>
        </>
    )
}
