import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      books: [
        { name: 'x', price: 1, num: 2 },
        { name: 'y', price: 21, num: 12 },
      ]
    }
  }
  addNewBook() {
    let newBooks = [...this.state.books]
    newBooks.push({name: 'z', price: 2, num: 0})
    this.setState({
      books: newBooks
    })
  }
  changeNum(index) {
    const newBooks = [...this.state.books]
    newBooks[index].num++
    this.setState({
      books: newBooks
    })
  }
  render() {
    const { books } = this.state
    return (
      <div>
        <ul>
          {
            books.map((item, index) => {
              return (
                <li key={index}>{item.name}-{item.num}-{item.price}
                  <button onClick={() => this.changeNum(index)}>+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={() => this.addNewBook()}>+书</button>
      </div>
    )
  }
}

export default App