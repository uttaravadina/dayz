import axios from 'axios';

export const getDays = (username, start, end) => {
    let url =`http://localhost:4000/day?username=${encodeURIComponent(username)}&start=${encodeURIComponent(start)}`;
    if (end) {
        url+=`&end=${encodeURIComponent(end)}`;
    }
    return axios.get(url)
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

