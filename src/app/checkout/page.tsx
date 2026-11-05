// app/checkout/page.tsx
"use client";
import RedirectWithSpinner from "@/components/RedirectWithSpinner";

export default function CheckoutPage() {
  return (
    <RedirectWithSpinner
      url="https://www.portal.waterbusinesscollege.co.za/checkout/"
      newTab={true}
    />
  );
}
