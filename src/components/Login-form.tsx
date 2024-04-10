"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: any) {
    const { email, password } = values;

    // Check if the submitted email and password match the expected credentials
    if (email === "demo@gmail.com" && password === "123456") {
      // Perform login logic here
      console.log("Login successful!");
    } else {
      console.log("Invalid email or password");
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-center">Welcome Back!</CardTitle>
        <CardDescription className="text-center">
          Access Your Digital Project Management Tool
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                placeholder="Email or Username"
                required
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <Label className="text-red-500">
                  {form.formState.errors.email.message}
                </Label>
              )}
            </div>
            <div className="grid gap-2">
              <Input
                id="password"
                type="password"
                placeholder="Password"
                required
                {...form.register("password")}
              />
              {form.formState.errors.password && (
                <Label className="text-red-500">
                  {form.formState.errors.password.message}
                </Label>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-4">
            <Button
              className="w-full bg-green-700 rounded-full"
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
              variant={"default"}
              type="submit">
              Google
            </Button>
            <div>
              <p>
                Don't have an account?
                <span className="text-green-800"> Sign Up</span>
              </p>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}