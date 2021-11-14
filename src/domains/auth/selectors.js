export const isAuth = (state) => state.auth.isAuth;
export const getToken = (state) => state.auth.token;
export const getUserRole = (state) => state.auth.userRole;
export const getAuthProfile = (state) => state.auth;
export const getAdmin = (state) => state.auth.admin;
export const isFavoriteSpace = (state, props) =>
  state.auth?.admin?.favoriteSpaces?.find((spaceId) => spaceId === props.space?.id);
export const getFavoriteSpaces = (state, props) => state.auth?.admin?.favoriteSpaces;
export const getPoliciesForAdmin = (state) => state.auth?.admin?.policies;
