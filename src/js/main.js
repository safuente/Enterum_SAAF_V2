
import "babel-polyfill";// soporte para IE11
window.$ = window.jQuery = require("jquery"); // Hace jQuery accesible públicamente

import CommentsService from "./CommentsService";
import CommentsListManager from "./CommentsListManager";
import CommentFormManager from "./CommentFormManager";
import PubSub from "pubsub-js";



const commentService = new CommentsService("/comments/");

const commentsListManager = new CommentsListManager(".comments-list", commentService, PubSub);
commentsListManager.init();


$(window).on('scroll', function () {
    var scrollTop     = $(window).scrollTop(),
        elementOffset = $('#comments').offset().top,
        distance      = (elementOffset - scrollTop);
    var $comments    = $('.comments-list')
    
    if (distance <= 700 && window.innerHeight>=1024) {
        $comments.removeClass('loading');
        $comments.addClass('ideal');
        

    } 
    else if (distance <= 300)  {
        $comments.removeClass('loading');
        $comments.addClass('ideal');
        commentsListManager.loadComments()
        $(window).off('scroll');
    }
    
   
  });
           



const commentFormManager = new CommentFormManager(".comment-form", commentService, PubSub);
commentFormManager.init();

var utilities = require("./utilities.js");




