
import "babel-polyfill";// soporte para IE11
window.$ = window.jQuery = require("jquery"); // Hace jQuery accesible públicamente

import CommentsService from "./CommentsService";
import CommentsListManager from "./CommentsListManager";
import CommentFormManager from "./CommentFormManager";
import PubSub from "pubsub-js";



const commentService = new CommentsService("/comments/");

const commentsListManager = new CommentsListManager(".comments-list", commentService, PubSub);
commentsListManager.init();

const commentFormManager = new CommentFormManager(".comment-form", commentService, PubSub);
commentFormManager.init();

var utilities = require("./utilities.js");




