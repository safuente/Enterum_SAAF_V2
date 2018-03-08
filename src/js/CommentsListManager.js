import UIManager from './UIManager';
const $ = require("jquery");


    

export default class CommentsListManager extends UIManager {
    
    
    constructor(elementSelector, commentsService, pubSub) {
        super(elementSelector); // llamada al constructor de la clase UIManager
        this.commentsService = commentsService;
        this.pubSub = pubSub;
    }
    
   
    init() {
        
        //this.loadComments();
        let self = this;
        
        this.pubSub.subscribe("new-comment", (topic, comment) => {
            this.loadComments();
        });
    }
    navSlide() {
        var $nav_header    = $('#comments')
        var scroll_top = $(window).scrollTop();
      
        if (scroll_top >= offset_val) { // the detection!
          $nav_header.addClass('is-sticky');
        } else {
          $nav_header.removeClass('is-sticky');
        }
      }


    renderComments(comments) {
        let html = "";
        for (let comment of comments) {
            html += this.renderComment(comment);
        }
        // Metemos el HTML en el div de los comments
        this.setIdealHtml(html);
    }

   

    loadComments() {
        this.commentsService.list(comments => {
            // Se añade el número de comentarios a cada articulo
            var x = document.getElementsByClassName("comments-number");
            var elmnt = document.getElementById("comments");
            for (var i= 0; i<x.length; i++){
                x[i].innerHTML = comments.length+" comments";
            }
            // Comprobamos si hay comentarios
           
            if (comments.length == 0 ) {
                // Mostramos el estado vacío
                this.setEmpty();
            } else {
                this.renderComments(comments);
                
                 
               
                  
                  }
                   
               
           
  
           
              
               
                
                
                
                    
              
                
                   
                
       
                    
                    
                 
                        
                  
                           
                          
                          
                     
                      //when rich top of boxex than fire
                      
                  
               
            
                            
                        
                    
               
                    
                    // Quitamos el mensaje de cargando y mostramos la lista de comentarios
                    
                
            
        }, error => {
            // Mostrar el estado de error
            this.setError();
            // Hacemos log del error en la consola
            console.error("Error loading the comments", error);
        });
    }

  

    renderComment(comment) {
        let srcset = 'srcset="img/user_icon-150px.png 150w, img/user_icon-250px.png 250w, img/user_icon-300px.png 300w"'
        return `<article class="article-body " data-id="${comment.id}">
        <div class="id"><h2><b>Comment#${comment.id}</b></h2></div>
                <div class="commentary-list"> 
                
                <div class="profile">
                    <div> <img src="img/user_icon-150px.png" alt="User icon" class="user""${srcset}></div>
                    <div>
                        <div class="name surname"><b>${comment.name} ${comment.surname}</b></div>
                        
                    </div>
                    <div class="email">${comment.email}</div>
                </div>
                <div class="commentary"> ${comment.commentary}</div>
                </div>
            </article>`;
    }

    deleteComment(commentId) {
        this.setLoading();
        this.commentsService.delete(commentId, success => {
            this.loadComments();
        }, error => {
            this.setError();
        })
    }

}