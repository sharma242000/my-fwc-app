import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import SignIn from './templates/SignIn';
import SignUp from './templates/SignUp';
import { Chat } from './chat/Chat';
import MainPage from './templates/MainPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path='/Chat' element = {<Chat />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;