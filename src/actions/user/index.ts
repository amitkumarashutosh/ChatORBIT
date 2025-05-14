"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { refreshToken } from "@/lib/fetch";
import { updateIntegration } from "../integration/queries";

export const onCurrentUser = async () => {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");

  return user;
};

export const onBoardUser = async () => {
  const user = await onCurrentUser();
  try {
    const found = await findUser(user.id);
    if (found) {
      if (found.intergrations.length > 0) {
        const today = new Date();
        const time_left =
          found.intergrations[0].expiresAt?.getTime()! - today.getTime();

        const days = Math.round(time_left / (1000 * 60 * 60 * 24));
        if (days < 5) {
          console.log("refresh");
          const refresh = await refreshToken(found.intergrations[0].token);

          const today = new Date();
          const expires_date = today.setDate(today.getDate() + 60);
          const update_token = await updateIntegration(
            refresh.access_token,
            new Date(expires_date),
            found.intergrations[0].id
          );

          if (!update_token) {
            console.log("failed to update token");
          }
        }
      }
      return {
        status: 200,
        data: {
          firstName: found.firstName,
          lastName: found.lastName,
        },
      };
    }

    const created = await createUser(
      user.id,
      user.firstName!,
      user.lastName!,
      user.emailAddresses[0].emailAddress
    );

    return { status: 201, data: created };
  } catch (error) {
    console.log(error);
    return { status: 500 };
  }
};

export const onUserInfo = async () => {
  const user = await onCurrentUser();
  try {
    const profile = await findUser(user.id);
    if (profile) return { status: 200, data: profile };
  } catch (error) {
    console.log(error);
    return { status: 500 };
  }
};
