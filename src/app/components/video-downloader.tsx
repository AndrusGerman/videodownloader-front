export default function VideoDownloader() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Video Paste */}
      <div className="flex px-4 justify-center">
        <input
          className="
      h-9
      border-solid border-2
      border-r-0
      w-full
      rounded-l-md
      max-w-screen-sm
      "
          placeholder="Video Link"
        ></input>
        <button
          className="
      h-9
      rounded-r-md
      bg-orange-300
      px-2
      "
        >
          Paste
        </button>
      </div>
      {/* Video Downloader btn */}

      <button
        className="
      
      m-auto
      w-full max-w-80 h-10 
      bg-gray-600 
      rounded-sm 
      text-white
      hover:bg-gray-900
      transition-colors
      px-2
      "
      >
        Download
      </button>
    </div>
  );
}
