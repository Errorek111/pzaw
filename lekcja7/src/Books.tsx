export interface Book{
title:string;
cover:string;
year:number;
pageNum:number;
}
export function BookObj({
title,
cover,
year,
pageNum
}: Book){
    if(year < 2000){
        return(
            <section className={"Cards col"}>
                <h3>Klasyka</h3>
                <img src={cover} />
                <p>{title}</p>
                <p>{year}</p>
                <p>{pageNum}</p>
            </section>
        );
    }
    else{
        return(
            <section className={"Cards col"}>
                <img src={cover} />
                <p>{title}</p>
                <p>{year}</p>
                <p>{pageNum}</p>
            </section>
        );
    }
}
