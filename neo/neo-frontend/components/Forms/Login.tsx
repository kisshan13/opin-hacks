"use client";

import Button from "@/ui/Forms/Button";
import Input from "@/ui/Forms/Input";
import PlatformButton from "@/ui/Forms/PlatformButton";
import AppleIcon from "@/ui/Icons/Apple";
import GithubIcon from "@/ui/Icons/Github";
import GoogleIcon from "@/ui/Icons/Google";
import Link from "next/link";

function LoginForm() {
  return (
    <form
      className=" grid gap-4 items-center "
      onSubmit={(e) => e.preventDefault()}
    >
      <div className=" grid gap-3">
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <div className=" flex items-center justify-end">
          <Link href={"#"} className=" underline text-sm underline-offset-2">
            Forgot Password ?
          </Link>
        </div>
      </div>

      <Button>
        <Link href={"/neo"}>Login</Link>
      </Button>

      <p className=" opacity-75">
        Don't have an account ?{" "}
        <Link href={"#"} className="underline underline-offset-2 opacity-100">
          Sign up
        </Link>
      </p>

      <div className=" mt-6 grid gap-4">
        <PlatformButton className=" flex items-center gap-7 justify-center">
          <GithubIcon width={30} />
          Login using Github
        </PlatformButton>
        <PlatformButton className=" flex items-center gap-7 justify-center">
          <GoogleIcon width={30} />
          Login using Google
        </PlatformButton>
      </div>
    </form>
  );
}

export default LoginForm;
