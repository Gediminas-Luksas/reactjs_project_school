import axios from 'axios';

export const register = newUser => {
  return axios
    .post('/user/signup', {
      userName: newUser.userName,
      email: newUser.email,
      password: newUser.password,
    })
    .then(res => {
      console.log('Registered');
    });
};

export const login = user => {
  return axios
    .post('/user/login', {
      email: user.email,
      password: user.password,
    })
    .then(res => {
      localStorage.setItem('userToken', res.data);

      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const newsHome = news => {
  return axios
    .post('/news', {
      title: news.title,
      texts: news.texts,
    })
    .then(res => {
      console.log('Successful');
    })
    .catch(err => {
      console.log(err);
    });
};

export const teams = team => {
  return axios
    .post('/teams', {
      team: team.team,
    })
    .then(res => {
      console.log('Successful');
    })
    .catch(err => {
      console.log(err);
    });
};

export const rules = rules => {
  return axios
    .post('/rules', {
      title: rules.title,
      texts: rules.texts,
    })
    .then(res => {
      console.log('Successful');
    })
    .catch(err => {
      console.log(err);
    });
};
