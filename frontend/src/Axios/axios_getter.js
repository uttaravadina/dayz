import axios from 'axios';

axios.defaults.withCredentials = true;

export const getDays = (username, start, end) => {
    let url =`http://localhost:4000/day?username=${encodeURIComponent(username)}&start=${encodeURIComponent(start)}`;
    if (end) {
        url+=`&end=${encodeURIComponent(end)}`;
    }
    return axios.get(url)
        .then(res => {
            return res.data;
        });
};

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
};

export const deleteRating = (username, date) => {
    let url = `http://localhost:4000/day?username=${encodeURIComponent(username)}&date=${encodeURIComponent(date)}`;
    return axios.delete(url)
        .then(res => {
            console.log(res);
        });    
};

export const editRating = (username, date, newMood) => {
    let url = `http://localhost:4000/day?username=${encodeURIComponent(username)}&date=${encodeURIComponent(date)}&newMood=${encodeURIComponent(newMood)}`;
    return axios.put(url)
        .then(res => {
            console.log(res);
        });  
};

export const postUser = (nickname, username) => {
    return axios.post('http://localhost:4000/user', {
        nickname,
        username,
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            if (error.response) {
                throw error.response.data.message;
            }
        })
};

export const postLogin = (username) => {
    return axios.post('http://localhost:4000/user/signin', { username })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            if (error.response) {
                throw error.response.data.message;
            }
        })
};

