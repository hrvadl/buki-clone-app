import { ReviewInputs } from "../schema";
import useSendReviewMutation from "./useSendReviewMutation";

export default function useReview(revieweeId: number) {
  const { mutate, data, error, isLoading } = useSendReviewMutation(revieweeId);

  const sendReviewHandler = ({ rate, text }: ReviewInputs) => {
    if (!text || !rate) return;

    mutate({ rate, text, revieweeId });
  };

  return {
    sendReviewHandler,
    error,
    data,
    isLoading,
  };
}
