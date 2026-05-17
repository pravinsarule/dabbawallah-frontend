export default function Loading() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(-45deg, #FF8A00, #E52E71, #FF6B35, #F5A623)",
      backgroundSize: "400% 400%",
      animation: "gradientWave 3s ease infinite",
    }}>
      <style>{`
        @keyframes gradientWave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.8; }
        }
        .tiffin-spinner {
          font-size: 72px;
          animation: pulse-scale 1.4s ease-in-out infinite;
          filter: drop-shadow(0 0 30px rgba(255,255,255,0.6));
        }
        .loading-ring {
          width: 90px;
          height: 90px;
          border: 4px solid rgba(255,255,255,0.25);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.9s linear infinite;
          position: absolute;
        }
        .loading-text {
          color: rgba(255,255,255,0.9);
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 600;
          margin-top: 24px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .loading-dots::after {
          content: '';
          animation: dots 1.5s steps(4, end) infinite;
        }
        @keyframes dots {
          0%   { content: ''; }
          25%  { content: '.'; }
          50%  { content: '..'; }
          75%  { content: '...'; }
          100% { content: ''; }
        }
      `}</style>
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="loading-ring" />
        <span className="tiffin-spinner">🍱</span>
      </div>
      <p className="loading-text loading-dots">Loading</p>
    </div>
  );
}
