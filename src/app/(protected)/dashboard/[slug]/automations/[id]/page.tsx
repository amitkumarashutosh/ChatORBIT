import AutomaticBreadCrumb from "@/components/global/bread-crumb/automations";
import Trigger from "@/components/global/automations/trigger";
import { ShieldAlert } from "lucide-react";
import { getAutomationInfo } from "@/actions/automations";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { PrefetchUserAutomationInfo } from "@/react-query/prefetch";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const info = await getAutomationInfo(params.id);
  return {
    title: info.data?.name,
  };
}

const Page = async ({ params }: Props) => {
  const query = new QueryClient();
  await PrefetchUserAutomationInfo(query, params.id);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="flex flex-col items-center gap-y-20">
        <AutomaticBreadCrumb id={params.id} />
        <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
          <div className="flex gap-x-2 items-center">
            <ShieldAlert color="#3352CC" />
            When...
          </div>
          <Trigger id={params.id} />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Page;
