import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import data from '../db.json';

export function getPosts(){
    console.log('dispatcher get post')
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_POSTS,
        posts: data["posts"],
    });
};