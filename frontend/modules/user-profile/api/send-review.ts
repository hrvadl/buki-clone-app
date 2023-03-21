import Environment from "@/Config";
import apiRequest from "@/lib/fetch";
import { isReview } from "@/models/review/utils/is-review";
import { ReviewInputs } from "../schema";

type MutateReviewInput = ReviewInputs & {
  revieweeId: number;
};

const baseUrl = new URL(Environment.REACT_APP_API_URL + "/api/review");

export const sendReview = async (data: MutateReviewInput) => {
  const res = await apiRequest.post(baseUrl, { body: JSON.stringify(data) });

  if (!isReview(data)) throw new Error("Something went wrong");

  return res;
};
