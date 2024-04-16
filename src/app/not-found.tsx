import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

export default function NotFound() {
  return (
    <div className="md:ml-40 flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Not Found</h2>
      <p className="text-lg mb-4">Could not find the requested resource</p>
      <Button
        className="bg-green-700 text-white hover:bg-green-800 rounded-full size-max"
        variant={"secondary"}>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
