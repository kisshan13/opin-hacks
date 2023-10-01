"use client";

import Button from "@/ui/Forms/Button";
import Input from "@/ui/Forms/Input";
import InputSlider from "@/ui/Forms/InputSlider";

import Link from "next/link";

function CreateBuildForm() {
  return (
    <form className=" grid gap-5 dark:text-light-v-1">
      <Input type="text" placeholder="fantastic-5612-ind" label="App Name" />
      <div>
        <label
          htmlFor="upload"
          className=" cursor-pointer dark:text-light-v-1 grid gap-1"
        >
          <span className=" text-sm font-medium">Upload</span>
          <div className=" bg-light-v-1 dark:bg-dark-v-2 dark:text-light-v-1 border dark:border-dark-v-2 h-52 hover:bg-light-v-2/5 dark:hover:bg-dark-v-2/5 transition-all p-5 rounded-xl flex items-center justify-center">
            <h1 className=" text-center font-medium ">
              Upload your project files here..
            </h1>
          </div>
        </label>
      </div>
      <div className=" w-full">
        <label className=" w-full">
          <div className=" flex items-center justify-between">
            <p className=" font-medium text-lg">Number of max instances</p>
            <p className=" text-sm font-light ">Only 2 allowed in free stage</p>
          </div>
        </label>
        <input
          type="range"
          className="accent-primary w-full bg-slate-700 dark:[&::-webkit-slider-runnable-track]:bg-dark-v-2"
          max={3}
          min={1}
        />
      </div>

      <div>
        {/* <div className=" flex justify-between items-center flex-wrap">
          <p className=" text-lg font-medium ">Select GPU Type</p>
          <p className=" text-sm font-light">
            Only A10 GPU can be used for free stage
          </p>
        </div> */}

        {/* <div className=" grid grid-cols-3 mt-5">
          <div>
            <label className=" flex gap-6">
              <input
                name="gpu-type"
                type="checkbox"
                className=" w-5 h-5 rounded-md  border border-black/20 bg-light-v-1 dark:bg-dark-v-2 dark:checked:bg-primary checked:bg-primary  focus:!bg-primary focus:ring-0"
              />
              A10
            </label>
          </div>
          <div className=" flex items-center justify-center">
            <p>2 Available</p>
          </div>
          <div className=" flex items-center justify-end">
            <p className=" font-semibold">$0.1 /Hour</p>
          </div>
        </div>
        <div className=" grid grid-cols-3 mt-2">
          <div>
            <label className=" flex gap-6">
              <input
                name="gpu-type"
                disabled
                type="checkbox"
                className=" w-5 h-5 rounded-md disabled:opacity-70 disabled:cursor-not-allowed  border border-black/20 bg-light-v-1 dark:bg-dark-v-2  checked:bg-primary  focus:!bg-primary focus:ring-0"
              />
              A40
            </label>
          </div>
          <div className=" flex items-center justify-center">
            <p>Unlimited</p>
          </div>
          <div className=" flex items-center justify-end">
            <p className=" font-semibold">$0.3 /Hour</p>
          </div>
        </div> */}

        <div className=" flex items-center justify-center mt-10">
          <Button>Submit</Button>
        </div>

        <div className=" flex items-center justify-center mt-10">
          <Link href={"#"} className=" text-sm">
            See <span className=" text-primary">Pricing</span> for more info
          </Link>
        </div>
      </div>
    </form>
  );
}

export default CreateBuildForm;
