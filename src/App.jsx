import React from 'react'
import './App.scss'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'


import langData from './Localization/data'

import { Context } from './Context/Localization'


function App () {
    
    const { state } = React.useContext(Context)
    
    
    return (
        <>
        <div className="container">
        <div className="disklone">
            <Header />
            
            <Main />
            
            <Footer />
        </div>
        </div>
        
        
        {/* <main>
            {langData[state].main.title}
            </main>
            
            
        <Footer /> */}
        </>
        );
    }
    
    export default App;