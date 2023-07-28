import React from 'react';
import { useState, useEffect } from 'react'

import './App.css'
import { getCampeoes} from './services/user'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import CardChamps from './Components/cardChamps/CardChamps';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



function App() {
  const[Campeoes, setCampeoes] = useState([])

  const fetchData = async () => {
    try {
      const dados = await getCampeoes()
      setCampeoes(dados)


    } catch (err) {
      api.post

    }
  }


  useEffect(() => {
    fetchData()



  }, [])


  return (

  
  <div>
    
    <Header/>
    
    
      <Container className='Conteudo'>
      
        <Row className='LinhaCampeoes'>
        {Campeoes.map(champ =>(
        <CardChamps key={champ.id}  dados={champ}/>

        ))}
        
        </Row>
        
      </Container>

       <Footer/>

    
    
   
     

    

  </div>
  
    
      
     


  
   
  
      
      
        
      
    
      
    
    
    
    
    
    
  
  
    
  )
}

export default App
