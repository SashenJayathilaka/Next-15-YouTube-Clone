import FramerClient from "@/components/framer-client";
import VideoView from "@/modules/studio/ui/views/video-view";
import { HydrateClient, trpc } from "@/trpc/server";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ videoId: string }>;
};

async function Page({ params }: Props) {
  const { videoId } = await params;

  void trpc.studio.getOne.prefetch({ id: videoId });
  void trpc.categories.getMany.prefetch();

  return (
    <HydrateClient>
      <FramerClient>
        <VideoView videoId={videoId} />
      </FramerClient>
    </HydrateClient>
  );
}

export default Page;
