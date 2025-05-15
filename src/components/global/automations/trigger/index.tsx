"use client";

import { useQueryAutomationInfo } from "@/hooks/use-query";
import ActiveTrigger from "./active-trigger";
import { Separator } from "@/components/ui/separator";

type Props = {
  id: string;
};

const Trigger = ({ id }: Props) => {
  const { data } = useQueryAutomationInfo(id);

  // if (data?.data && data.data.trigger.length > 0) {
  //   return (
  //     <div className="flex flex-col gap-y-6 items-center">
  //       <ActiveTrigger
  //         type={data?.data?.trigger[0].type}
  //         keywords={data?.data?.keywords}
  //       />
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col gap-y-6 items-center">
      <ActiveTrigger
        type={"COMMENT"}
        keywords={[
          {
            id: "asdasdasdasdasd",
            word: "getstarted",
            automationId: id,
          },
        ]}
      />

      <>
        <div className="relative w-6/12">
          <p className="absolute transform  px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">
            or
          </p>
          <Separator
            orientation="horizontal"
            className="border-muted border-[1px]"
          />
        </div>
        <ActiveTrigger
          type={"MESSAGE"}
          keywords={[
            {
              id: "asdasdasdasdasd",
              word: "getstarted",
              automationId: id,
            },
          ]}
        />
      </>
    </div>
  );
};

export default Trigger;
