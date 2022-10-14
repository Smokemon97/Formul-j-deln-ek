export default function OsobniInformace(props){
    /* let inpTextNumb = document.querySelectorAll('input[type=text], input[type=number]');
    let osobniInfoArray = []
    */

    return(
        <div>
            <div>
                <h2>Osobní informace</h2>
            </div>
            
            <div className="obe-pulky">
                <div className="leva-pulka-OI">

                    <div className="osobni-info-div">
                            <span className="paragraph">Jméno:</span>
                            <input type="text" value={props.jmeno} placeholder="jmeno" className="input" id="jmeno" name="jmeno" onChange={props.handleChange}></input>
                    </div>

                    <div className="osobni-info-div">
                            <span className="paragraph">Výška:</span>
                            <input type="number" min={0} max={250} value={props.vyska} placeholder="cm" className="input" name="vyska" onChange={props.handleChange}></input>
                    </div>

                    <div className="osobni-info-div">
                            <span className="paragraph">Cílová váha:</span>
                            <input type="number"min={0} value={props.cilovaVaha} placeholder="kg" name="cilovaVaha" className="input" onChange={props.handleChange}></input>
                    </div>

                    <div className="osobni-info-div">
                            <span className="paragraph">Aktuální příjem kcal:</span>
                            <input type="number" min={0} value={props.aktualniPrijemKcal} placeholder="kcal" name="aktualniPrijemKcal" className="input" onChange={props.handleChange}></input>
                    </div>
                </div>

                <div className="prava-pulka-OI">
                    <div className="osobni-info-div">
                            <span className="paragraph">Věk</span>
                            <input type="number" min={0} max={105} value={props.vek} placeholder="let" name="vek" className="input" onChange={props.handleChange}></input>
                    </div>

                    <div className="osobni-info-div">
                            <span className="paragraph">Aktuální váha</span>
                            <input type="number" min={0} value={props.aktualniVaha} placeholder="kg" name="aktualniVaha" className="input" onChange={props.handleChange}></input>
                    </div>

                    <div className="osobni-info-div">
                            <span className="paragraph">Aktuální % tuku:</span>
                            <input type="number" min={0} max={50} value={props.aktualniProcentoTuku} placeholder="%" name="aktualniProcentoTuku" className="input" onChange={props.handleChange}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}