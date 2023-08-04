export const selectContacts = state => state.contacts;

export const selectIsDeleting = state => state.contacts.isDeleting;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
