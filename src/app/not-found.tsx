"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:gap-8 p-8 h-screen text-gray-900">
      <h2 className="lg:text-8xl md:text-7xl sm:text-5xl text-4xl font-bold">
        404
      </h2>
      <p className="lg:text-xl md:text-lg font-medium">
        お探しのページは見つかりませんでした
      </p>
      <div className="flex justify-center ">
        <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline ">
          <Button
            className="font-bold mt-4 bg-cyan-600 text-white hover:bg-cyan-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
            type="submit"
          >
            トップページへ
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
