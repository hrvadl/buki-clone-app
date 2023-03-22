import { UserContext } from "@/modules/navigation/context/user-context";
import { useContext } from "react";
import { useMutation } from "react-query";
import { deleteReview } from "../api/delete-review";

export default function useDeleteReviewMutation() {
  const { setUser, user } = useContext(UserContext);
  const { error, isLoading, mutate } = useMutation(deleteReview);

  const onDelete = (id: number) => {
    if (!user) return;

    const newUserInfo = {
      ...user,
      recievedReviews: user.recievedReviews?.filter((r) => r.id !== id),
    };
    setUser(newUserInfo);
    mutate(id);
  };

  return { onDelete, isLoading, error };
}
