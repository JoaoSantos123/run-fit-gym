"use client";

import { useEffect } from "react";

export default function IdentityHashRedirect() {
  useEffect(() => {
    // Tokens comuns do Netlify Identity no hash:
    // #recovery_token=...  (reset password / set password)
    // #invite_token=...    (invites)
    // #confirmation_token=...
    const hash = window.location.hash || "";
    const hasIdentityToken =
      hash.includes("recovery_token=") ||
      hash.includes("invite_token=") ||
      hash.includes("confirmation_token=");

    if (hasIdentityToken) {
      // manda para /admin preservando o hash (o token está no hash!)
      window.location.replace(`/admin/${hash}`);
    }
  }, []);

  return null;
}