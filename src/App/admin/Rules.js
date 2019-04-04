import React, { Component } from 'react';
import { rules } from '../functions';
import './index.scss';

class Rules extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      texts: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const rules = {
      title: this.state.title,
      texts: this.state.texts,
    };
    rules(rules).then(res => {
      if (res) {
        this.props.history.push('/home');
      }
    });
  }

  render() {
    return (
      <div className="form-style-2">
        <div className="form-style-2-heading">Rules Form</div>
        <form onSubmit={this.onSubmit}>
          <label>
            <span>
              Name <span className="required" />
            </span>
            <input
              type="text"
              className="input-field"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </label>
          <label>
            <span>
              Message <span className="required" />
            </span>
            <textarea
              type="textarea"
              name="texts"
              className="textarea-field"
              value={this.state.texts}
              onChange={this.onChange}
            />
          </label>

          <label>
            <span> </span>
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    );
  }
}
export default Rules;
