import { DEFAULT_LIMIT } from "@/constants";
import PlayListView from "@/modules/playlists/ui/views/playlists-view";
import { HydrateClient, trpc } from "@/trpc/server";
import React from "react";

const Page: React.FC = async () => {
  void trpc.playList.getMany.prefetchInfinite({
    limit: DEFAULT_LIMIT,
  });

  return (
    <HydrateClient>
      <PlayListView />
    </HydrateClient>
  );
};
export default Page;
