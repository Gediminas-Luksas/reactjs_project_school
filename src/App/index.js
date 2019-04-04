import React from 'react';
import {ClipLoader} from 'react-spinners';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import {Home, Rules, Maches, Statistics, Login, Register} from './pages';
import {News, Teams} from './admin';
import {PageLayout, Page404} from './component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      news: [],
      loading: false,
      error: null,
      route: 'home',
    };
    this.NAV_LINK = [
      'Register',
      'Login',
      'Rules',
      'Statistics',
      'Maches',
      'Home',
      'News',
      'Teams',
    ].map((link, i) => (
      <Link key={i} to={`/${link}`}>
        {link}
      </Link>
    ));
  }

  componentDidMount() {
    this.setState({loading: true});
    this.getNews();
    this.getTeams();
  }

  getTeams() {
    fetch('/teams')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        this.setState({error: 'Something wrong...'});
        return [];
      })
      .then(json => {
        this.setState({loading: false, teams: json});
      })
      .catch(() => this.setState({error: 'Something wrong...'}));
  }

  getNews() {
    fetch('/news')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        this.setState({error: 'Something wrong...'});
        return [];
      })
      .then(json => {
        this.setState({loading: false, news: json});
      })
      .catch(() => this.setState({error: 'Something wrong...'}));
  }

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem('userToken');
    this.props.history.replace('/');
    
  }

  homeRouter = () => {
    const {news} = this.state;
    return <Home news={news} />;
  };
  loginRouter = () => {
    return <Login onClick={this.logOut.bind(this)} />;
  };
  registerRouter = () => {
    return <Register />;
  };
  rulesRouter = () => {
    return <Rules />;
  };
  machesRouter = () => {
    return <Maches />;
  };
  statisticsRouter = () => {
    const {teams} = this.state;
    return <Statistics teams={teams} />;
  };
  newsRouter = () => {
    return <News />;
  };
  teamsRouter = () => {
    return <Teams />;
  };

  render() {
    const {loading, error} = this.state;
    return (
      <Router>
        <PageLayout navLinks={this.NAV_LINK}>
          {loading && <ClipLoader />}
          {error}
          <Switch>
            <Route path="/home" exact component={this.homeRouter} />
            <Route path="/rules" exact component={this.rulesRouter} />
            <Route path="/maches" exact component={this.machesRouter} />
            <Route path="/statistics" exact component={this.statisticsRouter} />
            <Route path="/login" exact component={this.loginRouter} />
            <Route path="/register" exact component={this.registerRouter} />

            <Route path="/news" exact component={this.newsRouter} />
            <Route path="/teams" exact component={this.teamsRouter} />
            <Route path="/404" exact component={Page404} />
            <Redirect exact from="/" to="/home" />
            <Redirect to="/404" />
          </Switch>
        </PageLayout>
      </Router>
    );
  }
}

export default App;
