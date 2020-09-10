import React, { useEffect } from "react";
import "./App.css";
import ColorList from "./ColorList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ColorPalette from "./ColorPalette";
function App() {
    useEffect(() => {
        document.body.classList.remove("no-scrollbar");
    }, []);

    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/palette/:id" key={23}>
                        <ColorPalette key={1} />
                    </Route>
                    <Route path="/">
                        <nav className="app__nav">
                            <h1 className="title">ColorsBySami</h1>
                        </nav>
                        <ColorList className="app__colorlist" />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
