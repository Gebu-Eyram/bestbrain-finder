"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export function BentoAvatar({ className }: { className?: string }) {
  const { user } = useKindeBrowserClient();
  return (
    <Avatar className={`w-8 h-8 ${className}`}>
      {user && <AvatarImage src={user?.picture!} alt="@shadcn" />}
      <AvatarFallback>M</AvatarFallback>
    </Avatar>
  );
}
