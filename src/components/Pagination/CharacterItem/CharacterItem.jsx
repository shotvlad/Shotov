import { useDispatch } from "react-redux";
import { removeCharacterAction } from "../../../redux/actions/CharactersActions";
import "./CharacterItem.css";

const CharacterItem = ({ character }) => {
    const dispatch = useDispatch();

    return (
        <div className="item">
            <div className="item-field">ID:<div className="item-data">{character.id}</div></div>
            <div className="item-field">First Name:<div className="item-data">{character.firstName}</div></div>
            <div className="item-field">Last Name:<div className="item-data">{character.lastName}</div></div>
            <div className="item-field">Email:<div className="item-data">{character.email}</div></div>
            <button onClick={() => dispatch(removeCharacterAction(character.id))}>Delete</button>
        </div>
    );
}

export default CharacterItem;