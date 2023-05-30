import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup, ListItem } from '@material-ui/core';



export default function TodoItem({ id, title, completed, important }) {

    function toggleCheckBox(params) {
        // Need to dispatch toggle action
    }

    return (<ListItem dense>
        <FormGroup>
            <FormControlLabel control={
                <Checkbox 
                checked={completed} 
                onChange={toggleCheckBox}
                id={title} 
                color="primary" 
                />
            }
            label={title}
            >
            </FormControlLabel>
        </FormGroup>
    </ListItem>
    );
}