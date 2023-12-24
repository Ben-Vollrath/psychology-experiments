import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Groesseneindruck from './/pages/Groesseneindruck';



function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/groesseneindruck">Circle Page</Link>
            </nav>
            <Routes>
                <Route path="/groesseneindruck" element={<Groesseneindruck />} />
                {/* Add other routes here */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
