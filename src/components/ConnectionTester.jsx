import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

function ConnectionTester() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://lostsong-backend-144649aa504e.herokuapp.com/api/songs')
            .then(response => setData(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            Connection Tester component here!
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}

export default ConnectionTester;