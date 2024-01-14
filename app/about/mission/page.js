import Button from "@/app/components/Button";
import icon from "@/public/images/flower.jpg";
import Image from "next/image";
import { Poppins } from "next/font/google";
export default function Mission() {
  return (
    <main className=" flex min-h-screen">
      <div class="mt-10">
        <h1>Mission Page</h1>
        <Image quality={100} src={icon} alt="icon" />
        <Button></Button>
      </div>
    </main>
  );
}
