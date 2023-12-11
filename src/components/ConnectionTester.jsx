import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ConnectionTester() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://lostsong-backend-144649aa504e.herokuapp.com/api/songs/top')
            .then(response => setData(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h2>Top 5 most recognized songs:</h2>
            <ul>
                {data && data.slice(0, 5).map((song, index) => (
                    <li key={index}>
                        {`${index + 1}. ${song.title} - ${song.artist} - Number of recognitions: ${song.occurrenceCount}`}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ConnectionTester;