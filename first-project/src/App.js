import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import React, { Component } from 'react';

class App extends Component {

  state = {
    listItems: [
      {
        name: 'Cairo',
        email: 'cairo@****.com',
        date: new Date(2021, 7, 23),
        message: 'Mensagem aleatória'
      },
      {
        name: 'Diego',
        email: 'Diego@****.com',
        date: new Date(2021, 7, 22),
        message: 'Mensagem aleatória'
      }
    ],
    newItem: {
      name: '',
      email: '',
      date: '',
      message: ''
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.listItems.map((item, index) => (
          <Content
            key={index}
            name={item.name}
            email={item.email}
            date={item.date}
            onRemove={this.removeItem.bind(this, item)}>
            {item.message}
          </Content>
        ))}

        <button onClick={this.addItem}>Adicionar</button>

        <form method="post" onSubmit={this.addItem}>
          <h2>Adicionar Pessoa</h2>
          <div>
            <input
              type="text"
              name="name"
              value={this.state.newItem.name}
              onChange={this.changeForm}
              placeholder="Digite seu nome" />
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={this.state.newItem.email}
              onChange={this.changeForm}
              placeholder="Digite seu nome" />
          </div>
          <div>
            <textarea
              type="text"
              name="message"
              value={this.state.newItem.message}
              onChange={this.changeForm}
              placeholder="Digite seu nome" />
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </div>
    )
  }

  removeItem = item => {
    let list = this.state.listItems;
    list = list.filter(i => i !== item)
    this.setState({ listItems: list })
  }

  addItem = (event) => {
    event.preventDefault();
    const newItem = { ...this.state.newItem, date: new Date() }
    this.setState({
      listItems: [...this.state.listItems, newItem], // add newItem into listItems
      newItem: { name: '', email: '', message: '', date: '' } //limpar campos
    })
  }

  changeForm = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ newItem: { ...this.state.newItem, [name]: value } })
  }

}

export default App;
