import "./App.css";
import {Film, Movie} from "./Movies.tsx" ;
import {Book, BookObj} from "./Books.tsx";
import {Album, AlbumObj} from "./Albums.tsx";
import { useState } from "react";

const films:Film[] = [
    {title:"Star Wars: Resistance",year:2018, poster:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fxul6SG8rar3wkHPY8YusUtxcdlZ.jpg&f=1&nofb=1&ipt=37fc8180419aea9f0a265fb46b40ee4accc9d5147e07117f926c7247341a7f7b&ipo=images",rating:5.3},
    {title:"Big Ass Spider!", year:2013, poster:"https://upload.wikimedia.org/wikipedia/en/3/35/Bigassspider.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",rating:5.3},
    {title:"Star Wars: The Rise of Skywalker", year:2019, poster:"https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", rating:6.3},
    {title:"Star Wars: A New Hope", year:1977, poster:"https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",rating:8.6}
];
const books: Book[]=[
    {title:"Rogue One: A Star Wars Story",year:2016,cover:"https://upload.wikimedia.org/wikipedia/en/4/4b/Rogue_One-Alexander_Freed_%282016%29.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", pageNum:460},
    { title:"Heir to the Empire", year:1991, cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.kobo.com%2Fbook-images%2Fb90cca59-021b-4f5c-a3d4-18ce521d0556%2F1200%2F1200%2FFalse%2Fheir-to-the-empire-star-wars-legends-the-thrawn-trilogy.jpg&f=1&nofb=1&ipt=2ddf36e704ee4c96b8f7b4a6e8b6e855247bbce66ad853d8cf707f1f4e8811aa&ipo=images", pageNum:300},
    {title:"The Last Command", year:1995, cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F917vMtyhCOL.jpg&f=1&nofb=1&ipt=c17418f06a73b38b2b0c2a69cc98a13c54b6c28cb0b83534baa89573790065fd&ipo=images", pageNum:450},
    {title:"Dark Force Rising", year:1992, cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.lnHg1J4s34keCT1HiGZJpgHaMJ%3Fpid%3DApi&f=1&ipt=c112bf61ae1232b7932cd5478a9b280fc3b21aa4865cdf584b77faf7d9156bc6&ipo=images", pageNum:400}
];
const albums: Album[] = [
    {name:"The Great Chinggis Khaan",band:"Batzorig Vaanchig",genre:"Mongolian Folk Music",year:2022,cover:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft2.genius.com%2Funsafe%2F600x600%2Fhttps%3A%2F%2Fimages.genius.com%2F7c02798f2624c86e279445fba297959c.1000x1000x1.jpg&f=1&nofb=1&ipt=7c4deda22fa9e5e4dcbe02fdec977c453991a75d8a3d227238c037693f34d8ed&ipo=images",songs:[
        ]
    },
    {name:"Legends",band:"Sabaton",genre:"Power Metal",year:2025, cover:"https://upload.wikimedia.org/wikipedia/en/a/a2/Legends_cover_%28Sabaton%29.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", songs:[
        {title:"Templars",time:4.54},
        {title:"Hordes of Khan",time:3.43},
        {title:"A Tiger Among Dragons", time:4.06},
        {title:"Crossing the Rubicon",time:3.29},
        {title:"I, Emperor",time:4.16},
        {title:"Maid of Steel", time:3.17},
        {title:"Impaler",time:4.44},
        {title:"Lightning at the Gates",time:4.12},
        {title:"The Duelist", time:3.55},
        {title:"The Cycle of Songs",time:5.39},
        {title:"Till Seger",time:3.27}
        ]
    },
    {name:"Kessoku Band",band:"Kessoku Band",genre:"Rock",year:2022, cover:"https://upload.wikimedia.org/wikipedia/en/3/3e/Kessoku_Band_album_cover.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", songs:[
        {title:"Seishun Complex",time:3.23},
        {title:"Hitoribocchi Tokyo",time:3.52},
        {title:"Distortion!",time:3.23},
        {title:"Secret Base",time:3.52},
        {title:"Guitar, Loneliness and Blue Planet",time:3.48},
        {title:"I Can't Sing a Love Song",time:3.08},
        {title:"That Band",time:3.33},{title:"Karakara",time:4.25},
        {title:"The Little Sea",time:3.43},{title:"What Is Wrong With",time:3.47},
        {title:"Never Forget",time:3.43},{title:"If I Could Be a Constellation",time:4.18},
        {title:"Flashbacker",time:4.35},{title:"Rockn' Roll, Morning Light Falls on You",time:4.31}
        ]
    }
];

function map(array,transformFn){
    const result = [];
    for(let item of array){
        result.push( transformFn(item) );
    }
    return result;
}
function Section({
header,
items}){
    const [isOpen, setIsOpen] = useState(true);
    function ToggleVisible(){
        if(isOpen){
            setIsOpen(false); 
        }
        else{
            setIsOpen(true);
        }
    }
    if(isOpen){
        return(
            <>
            <h1 onClick={ToggleVisible}>{header} ▾</h1>
            <span>{items}</span>
            </>
        );
    }
    else{
         return(
            <>
            <h1 onClick={ToggleVisible}>{header} ▸</h1>
            <span style={{display: 'none'}}>{items}</span>
            </>
        );       
    }
}

function App(){
    const filmItems = map(films,Movie);
    const bookItems = map(books,BookObj);
    const albumItems = map(albums,AlbumObj);
    const oldMovies = films.filter(
        (movie) => movie.year < 2010
    );
    const oldMovieItems = map(oldMovies,Movie);
    const booksByYear = [...books].sort(
        (a,b) => a.year - b.year
    );
    const booksByYearItems = map(booksByYear,BookObj);
    const mostSongs = [...albums].sort(
        (a,b) => a.songs.length + b.songs.length
    );
    const mostSongsItem = map(mostSongs,AlbumObj);
    return(
        <main>
            <Section header="Filmy" items={filmItems}/>
            <Section header="Książki" items={bookItems}/>
            <Section header="Albumy" items={albumItems}/>
            <Section header="Filmy sprzed 2010 roku" items={oldMovieItems}/>
            <Section header="Książki od najstarszej" items={booksByYearItems}/>
            <Section header="Album z największą liczbą utworów" items={mostSongsItem[0]}/>
        </main>
    );
}
export default App;
