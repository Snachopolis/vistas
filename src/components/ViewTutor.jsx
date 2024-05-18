import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function InfoItem({ label, value }) {
  return (
    <div className="info-item">
      <div className="info-label">{label}</div>
      <div className="info-value">{value}</div>
    </div>
  );
}

const infoDataIzq = [
  { label: "Nombre", value: "José Ruiz" },
  { label: "Correo", value: "jose.ruiz@unimeta.edu.co" },
];

const infoDataDer = [
  { label: "Cargo", value: "Ing. Sistemas" },
  { label: "Profesion", value: "Ingenieria de Sistemas" },
];

function ViewTutor() {
  return (
    <>
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
              <div class="container text-center">
                <div class="row align-items-start">
                  <div class="col">
                    {infoDataIzq.map((item, index) => (
                      <InfoItem
                        key={index}
                        label={item.label}
                        value={item.value}
                      />
                    ))}
                  </div>
                  <div class="col">
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
          <footer className="university-info">
            Corporación Universitaria del Meta | Vigilada Mineducación /
            Personería jurídica Resolución N°. 12249 del 5 de agosto de 1985.
            <br />
            Institución Universitaria Villavicencio - Meta.
          </footer>
        </section>
      </main>
    </>
  );
}

export default ViewTutor;
