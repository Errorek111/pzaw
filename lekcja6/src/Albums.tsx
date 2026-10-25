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
    if(songs.length == 0){
        return(
            <section className={"Cards col"}>
                <img src={cover} />
                <p>{name}</p>
                <p>{band}</p>
                <p>{genre}</p>
                <p>{year}</p>
                <p className="alert alert-info">Ten album nie ma piosenek</p>
            </section>
        )
    }
    else{
        return(
            <section className={"Cards col"}>
                <img src={cover} />
                <p>{name}</p>
                <p>{band}</p>
                <p>{genre}</p>
                <p>{year}</p>
                <table>
                    <tbody>
                    {songs.map(songs => <tr><td>{songs.title}</td><td className="time">{songs.time}</td></tr>)}
                    </tbody>
                </table>
            </section>
        )
    }
}
