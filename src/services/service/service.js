import Axios from "../../libs/axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL + "api/services"

export function getServices(params) {
    return Axios.get(baseUrl, params);
}

export function getService(id) {
    return Axios.get(baseUrl + "/" + id);
}
