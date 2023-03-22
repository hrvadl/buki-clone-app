import Environment from "@/Config";
import apiRequest from "@/lib/fetch";

const url = Environment.REACT_APP_API_URL + "/api/review/";

export const deleteReview = async (id: number) =>
  apiRequest
    .deleteReq(url + id)
    .then(() => true)
    .catch(() => false);
