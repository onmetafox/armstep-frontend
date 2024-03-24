import Axios from "../../libs/axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL + "api/teams"

export function getTeams(params) {
    return Axios.get(baseUrl, params);
}

export function getTeam(id) {
    return Axios.get(baseUrl + "/" + id);
}
