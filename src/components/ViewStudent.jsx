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
  { label: "Nombre", value: "Samantha Olmos" },
  { label: "Documento", value: "123456789" },
  { label: "Correo", value: "samanta.olmos@unimeta.edu.co" },
  { label: "Programa", value: "Ingeniería de Sistemas" },
  { label: "Empresa", value: "LogicLine" },
];

const infoDataDer = [
  { label: "Teléfono", value: "3216549870" },
  { label: "Dirección", value: "Barrio San Fernando" },
  { label: "Tipo práctica", value: "Homologación" },
  { label: "Fecha inicio", value: "07/05/2023" },
  { label: "Fecha finalización", value: "07/10/2023" },
];

function ViewStudent() {
  return (
    <>
      <main className="student-profile">
        <h1 className="page-title">Sobre mí</h1>
        <section className="profile-container">
          <div className="profile-card">
            <div className="profile-info">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fd94e3dfcf2bddb28417df2fcfddfae9bc594af4a74446b703fc6da7120e779?apiKey=8c918058986841cbb26abef9273dc52f&"
                alt="Tutor profile"
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

export default ViewStudent;
