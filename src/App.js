import React, { Component } from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
    state = {
        modalIsOpen: false,
        showBlock: false,
    };

    showModal = () => {
        this.setState({ modalIsOpen: true });
    };

    showBlock = () => {
        this.setState((prevState) => {
            return { showBlock: !prevState.showBlock };
        });
    };

    closeModal = () => [this.setState({ modalIsOpen: false })];
    render() {
        return (
            <div className="App">
                <h1>React Animations</h1>

                <Modal show={this.state.modalIsOpen} closed={this.closeModal} />

                {this.state.modalIsOpen ? (
                    <Backdrop show={this.state.modalIsOpen} />
                ) : null}
                <button className="Button" onClick={this.showBlock}>
                    Toggle
                </button>
                <br />
                <br />
                <Transition
                    in={this.state.showBlock}
                    timeout={1000}
                    mountOnEnter
                    unmountOnExit
                >
                    {(state) => (
                        <div
                            style={{
                                backgroundColor: "red",
                                height: 100,
                                width: 100,
                                margin: "auto",
                                transition: "opacity 1s ease-in-out",
                                opacity: state === "exiting" ? 0 : 1,
                            }}
                        />
                    )}
                </Transition>

                <button className="Button" onClick={this.showModal}>
                    Open Modal
                </button>
                <h3>Animating Lists</h3>
                <List />
            </div>
        );
    }
}

export default App;
