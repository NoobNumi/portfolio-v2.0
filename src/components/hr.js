import { Sparkle } from "lucide-react";

export default function Hr() {
  return (
    <div className="flex items-center w-auto relative justify-center my-4">
      <hr
        className="flex-grow border-text-primary"
        style={{ width: "fit-content" }}
      />
      <span className="mx-2 animate-spin-slow text-2xl">
        <Sparkle className="text-[#f6f6f6]" fill="#dbd34c" size={50} />
      </span>
      <hr className="flex-grow border-text-primary" />
    </div>
  );
}
