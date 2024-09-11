import React from 'react';

class Addtodo extends React.Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.descRef = React.createRef();
    this.state = {
      title: "",
      desc: ""
    };
  }

  handleSubmit = () => {
    const titleValue = this.titleRef.current.value.trim();
    const descValue = this.descRef.current.value.trim();
   

    if (!titleValue || !descValue) {
      alert("Title or Description cannot be blank.");
    } else {
      this.props.addTodo(titleValue, descValue);
      this.setState({ title: "", desc: "" });
    }
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.handleSubmit();
    }
  }

  render() { 
    return (
      <div className='container'>
        <h3 className='text-center'>Add Todo</h3>
        <form>
          <div className="form-group">
            <label htmlFor="title">Todo Title</label>
            <input
              ref={this.titleRef}
              type="text"
              className="form-control my-2"
              id="title"
              aria-describedby="title"
              placeholder="Enter Title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
              onKeyPress={this.handleKeyPress}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Todo Description</label>
            <input
              ref={this.descRef}
              type="text"
              className="form-control my-2"
              id="desc"
              placeholder="Description"
              value={this.state.desc}
              onChange={(e) => this.setState({ desc: e.target.value })}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        </form>
        <button type="button" className="btn btn-primary my-2" onClick={this.handleSubmit}>Add Todo</button>
      </div>
    );
  }
}

export default Addtodo;
