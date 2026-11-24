import "./App.css";
import { useState } from "react";

interface character {
    imie: string;
    rasa: string;
    klasa: string;
    poziom: string;
    opis: string;
    publiczna: boolean
}
function Character(character: character) {
    let publicza = "";
    const czyPubliczna = Object.values(character)[5];
    if (czyPubliczna == true) {
        publicza = "Postać publicza";
    }
    else {
        publicza = "Postać prywatna";
    }
    return (
        <section className="Cards col">
            <p>Imię: {character.imie}</p>
            <p>Rasa: {character.rasa}</p>
            <p>Klasa: {character.klasa}</p>
            <p>Poziom: {character.poziom}</p>
            <p>Opis: {character.opis}</p>
            <p>{publicza}</p>
            <hr />
        </section>
    );
}
function Error(error: string) {
    return (
        <p>{error}</p>
    );
}
function App() {
    const [formData, setFormData] = useState({
        imie: "",
        rasa: "",
        klasa: "",
        poziom: "",
        opis: "",
        publicza: false
    });
    const [characters, setCharacters] = useState([]);
    const [errors, setErrors] = useState([]);
    const [errorFields, setErrorFields] = useState(["white", "white", "white", "white", "white"]);
    const [counter, setCounter] = useState(0);
    function handleChange(event) {
        const { id, value } = event.target;
        if(id == "opis"){
            let count = value.trim().length;
            setCounter(count);
        }
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    }
    function handleToggle(event) {
        const { id, checked } = event.target;
        setFormData(prev => ({
            ...prev,
            [id]: checked
        }));
    }
    function handleSubmit(event) {
        event.preventDefault();
        const formErrors = [];
        const fieldsWithErrors = [false, false, false, false, false];
        if (formData.imie.trim().length > 20 || formData.imie.length < 3) {
            formErrors.push("Niepoprawna długość imienia");
            fieldsWithErrors[0] = "#f00";
        }
        if (Number.parseInt(formData.poziom) == null || Number.parseInt(formData.poziom) == undefined || Number.isNaN(Number.parseInt(formData.poziom))) {
            formErrors.push("Poziom nie jest liczbą");
            fieldsWithErrors[3] = "#f00";
        }
        else if (Number.parseInt(formData.poziom) < 1 || Number.parseInt(formData.poziom) > 100) {
            formErrors.push("Poziom musi być z zakresu 1-100");
            fieldsWithErrors[3] = "#f00";
        }
        if (formData.rasa == "") {
            formErrors.push("Nie wybrano rasy");
            fieldsWithErrors[1] = "#f00";
        }
        if (formData.klasa == "") {
            formErrors.push("Nie wybarno klasy");
            fieldsWithErrors[2] = "#f00";
        }
        if (formData.opis.trim().length > 200) {
            formErrors.push("Opis jest zbyt długi");
            fieldsWithErrors[4] = "#f00";
        }
        if (formErrors.length > 0) {
            setErrors(formErrors);
            setErrorFields(fieldsWithErrors);
        }
        else {
            setErrors([]);
            setErrorFields(["white", "white", "white", "white", "white"]);
            const charactersData = [...characters];
            charactersData.push(formData);
            setCharacters(charactersData);
        }

    }
    function resetForm(event) {
        setFormData({
            imie: "",
            rasa: "",
            klasa: "",
            poziom: "",
            opis: "",
            publicza: false
        });
    }
    return (
        <main className={'container-fluid text-center'}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="imie">Imię: </label>
                <input type="text" id="imie" value={formData.imie} onChange={handleChange} style={{ backgroundColor: errorFields[0] }} /><br />
                <label htmlFor="rasa">Rasa: </label>
                <select id="rasa" value={formData.rasa} onChange={handleChange} style={{ backgroundColor: errorFields[1] }}>
                    <option value="">Wybierz rasę</option>
                    <option value="Człowiek">Człowiek</option>
                    <option value="Krasnolud">Krasnolud</option>
                    <option value="Ork">Ork</option>
                    <option value="Elf">Elf</option>
                </select><br />
                <label htmlFor="klasa">Klasa: </label>
                <select id="klasa" value={formData.klasa} onChange={handleChange} style={{ backgroundColor: errorFields[2] }}>
                    <option value="">Wybierz klasę</option>
                    <option value="Wojownik">Wojownik</option>
                    <option value="Mag">Mag</option>
                    <option value="Łucznik">Łucznik</option>
                </select><br />
                <label htmlFor="poziom">Poziom: </label>
                <input type="number" id="poziom" value={formData.poziom} onChange={handleChange} style={{ backgroundColor: errorFields[3] }} /><br />
                <label htmlFor="opis">Opis: </label>
                <textarea id="opis" value={formData.opis} onChange={handleChange} style={{ backgroundColor: errorFields[4] }} /><span>{counter}</span><br />
                <label htmlFor="publicza">Postać publicza: </label>
                <input type="checkbox" id="publicza" checked={formData.publicza} onChange={handleToggle} /><br />
                <button type="button" onClick={resetForm}>Resetuj formularz</button>
                <button type="submit">Stwórz postać</button>
            </form>
            <span>{errors.map(Error)}</span>
            <section>{characters.map(Character)}</section>
        </main>
    );
}
export default App;
