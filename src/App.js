
import './App.css';
import { Button, Container, Table} from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [poke,setPoke] = useState([]);
  const PkButton = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
          .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
            setPoke(response.results)
        }).catch(err=>{
            console.log(err);
        });
    
  }
  return (
    <div className="App">
      <Container>
      <Button onClick={e=>(PkButton())} >Fetch</Button>
      <Table>
        <tbody>
            {poke && poke.map((pkm, index)=> <tr key={index}>
                        <td>{pkm.name}</td>
            </tr>)
            }
        </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
