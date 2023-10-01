import LoginForm from "@/components/Forms/Login";
import loginArt from "@/public/images/login-art.jpg";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login - Neo",
  description: "Login - Neo",
};

function Page() {
  return (
    <main className=" xl:h-screen w-screen">
      <div className=" grid xl:grid-cols-2 w-full h-full px-3 xl:p-10 gap-16 items-center">
        <div className=" md:w-1/2 xl:w-3/4 mx-auto mt-10 xl:mt-0 w-full p-10 rounded-xl  dark:bg-dark-v-1 ">
          <h1 className=" text-4xl font-medium text-center mb-10 ">
            Welcome Back
          </h1>
          <LoginForm />
        </div>

        <div className=" hidden xl:block w-full h-full relative select-none">
          <div className=" max-w-lg absolute text-white top-10 left-10">
            <h1 className=" text-5xl">We’re here to optimise your workflow</h1>
            <p className=" text-2xl mt-9">
              Your docs, projects, notes and reminders. Together.
            </p>
          </div>
          <Image
            placeholder="blur"
            src={loginArt}
            alt="login art"
            className=" w-full h-full rounded-xl"
          />
          <div className=" max-w-lg absolute text-white bottom-32 left-10">
            <p className=" text-3xl">Finally, all your work in one place.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
