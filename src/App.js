import React from "react";
import Content from "./Content";
import FormCard from "./FormCard";
import { getInitialData } from "./utils";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            title: '',
            note: '',
            notes: getInitialData(),
        }

        this.handleSubmitNotes = this.handleSubmitNotes.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChangeNotes = this.handleChangeNotes.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleDeleteNote = this.handleDeleteNote.bind(this);
        this.handleToArchived = this.handleToArchived.bind(this);
        this.handleToNotArchived = this.handleToNotArchived.bind(this);
    }

    handleSubmitNotes = (event) => {
        event.preventDefault();
        this.setState((prevState) => {
            return {
                ...prevState,
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title: this.state.title,
                        body: this.state.note,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    },
                ],
                title: '',
                note: '',
            }
        });
    }

    handleSearch = (event) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                search: event.target.value,
            }
        });
    }

    handleChangeTitle = (event) => {
        if (event.target.value.length > 50) {
            this.setState((prevState) => {
                return prevState;
            });
        } else {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    title: event.target.value,
                }
            });
        }
    }

    handleChangeNotes = (event) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                note: event.target.value,
            }
        });
    }

    handleDeleteNote = (id) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                notes: prevState.notes.filter((item) => item.id !== id),
            }
        });
    }

    handleToArchived = (id) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                notes: prevState.notes.map((item) => (item.id === id) ? { ...item, archived: true } : item)
            }
        });
    }

    handleToNotArchived = (id) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                notes: prevState.notes.map((item) => (item.id === id) ? { ...item, archived: false } : item)
            }
        });
    }

    render() {
        return <div className="container-app">
            <FormCard
                onSubmit={this.handleSubmitNotes}
                handleChangeNotes={this.handleChangeNotes}
                handleChangeTitle={this.handleChangeTitle}
                note={this.state.note}
                title={this.state.title}
            />
            <Content
                handleSearch={this.handleSearch}
                search={this.state.search}
                notes={this.state.notes.filter((note) => note.title.toLowerCase().search(this.state.search.toLowerCase()) !== -1)}
                handleDeleteNote={this.handleDeleteNote}
                handleToArchived={this.handleToArchived}
                handleToNotArchived={this.handleToNotArchived}
            />
        </div>
    }
}

export default App;