import  Card from './components/card'
import './App.css';
import Header from './components/header';
import styled from 'styled-components'

function App() {
  const Main = styled.div`
  max-width:75ch;
  margin:0 auto;
  padding: 1em;`

  return (
    <>
      <Header />
      <Main>
      <Card />

      </Main>
  </>
  );
}

export default App;
