import { ChevronRight, PencilIcon } from "lucide-react";
import ActivateAutomationButton from "../../active-automation-button";

type Props = {
  id: string;
};

const AutomaticBreadCrumb = ({ id }: Props) => {
  return (
    <div className="rounded-full w-full p-5 bg-black/10 flex items-center justify-between">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-muted-foreground truncate">Automations</p>
        <ChevronRight className="text-muted-foreground flex-shrink-0 w-4 h-4" />
        <span className="flex gap-x-2 items-center min-w-0">
          <p className="text-muted-foreground truncate">
            This is the automation title
          </p>
          <span className="cursor-pointer hover:opacity-75 transition duration-100 flex-shrink-0 mx-2">
            <PencilIcon size={14} />
          </span>
        </span>
      </div>

      <div className="flex items-center gap-x-4 ml-auto">
        <p className="hidden md:block text-muted-foreground text-sm truncate min-w-0">
          All updates are automatically saved
        </p>
        <div className="flex items-center gap-x-4 flex-shrink-0">
          <p className="text-muted-foreground text-sm truncate min-w-0">
            Changes Saved
          </p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
};

export default AutomaticBreadCrumb;
