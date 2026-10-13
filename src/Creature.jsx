import { useState } from 'react' 

function Creature(props) {
    const [isAwake, setAwake] = useState(false);

    const [posX, setPosX] = useState(props.x);
    const [posY, setPosY] = useState(props.y);


    const style = {
        position: 'absolute',
        left: posX + 'px',
        top: posY + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };


    function handleClick() {
        setAwake(!isAwake)
        if (isAwake) {
            setPosX(Math.floor(Math.random() * 750))
            setPosY(Math.floor(Math.random() * 750))
        }
    }

    return (
        <div style={style} onClick = { () => handleClick()}>
            {isAwake ? <img src={props.sleepImageUrl} alt={props.name} width="120" /> : <img src={props.awakeImageUrl} alt={props.name} width="120"></img>}
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
