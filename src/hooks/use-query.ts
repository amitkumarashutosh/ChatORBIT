import { getAllAutomations, getAutomationInfo } from "@/actions/automations";
import { useQuery } from "@tanstack/react-query";

export const useQueryAutomation = () => {
  return useQuery({
    queryKey: ["user-automations"],
    queryFn: getAllAutomations,
  });
};

export const useQueryAutomationInfo = (id: string) => {
  return useQuery({
    queryKey: ["automation-info"],
    queryFn: () => getAutomationInfo(id),
  });
};
