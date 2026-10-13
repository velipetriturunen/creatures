import { useState } from 'react' 

function Creature(props) {
    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };

    const [isAwake, setAwake] = useState(false);

    return (
        <div style={style} onclick = { () => setAwake(!isAwake)}>
            {isAwake ? <img src={props.sleepImageUrl} alt={props.name} width="120" /> : <img src={props.awakeImageUrl} alt={props.name} width="120"></img>}
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
