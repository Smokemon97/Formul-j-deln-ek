export default function Preference(props){
    return(
        <div>
            <h2>Preference</h2>
            <div className="kolik-jidel-jite">
                <span className="kolik-jidel-span">
                    Kolik jídel denně jíte: 
                </span>
                    <div className="input-kolik-jidel">
                    <input type="radio" className="preference-checkbox" id="3jidla-cb" name="kolikJidel" onChange={props.handleChange}/>
                    <label for="3jidla-cb">3</label>
            
                    <input type="radio" className="preference-checkbox" id="4jidla-cb" name="kolikJidel" onChange={props.handleChange}/>
                    <label for="4jidla-cb">4</label>
                    
                    <input type="radio" className="preference-checkbox" id="5jidel-cb" name="kolikJidel" onChange={props.handleChange}/>
                    <label for="5jidel-cb">5</label>
                </div>

                

            </div>
        </div>
    )
}