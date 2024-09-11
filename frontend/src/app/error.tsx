"use client";
import { useState, useEffect } from "react";
import { AlertTriangle, Pizza, Coffee, IceCream } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrorPage = ({ message = "Oops! Something went wrong." }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 16); // Approximately 60 FPS

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-orange-50 flex flex-col items-center justify-center z-50">
      <div className="text-center max-w-md px-4">
        <div className="mb-8 relative">
          <AlertTriangle
            className="w-24 h-24 text-orange-500 mx-auto"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="animate-bounce">
              <Pizza className="w-8 h-8 text-orange-600" />
            </div>
            <div className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              <Coffee className="w-8 h-8 text-orange-600" />
            </div>
            <div className="animate-bounce" style={{ animationDelay: "0.4s" }}>
              <IceCream className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-orange-600 mb-4">
          Oops! We dropped the plate
        </h2>
        <p className="text-orange-800 mb-8">{message}</p>
        <Link href="/">
          <Button className="bg-orange-500 hover:bg-orange-600">
            Return to Home Menu
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
