// Importación de las dependencias necesarias
import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/StyleViews.css";

// Componente funcional reutilizable para mostrar un elemento de información
const InfoItem = ({ label, value, editable, onValueChange }) => (
  <div className="info-item">
    <div className="info-label">{label}</div>
    {editable ? (
      <input
        type="text"
        className="info-value editable-input"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    ) : (
      <div className="info-value">{value}</div>
    )}
  </div>
);

// Validación de las propiedades esperadas por el componente InfoItem
InfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  onValueChange: PropTypes.func,
};

// Datos de información para el lado izquierdo
const infoDataIzq = [
  { label: "Nombre", value: "Samantha Olmos" },
  { label: "Documento", value: "123456789" },
  { label: "Correo", value: "samanta.olmos@unimeta.edu.co" },
  { label: "Programa", value: "Ingeniería de Sistemas" },
  { label: "Empresa", value: "LogicLine" },
];

// Datos de información inicial para el lado derecho
const initialInfoDataDer = [
  { label: "Teléfono", value: "3216549870" },
  { label: "Dirección", value: "Barrio San Fernando" },
  { label: "Tipo práctica", value: "Homologación" },
  { label: "Fecha inicio", value: "07/05/2023" },
  { label: "Fecha finalización", value: "07/10/2023" },
];

// Componente funcional principal que renderiza la vista del perfil del estudiante
const ViewStudent = () => {
  const [infoDataDer, setInfoDataDer] = useState(initialInfoDataDer); // Estado para la información derecha
  const [isEditable, setIsEditable] = useState(false); // Estado para controlar si se está editando
  const [profileImage, setProfileImage] = useState(
    "https://cdn.builder.io/api/v1/image/assets/TEMP/3fd94e3dfcf2bddb28417df2fcfddfae9bc594af4a74446b703fc6da7120e779?apiKey=8c918058986841cbb26abef9273dc52f&"
  ); // Estado para la imagen de perfil

  // Función para alternar entre el modo de edición y visualización
  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  // Función para cambiar el valor de un elemento de información editable
  const handleValueChange = (index, newValue) => {
    if (/^\d+$/.test(newValue)) {
      // Validación para asegurarse de que newValue sea un número
      const newInfoDataDer = [...infoDataDer]; // Se crea una copia del array de información derecha
      newInfoDataDer[index].value = newValue; // Se actualiza el valor del elemento en la copia
      setInfoDataDer(newInfoDataDer); // Se actualiza el estado con la copia modificada
    }
  };

  // Función para cambiar la imagen de perfil
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Se obtiene el archivo de la imagen seleccionada
    if (file) {
      const reader = new FileReader(); // Se crea un lector de archivos
      reader.onloadend = () => {
        setProfileImage(reader.result); // Cuando la lectura del archivo termina, se actualiza la imagen de perfil
      };
      reader.readAsDataURL(file); // Se inicia la lectura del archivo como una URL de datos
    }
  };

  // Renderizado del componente
  return (
    <main className="student-profile">
      <h1 className="page-title">Sobre mí</h1>
      <section className="profile-container">
        <div className="profile-card">
          <div className="profile-info">
            {isEditable ? (
              // Si está en modo de edición, se muestra un input para seleccionar una nueva imagen
              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={handleImageChange}
              />
            ) : (
              // Si no está en modo de edición, se muestra la imagen de perfil actual
              <img
                src={profileImage}
                alt="Tutor profile"
                className="profile-image"
              />
            )}
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  {infoDataIzq.map((item, index) => (
                    // Se renderizan los elementos de información de la izquierda
                    <InfoItem
                      key={index}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </div>
                <div className="col">
                  {infoDataDer.map((item, index) => (
                    // Se renderizan los elementos de información de la derecha, con opción de edición para el teléfono
                    <InfoItem
                      key={index}
                      label={item.label}
                      value={item.value}
                      editable={isEditable && item.label === "Teléfono"}
                      onValueChange={(newValue) =>
                        handleValueChange(index, newValue)
                      }
                    />
                  ))}
                </div>
              </div>
              {/* Botón para alternar entre el modo de edición y visualización */}
              <button
                className="btn btn-primary mt-3"
                onClick={handleEditClick}
              >
                {isEditable ? "Guardar" : "Editar"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ViewStudent;
