import VideoDownloader from "@/app/components/video-downloader";

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-3">
      <h2 className="col-span-12 text-center text-2xl font-bold pt-9">
        Video Downloader 🎉
      </h2>

      <p className="col-span-12 text-center">
        Download videos from Youtube, Twitter and Facebook
      </p>

      <div className="col-span-12">
        <VideoDownloader></VideoDownloader>
      </div>
    </main>
  );
}
