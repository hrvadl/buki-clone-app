import { useMutation, useQueryClient } from "react-query";
import { sendReview } from "../api/send-review";

export default function useSendReviewMutation(id: number) {
  const queryClient = useQueryClient();
  const { mutate, data, error, isLoading } = useMutation(sendReview, {
    onSuccess: () => {
      queryClient.refetchQueries("get-user-info" + id);
    },
  });

  return { mutate, data, error, isLoading };
}
