import React from 'react';
import classNames from 'classnames';

const Card = ({ emoji, isFlipped, isMatched, isWrong, onClick }) => {
    return (
        <div
            className={classNames(
                "w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 lg:w-32 lg:h-40 border-2 rounded-lg shadow-md flex justify-center items-center cursor-pointer transition-transform duration-500",
                {
                    "bg-gray-200": !isMatched && !isWrong, // Carta não virada (cinza)
                    "bg-green-300": isMatched, // Par correto (verde)
                    "bg-red-300": isWrong, // Par errado (vermelho)
                    "rotate-y-180 scale-150": isFlipped, // Virada (gira e aumenta)
                    "hover:scale-105": !isFlipped && !isMatched && !isWrong, // Efeito hover nas não viradas
                }
            )}
            onClick={onClick}
        >
            {isFlipped || isMatched ? (
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{emoji}</div>
            ) : (
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-600">❓</div>
            )}
        </div>
    );
};

export default Card;