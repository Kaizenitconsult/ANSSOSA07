export default function FrameEditor() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-zinc-900 w-full max-w-5xl rounded-3xl p-6">
        
        <h1 className="text-3xl font-bold text-green-500 text-center">
          ANSSOSA 2007
        </h1>

        <p className="text-center text-gray-300 mb-6">
          20th Anniversary Photo Frame Editor
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* FRAME */}
          <div className="bg-black p-4 rounded-2xl border border-green-700">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-yellow-500 bg-white flex items-center justify-center">
              <input type="file" accept="image/*" className="absolute opacity-0 w-0 h-0" />
              <p className="text-black">Upload Image Feature Here</p>
            </div>

            <div className="text-center mt-5 space-y-3">
              <h2 className="text-4xl font-bold text-green-500">
                I’M REPPING
              </h2>

              <p className="text-lg">Proudly ANSSOSA 2007</p>

              <div className="text-5xl font-extrabold text-yellow-500">
                20 YEARS STRONG
              </div>

              <div className="bg-green-600 p-3 rounded-xl font-bold">
                20TH ANNIVERSARY LAUNCH
              </div>

              <p className="text-gray-300">18 SEPTEMBER 2026</p>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="space-y-4">
            <div className="bg-zinc-800 p-4 rounded-xl">
              <h3 className="font-bold text-green-400 mb-2">
                Instructions
              </h3>

              <ul className="text-sm text-gray-300 list-disc pl-5">
                <li>Upload your photo</li>
                <li>Adjust position</li>
                <li>Download image</li>
                <li>Share on social media</li>
              </ul>
            </div>

            <button className="w-full bg-green-600 py-3 rounded-xl font-bold">
              Upload Photo
            </button>

            <button className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold">
              Download Frame
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}