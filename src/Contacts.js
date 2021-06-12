import React from 'react';
import ContactItem from './ContactItem';
import { getContacts, deleteContact } from './redux/actions/contact-actions';
import { useDispatch, connect } from 'react-redux';

function Contacts({ contacts }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  function deleteCnt(name) {
    dispatch(deleteContact(name));
  }

  return (
    <>
      <div className="row">
        <div className="container">
          <div className="my-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nom</th>
                  <th scope="col">Telephone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts &&
                  contacts.map((contact, key) => (
                    <ContactItem
                      deleteContact={deleteCnt}
                      key={key}
                      contact={contact}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

//variable dans le state
const mapStateToProps = ({ contact: { contacts } }) => ({
  contacts,
});

export default connect(mapStateToProps, null)(Contacts);
