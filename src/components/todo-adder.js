import React from 'react'

import { TextField, Button, Box } from '@material-ui/core'

export default function TodoAdder() {
    return (
        <Box>
            <Button variant="contained" color="primary">
                <TextField label="Add new todo" variant="filled">
                    Add                
                </TextField>
            </Button>
        </Box>
    );
}