import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';


import './CardChamps.css'

function CardChamps({dados }){
    console.log(dados)

    return(
        
        
        
        <Col xs={12} sm= {6} md={4} xl={3}>
        <Card className='cardcampeao' key={dados.id}>
            <Card.Img className='cardimage' variant="top" src={dados.imagem} />
            <Card.Body>
            <Card.Title className='TituloCard'>{dados.nome}</Card.Title>
                <Card.Text>
                    
                </Card.Text>
                <Card.Text className='CorFonte'>
                    Dano
                    <ProgressBar className='BarraDano'  now={dados.dano} />
                </Card.Text>
                <Card.Text className='CorFonte'>
                    Resistencia
                    <ProgressBar className='BarraResistencia'  now={dados.resistencia} />
                </Card.Text>
                <Card.Text className='CorFonte'>
                    Utilidade
                    <ProgressBar className='BarraUtilidade' now={dados.utilidade} />
                </Card.Text >
                <Card.Text className='CorFonte'>
                    Controle de Grupo
                    <ProgressBar className='BarraControleGrupo' now={dados.controle_de_grupo} />
                </Card.Text>
                





                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
        </Col>
        
        

        



        


    )

}

export default CardChamps