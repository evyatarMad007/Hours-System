// import Row from './components/row/row';
import Add_Row from './components/add-row/add_row';
import './app.css';

function App() {
  return (
    <div className="App">

      <h1>מערכת ספירת שעות</h1>
      
      <div className="add-project-box">
      <button>הוסף פרוייקט חדש +</button>
      </div>
      
      {/* <Row
      projectName=""
      workTime="15:00"
      /> */}


      <Add_Row/>

      




    </div>
  );
}

export default App;
