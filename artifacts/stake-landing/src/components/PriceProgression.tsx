const batches = [
  { label: "Batch 1", price: "$4,000", active: false, soldOut: true },
  { label: "Batch 2", price: "$4,250", active: false, soldOut: true },
  { label: "Batch 3", price: "$4,500", active: false, soldOut: true },
  { label: "Batch 4", price: "$4,750", active: true, soldOut: false },
  { label: "Batch 5", price: "$5,000", active: false, soldOut: false },
  { label: "Batch 6", price: "$5,250", active: false, soldOut: false },
];

export default function PriceProgression() {
  return (
    <section className="relative z-10 mx-4 sm:mx-8 lg:mx-auto lg:max-w-5xl mt-2 mb-10">
      <div
        className="rounded-2xl px-5 py-5 sm:px-7 sm:py-6"
        style={{
          background: "rgba(15, 22, 40, 0.85)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
          <h3
            className="font-bold text-base sm:text-lg"
            style={{ color: "#f97316" }}
          >
            Price Progression (200 Tokens)
          </h3>
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              SOLD OUT 1-3
            </span>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "rgba(34,197,94,0.15)",
                color: "#22c55e",
                border: "1px solid rgba(34,197,94,0.25)",
              }}
            >
              ACTIVE 4
            </span>
          </div>
        </div>

        {/* Batch Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {batches.map((batch) => (
            <div
              key={batch.label}
              className="rounded-xl px-4 py-3 flex flex-col gap-1 transition-all"
              style={
                batch.active
                  ? {
                      background: "rgba(249,115,22,0.12)",
                      border: "1.5px solid #f97316",
                    }
                  : {
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              <span
                className="text-xs font-medium"
                style={{
                  color: batch.active
                    ? "#f97316"
                    : "rgba(255,255,255,0.45)",
                }}
              >
                {batch.label}
              </span>
              <span
                className="text-base font-bold"
                style={{
                  color: batch.active ? "#f97316" : "rgba(255,255,255,0.9)",
                }}
              >
                {batch.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
