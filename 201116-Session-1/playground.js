class DisplayMessages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      messages: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    const { value } = e.target
    this.setState({ input: value })
  }

  submitMessage(e) {
    e.preventDefault()
    this.setState((prevState) => {
      return { input: "", messages: [...prevState.messages, this.state.input] }
    })
  }

  render() {
    const messageDisplay = messages.map((message) => (
      <li key={messages.indexOf(message)}>{message}</li>
    ))

    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input
          type="text"
          name="input"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button name="button" onClick={this.submitMessage}>
          Submit
        </button>
        <ul>{messageDisplay}</ul>
        {/* Change code above this line */}
      </div>
    )
  }
}
