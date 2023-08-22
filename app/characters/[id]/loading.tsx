import { SkeletonComponent } from "@/components";
import React from "react";

function loading() {
  return (
    <div className="grid mt-5">
      <SkeletonComponent />
    </div>
  );
}

export default loading;
