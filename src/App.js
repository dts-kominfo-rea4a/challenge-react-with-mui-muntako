import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import { Grid, List } from '@mui/material';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contactList, setContactList] = useState(contactsJSON);
  const addContact = (newContact) => {
    // Logic untuk membuat contact baru
    const objContact = {
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email,
      photo: newContact.photo
    };

    const newContacts = [...contactList, objContact];
    setContactList(newContacts);
  };

  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Membagi halaman menjadi 2 secara horizontal */}
      <Grid container>
        {/* Pada bagian kiri menampilkan contact form */}
        <Grid item xs={6} md={6} sx={{ p: 6, pr:20 }}>
          <ContactForm fnAddContact={addContact} />
        </Grid>
        {/* Pada bagian kiri menampilkan daftar contact */}
        <Grid item xs={6} md={6} sx={{ pt: 6 }}>
          {<>
            <List sx={{ width: '100%', maxWidth: 560, bgcolor: '#e0f2f1' }}>
              {/* Menampilkan jumlah contact sesuai data */}
              {contactList.map((data) => (
                <Contact data={data} />
              ))
              }
            </List>
          </>
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
