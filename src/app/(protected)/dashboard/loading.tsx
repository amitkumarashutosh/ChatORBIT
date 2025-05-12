import Spinner from "@/components/global/loader";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Spinner state>...Loading</Spinner>
    </div>
  );
};

export default page;
