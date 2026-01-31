"use client";
import { useEffect } from "react";

export default function IdentityHashRedirect() {
  useEffect(() => {
    const hash = window.location.hash || "";
    const hasToken =
      hash.includes("recovery_token=") ||
      hash.includes("invite_token=") ||
      hash.includes("confirmation_token=");

    if (hasToken) {
      // Always redirect to /admin (no ambiguity)
      window.location.replace(`/admin${hash}`);
    }
  }, []);

  return null;
}
