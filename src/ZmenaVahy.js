export default function ZmenaVahy(props){
    return(
        <div className="zmena-vahy-container">
            <div>
                <h2>JAK RYCHLE CHCETE MĚNIT VAŠI VÁHU</h2>
            </div>
            
            <div className="horizontal-line"></div>

            <div className="zmena-vahy-div">
                <div className="zmena-vahy">
                    <input type="radio" id="nightmare-mode" disabled={props.state.aktualniVaha < props.state.cilovaVaha} name="zmena-vahy" onChange={props.handleChange}/><br></br>
                    <label for="nightmare-mode" Style="width: 80px">NIGHTMARE MODE</label>
                </div>
                    
                <div className="zmena-vahy">
                    <input type="radio" id="cut" disabled={props.state.aktualniVaha < props.state.cilovaVaha} name="zmena-vahy" onChange={props.handleChange}/>
                    <label for="cut">CUT</label>
                </div>

                <div className="zmena-vahy">
                    <input type="radio" id="slow-cut" disabled={props.state.aktualniVaha < props.state.cilovaVaha} name="zmena-vahy" onChange={props.handleChange}/><br></br>
                    <label for="slow-cut" Style="width: 80px">SLOW CUT</label> 
                </div>

                <div className="zmena-vahy">
                    <input type="radio" id="udrzovani-vahy" name="zmena-vahy" onChange={props.handleChange}/>
                    <label for="udrzovani-vahy">UDRŽOVÁNÍ VÁHY</label> 
                </div>

                <div className="zmena-vahy">
                    <input type="radio" id="clean-bulk" name="zmena-vahy" disabled={props.state.aktualniVaha > props.state.cilovaVaha} onChange={props.handleChange}/><br></br>
                    <label for="clean-bulk" Style="width: 80px" >CLEAN BULK</label>
                </div>

                <div className="zmena-vahy">
                    <input type="radio" id="bulk" name="zmena-vahy" disabled={props.state.aktualniVaha > props.state.cilovaVaha} onChange={props.handleChange}/>
                    <label for="bulk">BULK</label> 
                </div>

                <div className="zmena-vahy">
                    <input type="radio" id="dirty-bulk" name="zmena-vahy" disabled={props.state.aktualniVaha > props.state.cilovaVaha} onChange={props.handleChange}/><br></br>
                    <label for="dirty-bulk" Style="width: 80px">DIRTY BULK</label>
                </div>
            </div>
        </div>
    )
}