import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { TextField, Button, Box } from '@material-ui/core';

import {ADD_TODO} from "../redux/actions";

export default function TodoAdder() {
    const [title, setTitle] = useState(null);

    function handleTextChange(e) {
        setTitle(e.target.value);
    }

    function addtodoItem(params) {
        // Todo: We need to dispatch the ADD_TODO reduc action here
        // We will com back here once the todo items are listed
    }

    return (
        <Box>
            <TextField style={{
                    width: 400,
                }} label="Add new todo" variant="filled" onChange={handleTextChange}>
            </TextField>
            <Button style={{
                height: 55,
            }} variant="contained" color="primary" onClick={addtodoItem}>
                Add
            </Button>
        </Box>
    );
}