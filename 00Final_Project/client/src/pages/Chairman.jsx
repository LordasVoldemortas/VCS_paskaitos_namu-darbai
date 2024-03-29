import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewUser from '../components/newUser/NewUser';
import Post from '../components/post/Post';



const Chairman = () => {
    return(
        <>
        home page - dvi ikonos kazkur - gali pasirinkti ar nori kurti nauja vartotoja ar editin statusa
        <NewUser /> useriu kurimas.
        <Post /> + kad galetu editint statusa
        </>
    )
}

export default Chairman