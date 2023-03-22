import Environment from "@/Config";
import apiRequest from "@/lib/fetch";

const url = Environment.REACT_APP_API_URL + "/api/ad/";

export const deleteAd = async (id: number) =>
  apiRequest
    .deleteReq(url + id)
    .then(() => true)
    .catch(() => false);
