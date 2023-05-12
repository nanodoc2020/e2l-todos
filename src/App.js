import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { Box, AppBar, Toolbar, IconButton, Typography, Paper } from "@material-ui/core";
import TodoAdder from "./components/todo-adder";
import TodosContainer from "./components/todos-container";


const useStyles = makeStyles((theme) => ({
  root: {},
  appContainer:{
    paddingLeft: 100, 
    paddingRight: 100,
    marginTop: 100, 
  }, 

  wrapper: {
    textAlign: "center", 
    width: "100%", 
  }
}));


export default function E2LTodos() {
  const classes = useStyles();


  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <img alt="E2L Todos logo" 
              style={{
              width: "50px", 
              }} 
              src="stabby.jpg">
            </img>
          </IconButton>
        <Typography variant="h5">Todos</Typography>
      </Toolbar>
    </AppBar>

    <Container className={classes.appContainer}>
      <Paper className={classes.wrapper} elevation={0}>
        {/* A component to add Todos - "TodoAdder" */}
        <TodoAdder />


        {/* The container area to display all todos - "TodosContainer" */}
        <TodosContainer />


      </Paper>
    </Container>
  </Box>
  );
}

