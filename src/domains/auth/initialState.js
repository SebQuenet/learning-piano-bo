const initialState = {
  token: localStorage.getItem('token'),
  expirationDate: localStorage.getItem('expirationDate'),
  userId: null,
  isAuth: !!localStorage.getItem('token'),
  role: null,
};

export default initialState;
