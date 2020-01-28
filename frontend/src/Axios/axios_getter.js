import axios from 'axios';

export const getDays = () => {
    return axios.get('http://localhost:4000/day')
        .then(res => {
            return res.data;
        });
}

export const postDay = (day, mood, username, good, bad) => {
    return axios.post('http://localhost:4000/day', {
        day: day,
        mood: mood,
        username: username,
        good: good,
        bad: bad,
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

