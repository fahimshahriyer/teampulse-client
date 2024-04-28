"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();

  const [user, setUser] = React.useState({
    email: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(true);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const submitLogin = async () => {
    try {
      setLoading(true);
      setButtonDisabled(true);
      const response = await axios.post(
        "http://localhost:3001/auth/login",
        user
      );
      console.log("Login Successfull", response.data);

      toast({
        title: "Login Successful",
        description: "You are now logged in!",
        variant: "success",
      });

      router.push("/teampulse/");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast({
        title: "Login Failed",
        description: "Incorrect Credentials",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="lg:p-8 flex items-center justify-center h-screen bg-slate-50 relative">
      <div className="shadow-xl p-4 rounded bg-white">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-lg font-semibold tracking-tight">
              Can't log in?
            </h2>
          </div>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label
                className="text-xs text-muted-foreground pb-1 pl-1"
                htmlFor="email"
              >
                We'll send a recovery link to
              </Label>
              <Input
                id="email"
                disabled={isLoading}
                placeholder="Enter email"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <Button disabled={buttonDisabled} onClick={submitLogin}>
              {isLoading ? (
                <>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Please wait...
                </>
              ) : (
                "Send recovery link"
              )}
            </Button>
          </div>

          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/auth/login"
              className=" text-blue-500 hover:text-blue-900 "
            >
              Return to log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
