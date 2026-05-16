import React, { useMemo } from 'react';
import useDebounce from '../Hooks/useDebounce';
import { useState, useEffect, useMemo } from 'react';

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [users, setUsers] = useState([]);

    const debouncedSearchText = useDebounce(searchText, 500);


    const fetch = async (debouncedSearchText) => {
        try{
            const res = await fetch(`/api/users?search=${debouncedSearchText}`); 
            const data = await res.json();
            setUsers(data);

        } catch (error) {
            console.error('Error fetching users:', error);
            setUsers([]);
        }
    };

    useEffect(() => { 
        if(!debouncedSearchText) {
            setUsers([]);
        }

        fetch(debouncedSearchText);
    }, [debouncedSearchText]);

    // useEffect(() => {
    // const res = scientists.filter((scientist) => scientist.name.toLowerCase().includes(searchText.toLowerCase()));
    //     setFilteredScientists(res);
    // }, [debouncedScientists]);

  return (
    <div>
        <input type="text" placeholder="Search scientists..." value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        <h1>Cards with Scientist Names and Contributions</h1>
        <div className="cards-container">
        {users.map((user) => (
            <li key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.contribution}</p>
            </li>
        ), [users])}
        </div>
    </div>
  )
}

export default Body;