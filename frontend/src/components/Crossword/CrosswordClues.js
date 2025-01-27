import React from 'react';

const CrosswordClues = () => {
    const clues = [
        { direction: 'Horizontal', number: 1, clue: 'Linguagem de programação usada no front-end.' },
        { direction: 'Vertical', number: 2, clue: 'Uma ferramenta para versionamento de código.' },
    ];

    return (
        <div className="ml-8 bg-white p-4 rounded-md shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Pistas</h2>
            <ul>
                {clues.map((item, index) => (
                    <li key={index} className="mb-2">
                        <strong>{item.number} ({item.direction}):</strong> {item.clue}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CrosswordClues;
