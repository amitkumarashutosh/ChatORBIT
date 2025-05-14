import { onBoardUser } from "@/actions/user";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

const page = async ({ params }: Props) => {
  const user = await onBoardUser();
  // if (user.status === 200 || user.status === 201) {
  //   return redirect(`/dashboard/${user.data?.firstName}${user.data?.lastName}`);
  // }
  // return redirect("/sign-in");

  const slug = `${user.data?.firstName}${user.data?.lastName}`;
  if (params.slug !== slug) {
    return redirect(`/dashboard/${slug}`);
  }

  return <div>Welcome, {user.data?.firstName}!</div>;
};

export default page;
