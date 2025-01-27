import React from 'react';

const CrosswordGrid = () => {
    // Simulação de uma grade 5x5
    const grid = [
        ['C', '', '', '', ''],
        ['O', '', '', '', ''],
        ['D', '', 'J', 'S', ''],
        ['E', '', '', '', ''],
        ['', '', '', '', 'T'],
    ];

    return (
        <div className="grid grid-cols-5 gap-1 bg-gray-200 p-4 rounded-md shadow-lg">
            {grid.flat().map((cell, index) => (
                <div
                    key={index}
                    className={`w-12 h-12 flex items-center justify-center border ${
                        cell ? 'bg-white' : 'bg-gray-300'
                    }`}
                >
                    {cell}
                </div>
            ))}
        </div>
    );
};

export default CrosswordGrid;
