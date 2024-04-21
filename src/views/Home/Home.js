import React, {  useState } from 'react'
import './Home.css'
import I18n from '../../utils/I18n';

function Home() {
   const usersCount  = 20;
   const [lang , setLang]=useState("");

  return (
   
    <div>
        <h1>{I18n("welcomeMessage")}</h1>
        <p>{I18n("normalMessage")} </p>
        <h3>{I18n("greetingMessage")}</h3>

        <select 
        defaultValue={localStorage.getItem('lang')}
        onChange={(e)=>{
            localStorage.setItem("lang",e.target.value);
            window.location.reload();
        }}>
        <option value="mr">Marathi</option>
            <option value="en">English</option>
            <option value="hn">Hindi</option>
        </select>
        <p>{I18n("usersStatMessage" , "<studentCount>",usersCount)}</p>
    </div>
  )
}

export default Home