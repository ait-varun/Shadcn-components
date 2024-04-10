"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-center">Welcome Back!</CardTitle>
        <CardDescription className="text-center">
          Access Your Digital Project Management Tool
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-green-700 rounded-full"
          variant={"default"}>
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}
