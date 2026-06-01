import Link from "next/link";
import { Button } from "@/components/ui/button";

function CTAButton({ href, children, ...props }) {
  return (
    <Button asChild {...props}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export { CTAButton };