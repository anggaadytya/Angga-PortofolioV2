import Image from "next/image";
import React from "react";
import NEXTIMAGE from "../../../public/next.svg";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-full bg-slate-400 w-20 h-20">
        <Image
          src={NEXTIMAGE}
          width={200}
          height={200}
          alt="profile"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg font-bold">Muhammad Angga Adytya</h1>
        <h2 className="text-sm font-medium">Frontend Developer</h2>
      </div>
    </div>
  );
};

export default Profile;
