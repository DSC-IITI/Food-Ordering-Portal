import { Pizza, Coffee, IceCream } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-orange-50 flex items-center justify-center z-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">
          Loading deliciousness...
        </h2>
        <div className="flex justify-center items-center space-x-4">
          <div className="animate-bounce">
            <Pizza className="w-12 h-12 text-orange-500" />
          </div>
          <div className="animate-bounce" style={{ animationDelay: "0.2s" }}>
            <Coffee className="w-12 h-12 text-orange-500" />
          </div>
          <div className="animate-bounce" style={{ animationDelay: "0.4s" }}>
            <IceCream className="w-12 h-12 text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
