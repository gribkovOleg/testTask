import { Route, Link } from 'react-router-dom'
import Main from './components/Main.js'
import Employees from './components/Employees.js'
import './styles/style.css'

function App() {
  return (
    <>
      <header className="header">
        <Link to="/main"><h1>main</h1></Link>
        <Link to="/employees"><h1>employees</h1></Link>
      </header>
      <Route path="/main">
        <Main />
      </Route>
      <Route path="/employees">
        <Employees />
      </Route>
    </>
  )
}

export default App;
