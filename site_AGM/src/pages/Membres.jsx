import React from "react";

// Récupération dynamique des images
const saryIlaina = [
  require("../assets/sary_ilaina/sary.jpg"),
  require("../assets/sary_ilaina/sary1.jpg"),
  require("../assets/sary_ilaina/sary2.jpg"),
  require("../assets/sary_ilaina/sary3.jpg"),
  require("../assets/sary_ilaina/sary4.jpg"),
];
const saryAtaoFond = [
  require("../assets/sary_atao_fond/equipe.jpg"),
  require("../assets/sary_atao_fond/equipe1.jpg"),
  require("../assets/sary_atao_fond/madatlas.jpg"),
  require("../assets/sary_atao_fond/madatlasOk.jpg"),
  require("../assets/sary_atao_fond/sary_ilaina_atao_fond.jpg"),
];
const agmAtelier = [
  require("../assets/AGM_ATELIER/sary2.jpg"),
  require("../assets/AGM_ATELIER/sary3.jpg"),
  require("../assets/AGM_ATELIER/sary4.jpg"),
  require("../assets/AGM_ATELIER/sary5.jpg"),
];

const allImages = [
  ...saryIlaina,
  ...saryAtaoFond,
  ...agmAtelier,
];

export default function Membres() {
  const [hovered, setHovered] = React.useState(-1);
  const [previewIdx, setPreviewIdx] = React.useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setPreviewIdx((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };
  const handleNext = (e) => {
    e.stopPropagation();
    setPreviewIdx((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ padding: "32px 0", background: "#f8f9fa", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#1976d2", fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 40, marginBottom: 32 }}>Membres & Équipe AGM</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32, filter: previewIdx !== null ? 'blur(4px)' : 'none', pointerEvents: previewIdx !== null ? 'none' : 'auto' }}>
        {allImages.map((img, idx) => (
          <div
            key={idx}
            style={{
              overflow: "hidden",
              margin: "24px auto",
              maxWidth: "480px",
              background: "#fff",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer",
              filter: previewIdx !== null && previewIdx !== idx ? 'blur(4px)' : 'none',
              zIndex: previewIdx === idx ? 100 : 1,
              position: 'relative',
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(-1)}
            onClick={() => setPreviewIdx(idx)}
          >
            <img src={img} alt="Membre AGM" style={{ width: "100%", height: 340, objectFit: "cover" }} />
          </div>
        ))}
      </div>
      {previewIdx !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={() => setPreviewIdx(null)}
        >
          <button onClick={handlePrev} style={{ position: 'absolute', left: 30, top: '50%', transform: 'translateY(-50%)', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '50%', width: 48, height: 48, fontSize: 28, fontWeight: 700, cursor: 'pointer', zIndex: 10001 }}>&lt;</button>
          <div style={{ background: "none", padding: 0, maxWidth: '98vw', maxHeight: '98vh', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 'none', borderRadius: 0 }}>
            <img src={allImages[previewIdx]} alt="Aperçu membre" style={{ width: "auto", height: "90vh", maxWidth: "98vw", objectFit: "contain", borderRadius: 0, boxShadow: 'none' }} />
            <button style={{ marginTop: 16, background: "#1976d2", color: "#fff", border: "none", borderRadius: 8, padding: "8px 24px", fontWeight: 700, fontSize: 18, cursor: "pointer" }} onClick={e => { e.stopPropagation(); setPreviewIdx(null); }}>
              Fermer
            </button>
          </div>
          <button onClick={handleNext} style={{ position: 'absolute', right: 30, top: '50%', transform: 'translateY(-50%)', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '50%', width: 48, height: 48, fontSize: 28, fontWeight: 700, cursor: 'pointer', zIndex: 10001 }}>&gt;</button>
        </div>
      )}
    </div>
  );
}
