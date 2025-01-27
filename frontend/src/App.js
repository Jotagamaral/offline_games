import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Memory/Game';
import SelectGame from './components/SelectGame';
import CrosswordGame from './components/Crossword/CrosswordGame';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Página inicial */}
                <Route path="/select-game" element={<SelectGame />} /> {/* Seleção de jogos */}
                <Route path="/memory-game" element={<Game />} /> {/* Jogo da Memória */}
                <Route path="/crossword" element={<CrosswordGame />} /> {/* Palavra Cruzada */}
            </Routes>
        </Router>
    );
};

export default App;
