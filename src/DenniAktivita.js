export default function DenniAktivita(props){
    return(
        <div className="denni-aktivita-container">
            <h2>Denní aktivita</h2>
            <div className="div-denni-akt">
                <span className="paragraph">Počet kroků za den:</span>
                <input type="number" min={0} id="pocet-kroku-input" value={props.pocetKrokuZaDen} name="pocetKrokuZaDen" onChange={props.handleChange}/>
            </div>
            
            <div>
                <div className="div-prace">
                    <span className="paragraph">Práce:</span>
                    <div className="div-prace-input">
                        <input type="radio" className="typ-prace-checkbox" id="prace-manualne-tezka" name="prace" onChange={props.handleChange}/>
                        <label for="manualne-tezka">manuálně těžká</label> 
                        
                        <input type="radio" className="typ-prace-checkbox" id="prace-manualne-lehka" name="prace" onChange={props.handleChange}/>
                        <label for="manualne-lehka">manuálně lehká</label> 

                        <input type="radio" className="typ-prace-checkbox" id="prace-sezeni-chuze" name="prace" onChange={props.handleChange}/>
                        <label for="sezeni-chuze">sezení i chůze</label> 

                        <input type="radio" className="typ-prace-checkbox" id="prace-sedava" name="prace" onChange={props.handleChange}/>
                        <label for="sedava">sedavá</label> 
                    </div>
                </div>

                <div className="div-fitness">
                    <span className="paragraph">Fitness:</span>
                    <div className="div-fitness-input">
                        <input type="radio" className="fitness-checkbox" id="neposiluji" name="fitnes" onChange={props.handleChange}/>
                        <label for="neposiluji">neposiluji</label> 

                        <input type="radio" className="fitness-checkbox" id="posiluji" name="fitnes"  onChange={props.handleChange}/>
                        <label for="posiluji">posiluji - počet hodin týdně</label> 
                        <input type="number" min={0} id="posiluji-hodin-tydne" disabled={props.state.neposiluji}/> 
                    </div>

                </div>
              
                <div className="div-kardio">
                    <span className="paragraph">Kardio:</span>
                    <div className="kardio-input">
                        <input type="radio" className="kardio-checkbox" id="kardio-nedelam" name="kardio" onChange={props.handleChange}/>
                        <label for="kardio-nedelam">nedělám</label>

                        <input type="radio" className="kardio-checkbox" id="kardio-delam" name="kardio" onChange={props.handleChange}/>
                        <label for="kardio-delam">dělám - počet hodin týdně</label> 
                        <input type="number" min={0} id="kardio-hodin-tydne" disabled={props.state['kardio-nedelam']}/>  
                    </div>
                </div>

            </div>

        </div>
    )
}