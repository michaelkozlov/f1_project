import * as axios from "axios";

const instanceErgast=axios.create({
    baseURL: "http://ergast.com/api/f1/",
});

const instanceNewsApi=axios.create({
    baseURL: "http://newsapi.org/v2/",

});

const key="0212c0ec2f1f4f48a0aa80f89e58cf80";

export const ergastApi={
    getCircuits() {
        return instanceErgast.get(`/circuits.json`)
            .then(response=>response.data);
    },
    getRaceScheduleCurrentSeason() {
        return instanceErgast.get(`/current.json`)
            .then(response=>response.data);
    },
    getRaceSchedule(year) {
        return instanceErgast.get(`/${year}.json`)
            .then(response=>response.data);
    },
    getCurrentDriverStandings() {
        return instanceErgast.get(`/current/driverStandings.json`).then(response=>response.data);
    },
    getCurrentConstructorStandings() {
        return instanceErgast.get(`/current/constructorStandings.json`).then(response=>response.data);
    },
}

export const newsApi={
    getPopularNews() {
        return instanceNewsApi.get(`everything?source=google-news-ru&q=формула-1&apiKey=${key}`)
            .then(response=>response.data);
    },
}