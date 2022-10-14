export default function Poznamky(props){
    console.log(props);

    return (
        <div className="poznamky-container">
            <div>
                <h2>POZNÁMKY</h2>
                <p>Jaké máte cíle? Co jste dělali doteď? Jaké máte očekávání? Máte nějáké speciální požadavky?</p>
            </div>

            <div>
                <textarea type="text" className="poznamky-input" onChange={props.handleChange}></textarea>
            </div>

            <button onClick={props.odesli}>Odeslat</button>

        </div>
    )
}