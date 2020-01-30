function dataToMap(data) {
    let map = {};
    
    data.forEach(x => {
        let day = x.day.toISOString().substr(0,10);
        let mood = x.mood;
        map[day] = mood;
    });

    return map;
}

let data = [
    {
        day: new Date("2020-12-31"),
        mood: 1
    },
    {
        day: new Date("2019-12-31"),
        mood: 4
    },
    {
        day: new Date("2019-12-17"),
        mood: 3
    },
]

console.log(dataToMap(data))