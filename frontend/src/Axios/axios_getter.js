import axios from 'axios';

export const getDays = (username) => {
    return axios.get(`http://localhost:4000/day?username=${encodeURIComponent(username)}`)
        .then(res => {
            return res.data;
        });
}

export const postDay = (day, mood, username, good, bad) => {
    return axios.post('http://localhost:4000/day', {
        day,
        mood,
        username,
        good,
        bad,
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

