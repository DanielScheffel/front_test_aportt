import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import "../styles/welcome.css";

export default function Welcome({ onStart }) {

    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        function updateTime() {
            const agora = new Date();
            const hoje = new Date();

            const formatTime = agora.toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });

            const formatDate = new Intl.DateTimeFormat("pt-BR", {
                weekday: "long",
                day: "2-digit",
                month: "long",
                year: "numeric"
            }).format(hoje);

            const moment = agora.getHours();

            let saudacao = 'Boa noite';

            if (moment >= 5 && moment < 12) {
                saudacao = 'Bom dia';
            } else if (moment >= 12 && moment < 18) {
                saudacao = 'Boa tarde';
        }
            setGreeting(saudacao);

            setDate(formatDate);
            setTime(formatTime);
        }

        updateTime();
        const intervalo = setInterval(updateTime, 1000)

        return () => clearInterval(intervalo);
    }, []);

    return (


        <div className="cardTime">
            <div className="welcome">
                <h4>
                    <FaRegClock fontSize={20} /> Ponto Eletrônico
                </h4>
                <p>{greeting}</p>
                <p>{date}</p>
            </div>
            <div className="time">
                <strong>{time}</strong>
            </div>

            <button onClick={onStart}>
                <FaArrowRightToBracket />
                Registrar Entrada
            </button>
        </div>
        
    )

}