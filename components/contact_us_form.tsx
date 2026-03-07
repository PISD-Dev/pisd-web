"use client";

import {
  Card,
  CardContent,
  CardFooter,
} from "./ui/card";

export function ContactUsForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <p>Card Content</p>
      </CardContent>


      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
