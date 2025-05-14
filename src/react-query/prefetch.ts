import { getAllAutomations } from "@/actions/automations";
import { onUserInfo } from "@/actions/user";
import { QueryClient, QueryFunction } from "@tanstack/react-query";

const prefetch = async (
  client: QueryClient,
  action: QueryFunction,
  key: string
) => {
  return await client.prefetchQuery({
    queryKey: [key],
    queryFn: action,
    staleTime: 60 * 1000,
  });
};

export const PrefetchUserProfile = (client: QueryClient) => {
  return prefetch(client, onUserInfo, "user-profile");
};

export const PrefetchUserAutomation = (client: QueryClient) => {
  return prefetch(client, getAllAutomations, "user-automation");
};
