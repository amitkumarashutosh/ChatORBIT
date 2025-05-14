import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: "INSTAGRAM" | "CRM";
};

const IntegrationCard = ({ title, description, icon, strategy }: Props) => {
  const integrated = false;

  return (
    <div className="border border-[#3353CC] bg-background rounded-3xl shadow-md p-6 flex items-center gap-x-5">
      <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-[#3353CC]/10">
        {icon}
      </div>

      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1 w-full md:w-10/12 xl:w-8/12 2xl:w-6/12">
          {description}
        </p>
      </div>

      <Button className="bg-gradient-to-br text-white rounded-full text-base from-[#3352CC] to-[#1C2D70] font-medium hover:opacity-80 transition self-start">
        {integrated ? "Connected" : "Connect"}
      </Button>
    </div>
  );
};

export default IntegrationCard;
