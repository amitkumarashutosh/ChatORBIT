import { Button } from "@/components/ui/button";
import Spinner from "../loader";
import { AudioWaveform } from "lucide-react";

const ActivateAutomationButton = () => {
  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3353CC] font-medium to-[#1C2D70] ml-4">
      <Spinner state={false}>
        <AudioWaveform />
        <p className="lg:inline hidden">
          {/* {data?.data.active ? "Disable" : "Activate"} */}
          Activate
        </p>
      </Spinner>
    </Button>
  );
};

export default ActivateAutomationButton;
