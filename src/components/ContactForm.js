import React, { useState } from 'react';
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { TextField, Card, Box, Button } from '@mui/material';

const ContactForm = (props) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const initialState = {name:'', phone:'',email:'',photo:''};
    const [newContact, setNewContact] = useState(initialState);
    const inputOnChangeHandler = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setNewContact(values => ({...values, [name]: value}));
    };
    const formOnSubmitHandler = (event) => {
        event.preventDefault();
        props.fnAddContact(newContact);
        setNewContact(initialState);
      };

    return (
        <> <Card variant="outlined" sx={{ p: 2, bgcolor: '#fffde7' }}>
            <form onSubmit={formOnSubmitHandler}>
                <TextField sx={{ pb: 2 }} label="Name*" variant="filled" fullWidth value={newContact.name} name="name" onChange={inputOnChangeHandler} ></TextField>
                <TextField sx={{ pb: 2 }} label="Phone*" variant="filled" fullWidth value={newContact.phone} name="phone" onChange={inputOnChangeHandler}></TextField>
                <TextField sx={{ pb: 2 }} label="Email*" variant="filled" fullWidth value={newContact.email} name="email" onChange={inputOnChangeHandler}></TextField>
                <TextField sx={{ pb: 2 }} label="Photo Url*" variant="filled" fullWidth value={newContact.photo} name="photo" onChange={inputOnChangeHandler}></TextField>
                <Box
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="flex-start">
                    <Button sx={{ alignItems: "flex-start" }} type="submit" variant="text" size="large">
                        ADD NEW
                    </Button>
                </Box>
            </form>
        </Card>
        </>
    );
}

export default ContactForm;