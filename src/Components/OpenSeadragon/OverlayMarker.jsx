// OverlayMarker.jsx
export default function OverlayMarker({ mark }) {
  return (
    <div
      className="marker-wrapper"
      style={{
        transform: "translate(-50%, -50%)",
        position: "absolute",
        pointerEvents: "auto",
        transition: "transform 0.15s ease-out",
      }}
    >
      <div
        className="marker-pin"
        style={{
          padding: "6px 10px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
          fontSize: "12px",
        }}
      >
        {mark.name}
      </div>
    </div>
  );
}
