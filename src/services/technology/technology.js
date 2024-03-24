import Axios from "../../libs/axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL + "api/technologies"

export function getTechnologies(params) {
    return Axios.get(baseUrl, params);
}

export function getTechnology(id) {
    return Axios.get(baseUrl + "/" + id);
}
