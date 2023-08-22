import SkeletonComponent from "@/components/SkeletonComponent";
import React from "react";

function loading() {
  <div className="container mx-auto">
    <div className="grid mt-5">
      <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5 w-100">
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
      </div>
    </div>
  </div>;
}

export default loading;
