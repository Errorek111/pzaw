import { useState } from "react";

export interface Album{
   name:string,
band:string,
genre:string,
cover:string,
year:number,
songs:{title:string,time:number}[];
}
export function AlbumObj({
name,
band,
genre,
cover,
year,
songs,
}:Album){
    const [isOpen, setIsOpen] = useState(true);
    if(songs.length == 0){
        return(
            <section>
                <img src={cover} />
                <p>{name}</p>
                <p>{band}</p>
                <p>{genre}</p>
                <p>{year}</p>
                <p>Ten album nie ma piosenek</p>
            </section>
        )
    }
    else{
        return(
            <section>
                <img src={cover} />
                <p>{name}</p>
                <p>{band}</p>
                <p>{genre}</p>
                <p>{year}</p>
                <ol>{songs.map(songs => <li>{songs.title} - {songs.time}</li>)}</ol>
            </section>
        )
    }
}
