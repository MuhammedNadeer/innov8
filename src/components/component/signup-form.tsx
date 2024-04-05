"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"


export default function SignupFormDemo() {
  const [teamname, setTeamName] = useState("");
  const [secretcode, setSecretCode] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate credentials (teamname and secretcode)
    if (teamname != "" && (secretcode === "innov8-coet-6"|| secretcode === "innov8-coet-24")) {
      Cookies.set("name",teamname)
      Cookies.set("code",secretcode)
      console.log("validated")
      router.push("/home")
    } else {
      // Handle invalid credentials
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex bg-black h-screen items-center">
      <div className="max-w-md w-full h-max mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <div className="flex flex-col items-center">
          <img src={"innovus.png"} className="" />
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Login to see documentation
          </p>
        </div>
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="team-name">Team Name</Label>
            <Input
              id="team-name"
              placeholder="Enter Your Team Name Here"
              value={teamname}
              type="text"
              onChange={(e) => setTeamName(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Secret Code</Label>
            <Input id="password" placeholder="••••••••" type="password" value={secretcode} onChange={(e)=>setSecretCode(e.target.value)}/>
          </LabelInputContainer>

          
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >Reveal &rarr;
          <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
