import "./App.css";
interface Film{
    title: string;
    poster: string;
    year:number;
}
function Movie({
title,
poster,
year,
}: Film){
    return(
        <section>
            <img src={poster} />
            <p>{title}</p>
            <p>{year}</p>
        </section>
    );
}
interface Book{
    title: string;
    cover: string;
    year:number;
    pageNum:number;
}
function BookObj({
title,
cover,
year,
pageNum,
}: Book){
    return(
        <section>
            <img src={cover} />
            <p>{title}</p>
            <p>{year}</p>
            <p>{pageNum}</p>
        </section>
    );
}
interface Music{
    name: string;
    band:string;
    genre:string
    cover: string;
    year:number;
    songs?:[{title:string,time:number}];
}
function Album({
name,
band,
genre,
cover,
year,
songs,
}: Music){
    const listItems = songs.map(songs=> <li>{songs.title} - {songs.time}</li>);
    return(
        <section>
            <img src={cover} />
            <p>{name}</p>
            <p>{band}</p>
            <p>{genre}</p>
            <p>{year}</p>
            <ol>{listItems}</ol>
        </section>
    );
}
function App(){
    return(
        <main>
            <span>
            <Movie title="Star Wars: Resistance" year={2018} poster="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fxul6SG8rar3wkHPY8YusUtxcdlZ.jpg&f=1&nofb=1&ipt=37fc8180419aea9f0a265fb46b40ee4accc9d5147e07117f926c7247341a7f7b&ipo=images" />
            <Movie title="Big Ass Spider!" year={2013} poster="https://upload.wikimedia.org/wikipedia/en/3/35/Bigassspider.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"/>
            <Movie title="Star Wars: The Rise of Skywalker" year={2019} poster="https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled" />
            </span>
            <span>
                <BookObj title="Heir to the Empire" year={1991} cover="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.kobo.com%2Fbook-images%2Fb90cca59-021b-4f5c-a3d4-18ce521d0556%2F1200%2F1200%2FFalse%2Fheir-to-the-empire-star-wars-legends-the-thrawn-trilogy.jpg&f=1&nofb=1&ipt=2ddf36e704ee4c96b8f7b4a6e8b6e855247bbce66ad853d8cf707f1f4e8811aa&ipo=images" pageNum={300} />
                <BookObj title="Dark Force Rising" year={1992} cover="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.lnHg1J4s34keCT1HiGZJpgHaMJ%3Fpid%3DApi&f=1&ipt=c112bf61ae1232b7932cd5478a9b280fc3b21aa4865cdf584b77faf7d9156bc6&ipo=images" pageNum={400} />
                 <BookObj title="The Last Command" year={1995} cover="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F917vMtyhCOL.jpg&f=1&nofb=1&ipt=c17418f06a73b38b2b0c2a69cc98a13c54b6c28cb0b83534baa89573790065fd&ipo=images" pageNum={450} />

            </span>
            <span>
                <Album name="Kessoku Band" band="Kessoku Band" genre="Rock" year={2022} cover="https://upload.wikimedia.org/wikipedia/en/3/3e/Kessoku_Band_album_cover.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled" songs={[{title:"Seishun Complex",time:3.23},{title:"Hitoribocchi Tokyo",time:3.52},{title:"Distortion!",time:3.23},{title:"Secret Base",time:3.52},{title:"Guitar, Loneliness and Blue Planet",time:3.48},{title:"I Can't Sing a Love Song",time:3.08},{title:"That Band",time:3.33},{title:"Karakara",time:4.25},{title:"The Little Sea",time:3.43},{title:"What Is Wrong With",time:3.47},{title:"Never Forget",time:3.43},{title:"If I Could Be a Constellation",time:4.18},{title:"Flashbacker",time:4.35},{title:"Rockn' Roll, Morning Light Falls on You",time:4.31}]} />
            </span>
        </main>
    );
}
export default App;
