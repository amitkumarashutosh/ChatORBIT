import { Button } from "@/components/ui/button";
import { PLANS } from "@/constants/pages";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

type Props = {
  label: string;
  current: "FREE" | "PRO";
  landing?: boolean;
};

const PaymentCard = ({ label, current, landing }: Props) => {
  const isPro = label === "PRO";
  const isCurrent = label === current;

  return (
    <div
      className={cn(
        isCurrent
          ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          : "bg-neutral-800",
        "p-1 rounded-2xl shadow-xl transition-transform hover:scale-105"
      )}
    >
      <div
        className={cn(
          landing && "radial-gradient",
          "flex flex-col rounded-xl bg-background px-6 py-6 h-full"
        )}
      >
        <h2 className="text-2xl font-semibold mb-1 text-white">
          {landing
            ? isPro
              ? "Premium Plan"
              : "Standard"
            : isCurrent
            ? "Your current plan"
            : current === "PRO"
            ? "Downgrade"
            : "Upgrade"}
        </h2>

        <p className="text-sm text-muted-foreground mb-4">
          Includes automations and AI features to boost your growth.
        </p>

        {isPro ? (
          <span className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Smart AI
          </span>
        ) : (
          <span className="text-xl font-bold text-muted-foreground">
            Standard
          </span>
        )}

        <p className="text-3xl font-bold mt-3 text-white">
          {isPro ? "₹999" : "Free"}
        </p>

        <div className="mt-6 space-y-3">
          {PLANS[isPro ? 1 : 0].features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <CircleCheck className="text-indigo-500 w-5 h-5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Button
          className={cn(
            "mt-8 w-full hover:text-black rounded-full font-semibold transition",
            landing
              ? isPro
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:brightness-110"
                : "bg-neutral-700 text-white hover:bg-neutral-600"
              : "bg-background text-white hover:brightness-110",
            !landing && isCurrent && "opacity-60 cursor-not-allowed"
          )}
          disabled={!landing && isCurrent}
        >
          {landing
            ? isCurrent
              ? "Get Started"
              : current === "PRO"
              ? "Free"
              : "Get Started"
            : isCurrent
            ? "Active"
            : current === "PRO"
            ? "Downgrade"
            : "Upgrade"}
        </Button>
      </div>
    </div>
  );
};

export default PaymentCard;
