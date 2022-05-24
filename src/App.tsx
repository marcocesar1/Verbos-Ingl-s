

import './App.css';
import { Container } from '@mui/system';
import { EventHandler, FormEvent, useEffect, useState } from 'react';
import { IVerb, verbsList } from './static/verbs';
import { Button, TextField, Typography } from '@mui/material';

function App() {

  const [showAnswer, setShowAnswer] = useState(false)
  const [verbs, setVerbs] = useState(verbsList);
  const [verb, setVerb] = useState<IVerb>();
  const [simplePast, setSimplePast] = useState('')
  const [participlePast, setParticiplePast] = useState('')
  const [message, setMessage] = useState('')

  const randomVerb = () => {
    const verbRandom = Math.floor(Math.random() * verbs.length);

    console.log({
      verbslenght: verbs.length
    })

    const verbFound = verbs.find((v, index) => index === verbRandom);
    const verbsUpdated = verbs.filter((v, index) => index !== verbRandom);

    setVerb(verbFound);
    setVerbs(verbsUpdated);
  }

  const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!verb) return;

    setShowAnswer(false)

    const {
      simple_past,
      participle_past      
    } = verb;

    const simplePastLower = simple_past.map(v => v.toLocaleLowerCase())
    const participlePastLower = participle_past.map(v => v.toLocaleLowerCase())

    if(simplePastLower.includes(simplePast) && participlePastLower.includes(participlePast)){
      console.log('correcto')
      setMessage('')
      randomVerb()
      setParticiplePast('')
      setSimplePast('')
    }else{
      setMessage('Los datos ingresados son incorrectos')
    }
  } 

  useEffect(() => {
    randomVerb();
  }, [])
  

  return (
    <div>
      <Container maxWidth="sm">        
        <Typography variant="h3" gutterBottom component="div">
          {verb && verb.infinitive}
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          {verb && verb.translate}
        </Typography>

        
        { (showAnswer && verb)  && <table>
          <tr>
            <td>Simple past</td>
            <td>{verb.simple_past.join(',')}</td>
          </tr>
          <tr>
            <td>Participle past</td>
            <td>{verb.participle_past.join(',')}</td>
          </tr>
        </table> }
        <form onSubmit={handleSubmit}>
          <p>{message}</p>
          <TextField 
            label="Simple past"
            variant="standard" 
            value={simplePast}
            onChange={e => setSimplePast(e.target.value.toLowerCase())}
            style={{marginRight: '20px'}}
            autoComplete="off"
          />
          <TextField 
            label="Participle past"
            variant="standard"
            value={participlePast}
            onChange={e => setParticiplePast(e.target.value.toLowerCase())}
          />
          <div style={{marginTop: '30px'}}>
            <Button onClick={() => setShowAnswer(true)} variant="outlined">Mostrar respuesta</Button>
            <Button type="submit" variant="contained" style={{ marginLeft: '10px' }}>Enviar</Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default App;
