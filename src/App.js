import Dashboard from './assets/Dashboard';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Doctor from './assets/doctor';
import Student from './assets/Student'
import CA from './assets/CA'
import Lawyer from './assets/Lawyer'
import Requests from './assets/Request';


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
            <Routes>
                <Route path='/Dashboard' element={<Dashboard/>} />
                <Route path='/Doctor' element={<Doctor/>} />
                <Route path='/Student' element={<Student/>} />
                <Route path='/CA' element={<CA/>} />
                <Route path='/Lawyer' element={<Lawyer/>} />
                <Route path='/Request' element={<Requests/>} />
              
                
            </Routes>
        </BrowserRouter>

     
    </div>
  );
}

export default App;
