import Card from './card';

export default function gameBoard(props) {
    return (
        <div className="game-board" >
            <div className='cards'>
                {props.characters
                    .sort(() => Math.random() - 0.5)
                    .map(character => {
                        return (
                            <Card
                                img={character.img}
                                name={character.name}
                                handleClick={props.handleClick}
                                key={character.id}
                                id={character.id}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}