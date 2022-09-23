// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
            <ListItem alignItems="flex-start" key={data.email}>
                <ListItemAvatar>
                    {/* Avatar list */}
                    <Avatar src={data.photo} sx={{ width: 56, height: 56 }} />
                </ListItemAvatar>
                {/* Menampilkan text pada list */}
                <ListItemText sx={{ pl: 2 }} primary={data.name}
                    secondary={
                        <>
                            {data.phone}
                            <br></br>
                            {data.email}
                        </>
                    } />
            </ListItem>
            {/* Membuat divider antar list */}
            <Divider variant="middle" />
        </>);
};

export default Contact;
