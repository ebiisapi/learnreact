import React from 'react';
import AgendaCardComponent from '../AgendaCardComponent';
import AgendaFormComponent from '../AgendaFormComponent';
import LoadingComponent from '../LoadingComponent';
import { EditAgendaModal } from '../ModalComponent';


// name dir & name class biasakan sama supaya rapih
class HomeClassComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "Ebi",
            agendas: [
                {
                    agendaName: "Makan ketoprak",
                    agendaDesc: "Lunch",
                    agendaDate: "6 Mei 2021",
                    agendaTime: "12:00"
                },
                {
                    agendaName: "Daily Sync Lead",
                    agendaDesc: "Update progress Promo Code",
                    agendaDate: "6 Mei 2021",
                    agendaTime: "13:00"
                },
                {
                    agendaName: "Meeting SBN Retail",
                    agendaDesc: "Update progress SIT",
                    agendaDate: "6 Mei 2021",
                    agendaTime: "17:00"
                }
            ],
            isLoading: true,
            showEditModal: false,
            agendaToEdit: {}

        }

        // data dalam componet: state & props
        // props: read only --> parameter dari parent, bisa jg berupa function
        // state: data dari component itu sendiri
    }

    //dijalankan ketika componentnya akan di-mount/di-render
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: "Yanti",
                isLoading: false
            })
        }, 4000);
    }

    shouldComponentUpdate() {
        // if true, component will be updated/redered when there is changes
        // false, component will not be updated
        return true;
    }

    // componentDidUpdate(){
    //     alert("Something's changed");
    // }

    // componentWillUnmount(){
    //     alert("called from componentWillUnMount");
    // }

    componentDidCatch(error, errorInfo) {
        alert("Something went wrong!");
        console.log(`Error: ${error}`);
        console.log(`Error Info: ${errorInfo}`);
    }

    handleAgendaDelete = (id) => {
        // delete data dari state agendas
        this.setState((state, props) => {
            let currAgendas = [...state.agendas];

            currAgendas.splice(id, 1);
            return {
                agendas: currAgendas
            }
        });
    }

    handleAddAgenda = (agendaObject, mode, id = null) => {
        let currAgendas = this.state.agendas;
        currAgendas.push(agendaObject);

        // console.log('AgendaObject After push', currAgendas);

        // cara ini kurang efektif:
        // this.setState({
        //     agendas: currAgendas
        // });

        // cara lebih best practice:
        if (mode == "add") {
            this.setState((state, props) => (
                {
                    agendas: [...state.agendas, agendaObject]
                }
            ));
        }
        else if (mode = "edit") {
            let currAgendas = [...this.state.agendas];
            currAgendas[id] = agendaObject;
            this.setState({
                agendas: currAgendas
            });
        }

    }

    handleAgendaEdit = (id) => {
        this.setState({
            showEditModal: true
        });

        let currAgendas = [...this.state.agendas];
        let agendaToEdit = currAgendas[id];
        agendaToEdit.id = id;

        this.setState({
            agendaToEdit: agendaToEdit
        });
    }



    handleCloseModal = () => {
        this.setState({
            showEditModal: false
        });
    }

    render() {
        return (
            <div>
                <h1>Add New Agenda</h1>
                <LoadingComponent />
                <AgendaFormComponent mode="add" handleAddAgenda={this.handleAddAgenda} />
                <h1>{this.state.name}'s Agenda</h1>
                {
                    this.state.isLoading == true ? (
                        <LoadingComponent />
                    ) : (this.state.agendas.map((dataAgenda, index) => (
                        // <AgendaCardComponent 
                        // agendaName={dataAgenda.agendaName} 
                        // agendaDesc={dataAgenda.agendaDesc}
                        // agendaDate={dataAgenda.agendaDate}
                        // agendaTime={dataAgenda.agendaTime}
                        // handleAgendaDelete={this.handleAgendaDelete} />
                        <AgendaCardComponent key={index} id={index} {...dataAgenda}
                            handleAgendaDelete={this.handleAgendaDelete}
                            handleAgendaEdit={this.handleAgendaEdit}
                        />
                    )))

                }
                <EditAgendaModal dataEdit={this.state.agendaToEdit}
                    className="edit-modal"
                    handleAddAgenda={this.handleAddAgenda}
                    handleCloseModal={this.handleCloseModal}
                    showModal={this.state.showEditModal} />
            </div>
        )

    }

}

export default HomeClassComponent;