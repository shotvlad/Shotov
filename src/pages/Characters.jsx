import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CharacterService from '../API/CharacterService';
import Pagination from '../components/Pagination/Pagination';
import PostCharacter from '../components/PostCharacter/PostCharacter';
import { AuthContext } from '../context';

function Characters() {
    const { setIsAuth } = useContext(AuthContext);


    const dispatch = useDispatch();

    useEffect(() => {
        CharacterService.getAll(dispatch);
    }, [dispatch]);

    return (
        <div className="container">
            <div className="curUser">
                <div>Welcome, <b>{localStorage.getItem("username")}</b>!</div>
                <button onClick={() => {
                    localStorage.removeItem("auth");
                    setIsAuth(false);
                }}>Log out</button>
            </div>
            <PostCharacter />
            <h3>Characters</h3>
            <hr />
            <Pagination itemsPerPage={5} />
        </div>
    );
}

export default Characters;