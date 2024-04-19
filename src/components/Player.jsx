import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {

    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(initialName);

    function handleEditClick() {
        setIsEditing(prevEdit => !prevEdit)
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleNameChange(e) {
        setPlayerName(e.target.value)
    }
    
    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = <input type="text" onChange={handleNameChange} value={playerName} required />;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}