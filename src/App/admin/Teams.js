import React, {Component} from 'react';
import {teams} from '../functions';
import './index.scss';

class Teams extends Component {
  constructor() {
    super();
    this.state = {
      team: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const team = {
      team: this.state.team,
    };
    teams(team).then(res => {
      if (res) {
        this.props.history.push('/home');
      }
    });
  }

  render() {
    return (
      <div className="form-style-2">
        <div className="form-style-2-heading">Teams Form</div>
        <form onSubmit={this.onSubmit}>
          <label>
            <span>
              Team <span className="required" />
            </span>
            <input
              type="text"
              className="input-field"
              name="team"
              value={this.state.team}
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
export default Teams;
