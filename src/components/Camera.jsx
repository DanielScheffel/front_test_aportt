import { useRef, useState } from 'react';
import "../styles/camera.css";

export default function Camera({ onFinish }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);

  async function startCamera() {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true
    });

    videoRef.current.srcObject = mediaStream;
    setStream(mediaStream);
  }

  function takePhoto() {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);

    canvas.toBlob((blob) => {
      const file = new File([blob], 'foto.jpg', { type: 'image/jpeg' });
      console.log('Arquivo:', file);

      // Para a câmera
      stream.getTracks().forEach(track => track.stop());

      onFinish(file);
    }, 'image/jpeg');
  }

  return (
    <div className='camera-container'>
      <video ref={videoRef} autoPlay playsInline />

      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <div className="buttons">
        <button onClick={startCamera}>Abrir câmera</button>
      <button onClick={takePhoto}>Tirar foto</button>
      </div>
    </div>
  );
}
