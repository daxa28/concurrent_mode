import React, { Suspense } from "react";
import Posts from "./Posts";

function MySuspense() {
  return (
    <div className="suspense">
      <div className="border">
        <Suspense fallback={<div>Loading Posts...  </div>}>
          <Posts />
          <Suspense fallback={<div>Loading Posts...   </div>}>
            <Posts />
          </Suspense>
        </Suspense>
      </div>
      <div className="border">
        <Suspense fallback={<div>Loading Posts...   </div>}>
          <Posts />
        </Suspense>
        <Suspense fallback={<div>Loading Posts...   </div>}>
          <Posts />
        </Suspense>
      </div>
    </div>
  );
}

export default MySuspense;
