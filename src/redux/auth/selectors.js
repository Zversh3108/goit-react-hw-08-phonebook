export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectLoggedError = state => state.auth.error;

export const selectToken = state => state.auth.token;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUser = state => state.auth.user;

export const selectisLoading = state => state.auth.isLoading;
