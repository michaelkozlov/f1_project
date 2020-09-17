import * as axios from "axios";

const instanceErgast = axios.create({
    baseURL: "http://ergast.com/api/f1/",
});

const instanceNewsApi = axios.create({
    baseURL : "http://newsapi.org/v2/",

});

export const ergastApi = {
    getCircuits () {
        return instanceErgast.get(`/circuits.json`)
            .then(response => response.data);
    },
    getRaceScheduleCurrentSeason(){
        return instanceErgast.get(`/current.json`)
            .then(response => response.data);
    }
}

export const newsApi = {
    getPopularNews () {
        return instanceNewsApi.get(`everything?source=google-news-ru&q=формула-1&apiKey=0212c0ec2f1f4f48a0aa80f89e58cf80`)
            .then(response => response.data);
    },
}