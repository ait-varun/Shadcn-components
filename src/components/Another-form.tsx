"use client";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
export default function AnotherForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  type FormData = z.infer<typeof userAuthSchema>;

  function onSubmit(data: FormData) {
    setIsLoading(true);

    // Check if the submitted email and password match the expected credentials
    if (
      data.email.toLowerCase() === "demo@gmail.com" &&
      data.password === "123456"
    ) {
      data.email = "";
      data.password = "";
      // Perform login logic here
      console.log("Login successful!");
    } else {
      console.log("Invalid email or password");
    }
  }

  return (
    <>
      <div className="max-w-sm rounded-2xl">
        <div className="mb-4">
          <h2 className="text-center text-3xl font-bold m-3">Welcome Back!</h2>
          <p className="text-center m-2 text-sm">
            Access Your Digital Project Management Tool
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-96 mx-auto ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email or Username"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <span className="text-green-500 text-right block my-2 cursor-pointer">
              Forgot Password?
            </span>
            <Button
              className="w-96 bg-green-600 rounded-full hover:bg-green-700 "
              variant={"default"}
              type="submit">
              Login
            </Button>
            <div className="w-full flex items-center justify-between">
              <hr className="w-full border-gray-300" />
              <span className="mx-4 text-gray-500">or</span>
              <hr className="w-full border-gray-300" />
            </div>
            <Button
              className="w-full bg-transparent text-gray-500  border-2 hover:bg-gray-100 hover:text-gray-900 rounded-full "
              type="submit">
              Google
            </Button>
            <div className="text-center">
              <p>
                Don't have an account?
                <span className="text-green-500 cursor-pointer"> Sign Up</span>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
