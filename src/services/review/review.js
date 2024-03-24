import Axios from "../../libs/axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL + "api/reviews"

export function getReviews(params) {
    return Axios.get(baseUrl, params);
}

export function getReview(id) {
    return Axios.get(baseUrl + "/" + id);
}
