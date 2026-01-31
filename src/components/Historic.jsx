import { useState } from "react";
import "../styles/historic.css";

export default function Historico({ registros }) {

    const [selectedRegistro, setSelectedRegistro] = useState(null);

    // vendo se estao vindo registros como props
    if(!registros || registros.length === 0) {
        return <p>Nenhum registro encontrado.</p>;
    }

    // Tela de detalhes do registro selecionado
    if(selectedRegistro) {
        return (
            <div className="historico-detalhe">
                <div className="header">
                    <h3>Detalhes do Registro</h3>
                    <button onClick={() => setSelectedRegistro(null)}>
                        Voltar
                    </button>
                </div>

        <p><strong>Data:</strong> {selectedRegistro.date}</p>
        <p><strong>Hora:</strong> {selectedRegistro.time}</p>
        <p><strong>Latitude:</strong> {selectedRegistro.latitude}</p>
        <p><strong>Longitude:</strong> {selectedRegistro.longitude}</p>
        <p><strong>IP:</strong> {selectedRegistro.ip}</p>

        <img
          src={`http://localhost:3000/uploads/${selectedRegistro.foto}`}
          alt="Foto do registro"
          style={{ width: '100%', borderRadius: '8px' }}
        />
      </div>
        )
    };

    // TELA DE LISTA DE REGISTROS
    return (
        <div className="historico-lista">
      <h3>Registros</h3>

      <ul>
        {registros.map((registro, index) => (
          <li key={index}>
            <span>{registro.time}</span>

            <button onClick={() => setSelectedRegistro(registro)}>
              Ver
            </button>
          </li>
        ))}
      </ul>
    </div>
    )
}