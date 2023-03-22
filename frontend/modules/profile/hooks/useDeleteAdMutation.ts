import { UserContext } from "@/modules/navigation/context/user-context";
import { useContext } from "react";
import { useMutation } from "react-query";
import { deleteAd } from "../api/delete-ad";

export default function useDeleteAdMutation() {
  const { setUser, user } = useContext(UserContext);
  const { error, isLoading, mutate } = useMutation(deleteAd);

  const onDelete = async (id: number) => {
    if (!user) return;
    const newUserData = {
      ...user,
      ads: user.ads?.filter((ad) => ad.id !== id),
    };
    setUser(newUserData);
    mutate(id);
  };

  return { error, isLoading, onDelete };
}
