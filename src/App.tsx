import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./components/pages/HomePage/HomePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
            </Routes>
        </Router>
    );
}

export default App;
