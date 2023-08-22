import { SearchComponent } from "@/components";
import React, { Suspense } from "react";

function CharacterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SearchComponent />
      {children}
    </div>
  );
}

export default CharacterLayout;
