import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { TextField, Button, Box } from '@material-ui/core';

import {ADD_TODO} from "../redux/actions";

export default function TodoAdder() {
    const [title, setTitle] = useState(null);
    const dispatch = useDispatch();

    function handleTextChange(e) {
        setTitle(e.target.value);
    }

    function addTodoItem(params) {
        // Need to dispatch the ADD_TODO reduc action here
        // Do after todo items are listed
        dispatch({
            type: ADD_TODO, 
            payload: {
                title, 
            }, 
        });
        setTitle(null)
    }

    return (
        <Box>
            <TextField style={{
                    width: 400,
                }} label="Add new todo" 
                   variant="filled" 
                   onChange={handleTextChange}>
            </TextField>
            <Button style={{
                height: 55,
            }} variant="contained" 
               color="primary" 
               onClick={addTodoItem}>
                Add
            </Button>
        </Box>
    );
}