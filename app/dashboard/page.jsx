import UserInfo from "@/components/UserInfo";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 place-items-center h-screen p-5">
      <UserInfo />
    </div>    
  );
}