import DrawScreen from './lib/DrawScreen/DrawScreen';
import './App.css';

function App() {
  return (
    <div style={{ display:'flex', 
              flexDirection:'column', 
              alignItems:'start', 
              justifyContent:'center', 
              gap:'1.5rem', 
              padding: '5rem' }}>
      <p>Wow, look at this component library.</p>
      <DrawScreen />
    </div>
  );
}

export default App;