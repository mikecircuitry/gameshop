"use client";
import { useEffect } from "react";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function AddBootstrap() {
  useEffect(() => {
      import("bootstrap");
      // import "bootstrap/dist/js/bootstrap.min.js";

  }, []);

  return <></>;
}