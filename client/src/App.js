import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import OtherPage from './OtherPage'
import Fib from './Fib'

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Fib Calculator</h1>
                    {/* Redirection vers les urls indiqués */}
                    <div>
                        <a href="/#">learn react</a>
                    </div>
                    <Link to="/">Home</Link>
                    <Link to="/otherpage">Other Page</Link>
                </header>
                <div>
                    {/* Affichage des composants en fonction de l'url actuelle */}
                    <Route exact path="/" component={Fib} />
                    <Route exact path="/otherpage" component={OtherPage} />
                </div>
            </div>
        </Router>
    )
}

export default App
