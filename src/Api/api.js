import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://ergast.com/api/f1/",
});

export const ergastApi = {
    getCircuits () {
        return instance.get(`/circuits.json`)
            .then(response => response.data);
    },
}