import React from 'react';
import './App.css';
import Header from "./Header";
import OsobniInformace from "./OsobniInformace";
import DenniAktivita from "./DenniAktivita";
import Preference from "./Preference";
import CoNejite from "./CoNejite";
import ZmenaVahy from "./ZmenaVahy"
import Poznamky from './Poznamky';

function App() {



  const kontejnery = ["maso", "mlecneVyrobky", "prilohy", "jine"];
  
  const handleChange = (event) => {
    const {name, value, type, checked, id} = event.target
    setFormData(prevFormData => {
      if (kontejnery.includes(name) && type === "checkbox" ) {
        let prilohy = document.getElementsByClassName(name);
        for (let key in prilohy) {
          const id = prilohy[key].id;
          if (id) {
            const name = prilohy[key].name;
            const DOMel = document.getElementById(id);
            DOMel.checked = checked;
            formData[name] = checked;
          }
        }
      }
      
      if (type === "radio") {
        let elements = document.getElementsByName(name);
        let newFormData = prevFormData;
        elements.forEach(el => {
          if (el.id !== name) {
            newFormData = {
              ...newFormData,
              [el.id]: false,
            }
          }
        });
        return {
          ...newFormData,
          [id]: true,
        }
      } else {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value,
        }
      }
    })
    
  }


  const [formData, setFormData] = React.useState(
    {
        jmeno: "", 
        vyska: "", 
        cilovaVaha: "",
        aktualniPrijemKcal: "",
        vek: "",
        aktualniVaha: "",
        aktualniProcentoTuku: "",
        maso: false,
        kureciPrsa: false,
        kureciStehna: false,
        krutiPrsa: false,
        krutiStehna: false,
        veproveLibove: false,
        veproveMlete: false,
        hoveziSteak: false,
        hoveziMlete: false,
        jatra: false,
        vnitrnosti: false,
        losos: false,
        tunak: false,
        ryby: false,
        mlecneVyrobky: false,
        mleko: false,
        kefir: false,
        acidMleko: false,
        tvaroh: false,
        skyr: false,
        jogurtBily: false,
        cottage: false,
        prilohy: false,
        ryzeBasmati: false,
        ryzeArborio: false,
        ryzeJasminova: false,
        ryzeDlouhozrna: false,
        ryzovaKase: false,
        brambory: false,
        bataty: false,
        jine: false,
        proteinSyrovatkovy: false,
        proteinMicelarniKasein: false,
        vejce: false,
        spenat: false,
        zelenina: false,
        bulgur: false,
        ovesneVlocky: false,
        ovesnaKase: false,
        jahly: false, 
        pocetKrokuZaDen: "",
        druhPrace: ""

    },
  )

const odesli = (e) => {
  e.preventDefault();
  // TODO: url 
  fetch('http://jidelnicek.janmichalov.cz/', {
    method: 'POST',
    body: JSON.stringify(formData)
  }).then(()=>{
    alert("Úspěšně odesláno")
  }
  )


}


  console.log(formData)
  

  return (
    <div className="App">
      <Header />
      <OsobniInformace state={formData} handleChange={handleChange}/>
      <DenniAktivita state={formData}  handleChange={handleChange}/>
      <Preference state={formData}  handleChange={handleChange}/>
      <CoNejite state={formData} handleChange={handleChange}/>
      <ZmenaVahy state={formData} handleChange={handleChange}/>
      <Poznamky state={formData} handleChange={handleChange} odesli={odesli}/>
    </div>  

  );
}

export default App;
 