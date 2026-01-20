import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

function Card({ title, desc, to }) {
  return (
    <Link to={to} className="mm-card">
      <div className="mm-card-title">{title}</div>
      <div className="mm-card-desc">{desc}</div>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout title="Guía del Usuario – Mmeter" description="Centro de ayuda y documentación de Mmeter">
      <main className="mm-container">
        <h1 className="mm-h1">Guía del Usuario – Mmeter</h1>
        <p className="mm-sub">Documentación, imágenes y videos para aprender a usar Mmeter.</p>

                <div className="mm-grid">
          <Card
            title="Empezar"
            desc="Introducción, partes del equipo y puesta en marcha."
            to="/docs/intro"
          />
          <Card
            title="Uso de Mmeter"
            desc="Cómo interpretar mediciones y usar Mmeter en el día a día."
            to="/docs/uso-diario"
          />
          <Card
            title="Ayuda"
            desc="Solución de problemas y preguntas frecuentes."
            to="/docs/troubleshooting"
          />
        </div>

      </main>
    </Layout>
  );
}
