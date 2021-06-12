export const getContacts = () => {
  const contacts = JSON.parse(localStorage.getItem('contacts'));
  return (dispatch) => {
    dispatch({
      type: 'GET_CONTACT',
      payload: contacts,
    });
  };
};

export const addContacts = (contact) => {
  const updatedcontacts = JSON.parse(localStorage.getItem('contacts')) || [];
  updatedcontacts.push(contact);
  localStorage.setItem('contacts', JSON.stringify(updatedcontacts));
  return (dispatch) => {
    dispatch({
      type: 'ADD_CONTACT',
      payload: updatedcontacts,
    });
  };
};

export const deleteContact = (name) => {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

  let updatedcontacts = contacts.filter((contact) => contact.name !== name);
  localStorage.setItem('contacts', JSON.stringify(updatedcontacts));
  return (dispatch) => {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: updatedcontacts,
    });
  };
};
