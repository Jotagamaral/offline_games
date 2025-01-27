import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handlePlayGame = () => {
        navigate('/select-game'); // Redireciona para a página do jogo
    };

    return (
        <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl text-gray-900 font-bold mb-6">Joguinhos!</h1>
            <p className="text-lg text-gray-900 mb-10 text-center max-w-lg">
                Clique no botão abaixo para escolher um jogo!
            </p>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
                onClick={handlePlayGame}
            >
                Jogar
            </button>
        </div>
    );
};

export default Home;
