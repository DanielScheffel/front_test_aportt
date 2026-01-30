import { useState, useEffect } from 'react';
import './App.css';

import { Navbar } from './components/Navbar.jsx';
import Welcome from './components/Welcome.jsx';
import MapView from './components/MapView.jsx';
import Camera from './components/Camera.jsx';
import Historico from './components/Historic.jsx';

import { registrarPonto, buscarRegistros } from './service/api';

function App() {
  const [step, setStep] = useState(1);
  const [coords, setCoords] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [historico, setHistorico] = useState('');

  async function loadHistorico() {
    const data = await buscarRegistros();
    setHistorico(data.registros);
  }

  async function handleSubmit(photoFile) {

    if (!coords || !photoFile) {
    alert('Localização ou foto não encontrada');
    return;
  }

    try {
      await registrarPonto({
        latitude: coords[0],
        longitude: coords[1],
        foto: photoFile
      });

      await loadHistorico();
      console.log('COORDS:', coords);
console.log('FOTO:', photoFile);
      setStep(1);
    } catch (err) {
      console.error('ERRO NO POST:', err);
    alert(err?.response?.data?.error || 'Erro ao registrar ponto');
      // alert('Erro ao registrar ponto');
    }
  }

  useEffect(() => {
    loadHistorico();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <div className="container">
          <header className="page-header">
            <h1>Painel de Controle</h1>
            <p>Acompanhe suas horas de trabalho e gerencie seu tempo</p>
          </header>

          <section className="dashboard">
            <div className="card principal">
              {step === 1 && (
                <Welcome onStart={() => setStep(2)} />
              )}

              {step === 2 && (
                <MapView
                  onConfirm={(position) => {
                    setCoords(position);
                    setStep(3);
                  }}
                />
              )}

              {step === 3 && (
                <Camera
                  onFinish={(file) => {
                    setPhoto(file);
                    handleSubmit(file);
                  }}
                />
              )}
            </div>

            <div className="card secundario">
              <Historico registros={historico} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
