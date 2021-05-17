import { useEffect, useState } from "react";
import AgendaCardComponent from "../AgendaCardComponent";
import AgendaFormComponent from "../AgendaFormComponent";

function HomeFunctionalComponent(props) {
    const [name, setName] = useState("Ebi");
    const [address, setAddress] = useState("Jalan Damai");
    const [agendas, setAgendas] = useState([
        {
            agendaName: "Makan Kue",
            agendaDesc: "Snacking",
            agendaDate: "21 Mei 2021",
            agendaTime: "12:00"
        },
        {
            agendaName: "Berenang",
            agendaDesc: "Olahraga",
            agendaDate: "21 Mei 2021",
            agendaTime: "13:00"
        }
    ]);

    // tertrigger ketika ada perubahan pd component
    useEffect(() => {
        setTimeout(() => {
            setName("Baby");
            setAddress("Jalan Bahagia");
        }, 4000);
    });

    // tertrigger ketika address berubah
    useEffect(() => {
        if (agendas.length <=0){
            alert("Selamat! Agenda sudah selesai.");
        }
    }, [agendas]);

    const handleAgendaDelete = (id) => {
        let currAgendas = [...agendas];
        currAgendas.splice(id,1);
        setAgendas(currAgendas);
    }

    const handleAddAgenda = (agendaObject) => {
        setAgendas([...agendas, agendaObject]);
    }
    
    return (
        <div>
            <h1>Add New Agenda</h1>
            <h1>{name}'s Agenda</h1>
            <AgendaFormComponent handleAddAgenda={handleAddAgenda} />
            {
                agendas.map((dataAgenda, index) => (
                    <AgendaCardComponent key={index} id ={index} {...dataAgenda} 
                    handleAgendaDelete={handleAgendaDelete}
                    />
                ))
            }
        </div>
    );
}

export default HomeFunctionalComponent;