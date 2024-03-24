import Axios from "../../libs/axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL + "api/projects"

export function getProjects(params) {
    return Axios.get(baseUrl, params);
}

export function getProject(id) {
    return Axios.get(baseUrl + "/" + id);
}
