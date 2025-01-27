import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const Board = ({ initialCards, updateScore }) => {
    const [cards, setCards] = useState(shuffleArray([...initialCards]));
    const [flippedCards, setFlippedCards] = useState([]); // Índices das cartas viradas
    const [matchedCards, setMatchedCards] = useState([]); // Índices das cartas combinadas
    const [wrongCards, setWrongCards] = useState([]); // Índices das cartas erradas (temporariamente)
    const [isResetting, setIsResetting] = useState(false); // Controla animação de reset

    const navigate = useNavigate(); // Hook para navegação

    // Função para embaralhar as cartas usando o algoritmo de Fisher-Yates
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Lidar com o clique em uma carta
    const handleCardClick = (index) => {
        if (
            flippedCards.length >= 2 || 
            flippedCards.includes(index) || 
            matchedCards.includes(index) || 
            wrongCards.includes(index)
        ) {
            return;
        }

        setFlippedCards((prev) => [...prev, index]);
    };

    // Checar se as cartas viradas formam um par
    useEffect(() => {
        if (flippedCards.length === 2) {
            const [firstIndex, secondIndex] = flippedCards;

            if (cards[firstIndex] === cards[secondIndex]) {
                setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
                updateScore(10); // Incrementa pontuação para par correto
                setFlippedCards([]);
            } else {
                setWrongCards([firstIndex, secondIndex]);
                setTimeout(() => {
                    setWrongCards([]);
                    setFlippedCards([]);
                    updateScore(-5); // Deduz pontos para par errado
                }, 1000); // Tempo para mostrar as cartas erradas
            }
        }
    }, [flippedCards, cards, updateScore]);

    // Reiniciar o jogo
    const resetGame = () => {
        setIsResetting(true);
        setTimeout(() => {
            setCards(shuffleArray([...initialCards]));
            setFlippedCards([]);
            setMatchedCards([]);
            setWrongCards([]);
            setIsResetting(false);
        }, 1000);
    };

    // Navegar para a página inicial
    const handleExit = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center bg-blue-800 rounded-lg p-4 shadow-md w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cards.map((emoji, index) => (
                    <Card
                        key={index}
                        emoji={emoji}
                        isFlipped={isResetting || flippedCards.includes(index) || matchedCards.includes(index)}
                        isMatched={matchedCards.includes(index)}
                        isWrong={wrongCards.includes(index)}
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </div>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                onClick={resetGame}
            >
                Reiniciar Jogo
            </button>

            <button
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
                onClick={handleExit}
            >
                Sair
            </button>
        </div>
    );
};

export default Board;