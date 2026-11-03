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
            <section className={"Cards col"} onClick={()=>{console.log("Wybrano film '"+title+"'")}}>
                <h3>Polecany</h3>
                <img src={poster} />
                <p>{title}</p>
                <p>{year}</p>
                <button onClick={()=>{console.log("Wciśnięto przycisk szcegóły dla filmu'"+title+"'")}}>Pokaż szczegóły</button>
                <p>{rating}</p>
            </section>
        );
    }
    else{
        return(
            <section className={"Cards col"} onClick={()=>{console.log("Wybrano film '"+title+"'")}}>
                <img src={poster} />
                <p>{title}</p>
                <p>{year}</p>
                <button onClick={e=>{e.stopPropagation();console.log("Wciśnięto przycisk szcegóły dla filmu'"+title+"'")}}>Pokaż szczegóły</button>
                <p>{rating}</p>
            </section>
        );
    }
}

