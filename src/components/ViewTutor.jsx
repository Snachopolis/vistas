import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/StyleViews.css";

// Componente funcional para mostrar un elemento de información.
const InfoItem = ({ label, value }) => (
  <div className="info-item">
    <div className="info-label">{label}</div>
    <div className="info-value">{value}</div>
  </div>
);

// Validación de propiedades para InfoItem
InfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

// Datos de información de la izquierda
const infoDataIzq = [
  { label: "Nombre", value: "José Ruiz" },
  { label: "Correo", value: "jose.ruiz@unimeta.edu.co" },
];

// Datos de información de la derecha
const infoDataDer = [
  { label: "Cargo", value: "Ing. Sistemas" },
  { label: "Profesion", value: "Ingenieria de Sistemas" },
];

// Componente funcional principal que renderiza la vista del perfil del tutor.
const ViewTutor = () => {
  return (
    <main className="tutor-profile">
      <h1 className="page-title">Tutor</h1>
      <section className="profile-container">
        <div className="profile-card">
          <div className="profile-info">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e81f99bea95f5b732546dd497b0dd77805d297ce863b2c636f2de324915e6656?apiKey=8c918058986841cbb26abef9273dc52f&"
              alt="Tutor profile picture"
              className="profile-image"
            />
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  {infoDataIzq.map((item, index) => (
                    <InfoItem
                      key={index}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </div>
                <div className="col">
                  {infoDataDer.map((item, index) => (
                    <InfoItem
                      key={index}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ViewTutor;
