import { Ad } from "@/models/ad";
import { ErrorApiResponse } from "@/models/api-response";
import { User } from "@/models/user";
import { UserContext } from "@/modules/navigation/context/user-context";
import { useContext, useMemo } from "react";
import { useMutation } from "react-query";
import { react, ReactProps } from "../api/react";

export default function useReactionMutation(ad: Ad) {
  const { user, setUser } = useContext(UserContext);
  const { mutate, data, error, isLoading } = useMutation<
    User,
    Error | ErrorApiResponse,
    ReactProps
  >(react);

  const isLiked = useMemo(
    () => !!user?.favorites?.find((a) => a.id === ad.id),
    [user?.favorites]
  );

  const onReactHandler = () => {
    if (!user) throw new Error("User not found");

    const favorites = isLiked
      ? user?.favorites.filter((a) => a.id !== ad.id)
      : [...user?.favorites, ad];

    setUser({ ...user, favorites });
    mutate({ isLiked, id: ad.id });
  };

  return { isLiked, onReactHandler, data, error, isLoading };
}
