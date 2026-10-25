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
    if(rating >= 8){
        return(
            <section className={"Cards col"}>
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
            <section className={"Cards col"}>
                <img src={poster} />
                <p>{title}</p>
                <p>{year}</p>
                <p>{rating}</p>
            </section>
        );
    }
}

