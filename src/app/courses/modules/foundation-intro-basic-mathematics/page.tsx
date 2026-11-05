"use client";

export default function FoundationIntroBasicMathematicsPage() {
  return (
    <main className="bg-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Introduction to Basic Mathematics – Course Info
      </h1>

      <div className="aspect-w-16 aspect-h-9 w-full max-w-5xl mx-auto mb-10">
        <iframe
          src="/pdfs/intro-to-basic-math.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full h-[80vh] border rounded shadow-lg"
          title="Introduction to Basic Mathematics — course brochure PDF"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="bg-[#2e528e] hover:bg-[#2e528e] text-white font-semibold px-6 py-3 rounded-lg shadow w-[400px]"
          onClick={() => {
            window.open('https://portal.waterbusinesscollege.co.za/?add-to-cart=8719&redirect_to=https://portal.waterbusinesscollege.co.za/cart-2/', '_blank');
          }}
        >
          Purchase course
        </button>
      </div>
    </main>
  );
}
