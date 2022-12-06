import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../actions/userActions';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from '../components/ListGroupItem';


function HomeScreen() {

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { user } = userDetails;

    const todoDetails = useSelector((state) => state.editTodo)
    console.log("todoDetails", user.todo)

    const getUserData = () => {
        dispatch(getUserProfile())
    };


    return (
        <>
            <Button onClick={getUserData}>Get User Data</Button>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: "70px" }}>
                <ListGroup variant='flush' style={{ width: "30%" }}>
                    {user && Object.keys(user).length !== 0 && user.todo.map((each) => <ListGroupItem key={each._id} todo={each}>{each.title}</ListGroupItem>)}
                </ListGroup>
            </div>
        </>
    );
}

export default HomeScreen;