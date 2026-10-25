import { useState } from "react";

export interface Film{
    title: string;
    poster: string;
    year:number;
    rating:number;
}
export function Movie({
title,
poster,
year,
rating}: Film){
    const [isOpen, setIsOpen] = useState(true);
    if(rating >= 8){
        return(
            <section>
                <h3>Polecany</h3>
                <img src={poster} />
                <p>{title}</p>
                <p>{year}</p>
                <p>{rating}</p>
            </section>
        );
    }
    else{
        return(
            <section>
                <img src={poster} />
                <p>{title}</p>
                <p>{year}</p>
                <p>{rating}</p>
            </section>
        );
    }
}

