import React from "react"

export default function CoNejite(props){
    
    return(
        <div className="co-nejite-div">
            <span className="span-co-nejite">Co nejíte:</span>
            <div className="container-co-nejite">
                <div id="maso-container">
                    <input type="checkbox" id="maso-cb" className="maso" name="maso" onClick={props.handleChange}/>
                    <label htmlFor="maso-cb"><b>Maso</b></label>
                    <br></br>

                    <input type="checkbox" className="maso" id="kureci-prsa-cb" name="kureciPrsa" onClick={props.handleChange}/>
                    <label htmlFor="kureci-prsa-cb">Kuřecí prsa</label>
                    <br></br>

                    <input type="checkbox" className="maso" id="kureci-stehna-cb" name="kureciStehna" onClick={props.handleChange}/>
                    <label htmlFor="kureci-stehna-cb">Kuřecí stehna</label>
                    <br></br>

                    <input type="checkbox" className="maso" id="kruti-prsa-cb" name="krutiPrsa" onClick={props.handleChange}/>
                    <label htmlFor="kruti-prsa-cb">Krůtí prsa</label>
                    <br></br>

                    <input type="checkbox" className="maso" id="kruti-stehna-cb" name="krutiStehna" onClick={props.handleChange}/>
                    <label htmlFor="kruti-stehna-cb">Krůtí stehna</label>
                    <br></br>

                    <input type="checkbox" className="maso" id="veprove-libove-cb" name="veproveLibove" onClick={props.handleChange} />
                    <label htmlFor="veprove-libove-cb">Vepřové libové</label>
                    <br></br>

                    <input type="checkbox" className="maso" id="veprove-mlete-cb" name="veproveMlete" onClick={props.handleChange} />
                    <label htmlFor="veprove-mlete-cb">Vepřové mleté</label>
                    <br></br>

                    <input type="checkbox" className="maso" id="hovezi-steak-cb" name="hoveziSteak" onClick={props.handleChange} />
                    <label htmlFor="hovezi-steak-cb">Hovězí steak</label>
                    <br></br>

                    <input type="checkbox" className="maso" id="hovezi-mlete-cb" name="hoveziMlete" onClick={props.handleChange} />
                    <label htmlFor="hovezi-mlete-cb">Hovězí mleté</label>
                    <br></br>

                    <input type="checkbox" className="maso" id="jatra-cb" name="jatra" onClick={props.handleChange} />
                    <label htmlFor="jatra-cb">Játra</label>
                    <br></br>

                    <input type="checkbox" className="maso" id="vnitrnosti-cb" name="vnitrnosti" onClick={props.handleChange}/>
                    <label htmlFor="vnitrnosti-cb">Vnitřnosti</label>
                    <br></br>

                    <input type="checkbox" className="maso" id="losos-cb" name="losos" onClick={props.handleChange}/>
                    <label htmlFor="losos-cb">Losos</label>
                    <br></br>

                    <input type="checkbox" className="maso" id="tunak-cb" name="tunak" onClick={props.handleChange}/>
                    <label htmlFor="tunak-cb">Tuňák</label>
                    <br></br>

                    <input type="checkbox" className="maso" id="ryby-cb" name="ryby" onClick={props.handleChange}/>
                    <label htmlFor="ryby-cb">Ryby obecně</label>
                </div>

                <div id="mlecvyrobky-container">
                    <input type="checkbox" className="mlecneVyrobky" id="mlecnevyrobky-cb" name="mlecneVyrobky" onClick={props.handleChange} /*onChange={() => checkAllChildren('mlecnevyrobky-container')}*/ />
                    <label htmlFor="mlecnevyrobky-cb"><b>Mléčné výrobky</b></label>
                    <br></br>

                    <input type="checkbox" className="mlecneVyrobky" id="mleko-cb" name="mleko" onClick={props.handleChange}/>
                    <label htmlFor="mleko-cb">Mléko</label>
                    <br></br>

                    <input type="checkbox" className="mlecneVyrobky" id="kefir-cb" name="kefir" onClick={props.handleChange}/>
                    <label htmlFor="kefir-cb">Kefír</label>
                    <br></br>

                    <input type="checkbox" className="mlecneVyrobky" id="acid-mleko-cb" name="acidMleko" onClick={props.handleChange}/>
                    <label htmlFor="acid-mleko-cb">Acidofilní mléko</label>
                    <br></br>

                    <input type="checkbox" className="mlecneVyrobky" id="tvaroh-cb" name="tvaroh" onClick={props.handleChange}/>
                    <label htmlFor="tvaroh-cb">Tvaroh</label>
                    <br></br>

                    <input type="checkbox" className="mlecneVyrobky" id="skyr-cb" name="skyr" onClick={props.handleChange}/>
                    <label htmlFor="skyr-cb">Skyr</label>
                    <br></br>

                    <input type="checkbox" className="mlecneVyrobky" id="jogurt-bily-cb"  name="jogurtBily" onClick={props.handleChange}/>
                    <label htmlFor="jogurt-bily-cb">Jogurt bílý</label>
                    <br></br>

                    <input type="checkbox" className="mlecneVyrobky" id="cottage-cb" name="cottage" onClick={props.handleChange}/>
                    <label htmlFor="cottage-cb">Cottage cheese</label>
                </div>

                <div id="prilohy-container">
                    
                    <span><b>Přílohy</b></span>
                    <br></br>

                    <input type="checkbox" className="prilohy" id="ryze-basmati-cb" name="ryzeBasmati" onClick={props.handleChange}/>
                    <label htmlFor="ryze-basmati-cb">Rýže basmati</label>
                    <br></br>

                    <input type="checkbox" className="prilohy" id="ryze-arborio-cb" name="ryzeArborio" onClick={props.handleChange}/>
                    <label htmlFor="ryze-arborio-cb">Rýže arborio</label>
                    <br></br>

                    <input type="checkbox" className="prilohy" id="ryze-jasminova-cb" name="ryzeJasminova" onClick={props.handleChange}/>
                    <label htmlFor="ryze-jasminova-cb">Rýže jasmínová</label>
                    <br></br>

                    <input type="checkbox" className="prilohy" id="ryze-dlouhozrna-cb" name="ryzeDlouhozrna" onClick={props.handleChange}/>
                    <label htmlFor="ryze-dlouhozrna-cb">Rýže dlouhozrná</label>
                    <br></br>

                    <input type="checkbox" className="prilohy" id="rýžová-kaše-cb" name="ryzovaKase" onClick={props.handleChange}/>
                    <label htmlFor="rýžová-kaše-cb">Rýžová kaše</label>
                    <br></br>

                    <input type="checkbox" className="prilohy" id="brambory-cb" name="brambory" onClick={props.handleChange}/>
                    <label htmlFor="brambory-cb">Brambory</label>
                    <br></br>

                    <input type="checkbox" className="prilohy" id="batáty-cb" name="bataty"  onClick={props.handleChange}/>
                    <label htmlFor="batáty-cb">Batáty</label> 
                </div>

                <div id="jinecontainer">
                    <span><b>Jiné</b></span>
                    <br></br> 

                    <input type="checkbox" className="jine" id="protein-syrovatkovy-cb" name="proteinSyrovatkovy"  onClick={props.handleChange} />
                    <label htmlFor="protein-syrovátkový-cb">Protein syrovátkový</label>
                    <br></br> 

                    <input type="checkbox" className="jine" id="protein-micelarni-kasein-cb" name="proteinMicelarniKasein"  onClick={props.handleChange}/>
                    <label htmlFor="protein-micelarni-kasein-cb">Micelární kasein</label>
                    <br></br> 

                    <input type="checkbox" className="jine" id="vejce-cb" name="vejce" onClick={props.handleChange}/>
                    <label htmlFor="vejce-cb">Vejce</label>
                    <br></br> 

                    <input type="checkbox" className="jine" id="špenát-cb" name="spenat" onClick={props.handleChange}/>
                    <label htmlFor="špenát-cb">Špenát</label>
                    <br></br> 

                    <input type="checkbox" className="jine" id="zelenina-cb" name="zelenina" onClick={props.handleChange}/>
                    <label htmlFor="zelenina-cb">Zelenina obecně</label>
                    <br></br> 

                    <input type="checkbox" className="jine" id="bulgur-cb" name="bulgur"  onClick={props.handleChange}/>
                    <label htmlFor="bulgur-cb">Bulgur</label>
                    <br></br> 

                    <input type="checkbox" className="jine" id="ovesnevlocky-cb" name="ovesneVlocky"  onClick={props.handleChange}/>
                    <label htmlFor="ovesnevlocky-cb">Ovesné vločky</label>
                    <br></br> 

                    <input type="checkbox" className="jine" id="ovesna-kase-cb" name="ovesnaKase"  onClick={props.handleChange}/>
                    <label htmlFor="ovesna-kase-cb">Ovesná kaše</label>
                    <br></br> 

                    <input type="checkbox" className="jine" id="jáhly-cb" name="jahly"  onClick={props.handleChange}/>
                    <label htmlFor="jáhly-cb">Jáhly</label>
                    <br></br> 

                </div>
            </div>
            
        </div>


    )
    
}
