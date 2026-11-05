// app/cart/page.tsx
import RedirectWithSpinner from "@/components/RedirectWithSpinner";

export default function CartPage() {
  return (
    <RedirectWithSpinner
      url="https://www.portal.waterbusinesscollege.co.za/cart-2/"
      newTab={true}
    />
  );
}