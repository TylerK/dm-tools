import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { NavBar } from './components/NavBar'
import { Home } from './screens/Home'
import { Maps } from './screens/Maps'
import { Tokens } from './screens/Tokens'

const App = () => (
    <Router>
        <RecoilRoot>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/maps">
                    <Maps />
                </Route>
                <Route path="/tokens">
                    <Tokens />
                </Route>
            </Switch>
        </RecoilRoot>
    </Router>
)

function render() {
    ReactDOM.render(<App />, document.body)
}

render()
