import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTransition } from "react";

import { useRouter } from "next/router";
import { deleteUser } from "../../_actions/user";

export function DeleteDropDownItem({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <DropdownMenuItem
      variant="destructive"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await deleteUser(id);
          router.reload();
        })
      }
    >
      Delete
    </DropdownMenuItem>
  );
}
