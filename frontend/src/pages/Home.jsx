import React from 'react';
import GameList from '../components/GameList';
import GameForm from '../components/GameForm';

const Home = () => {
    return (
        <div>
            <GameForm />
            <GameList />
        </div>
    );
};

export default Home;