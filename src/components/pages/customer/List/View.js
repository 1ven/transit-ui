import React from "react";

export default ({ signOut }) => (
  <div className="w-100 mw8 ml-auto mr-auto flex items-center">
    Products<div
      className="ml-auto pointer underline f6"
      onClick={signOut.fetch}
    >
      {signOut.isFetching ? "Loading..." : "Sign out"}
    </div>
  </div>
);
