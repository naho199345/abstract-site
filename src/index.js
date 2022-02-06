class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].name === board.name) {
                throw new Error('중복')
            }
        }

        board.isName = true;
        this.boards.push(board);
    }

    findBoardByName(board) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].name === board) {
                return this.boards[i];
            }
        }
    }
}

class Board {
    constructor(name) {
        if (name === "" || name === null || !name) {
            throw new Error('no')
        } else {
            this.name = name;
            this.isName = false;
            this.article = [];
        }
    }
    publish(article) {
        if (this.isName) {
            article.id = `${this.name}-${Math.random()}`
            article.createdDate = `${this.name}-${new Date().toISOString()}`
            article.iscomment=true;
            this.article.push(article);
        } else if (this.isName === false) {
            throw new Error("no");
        }
    }
    getAllArticles() {
        return this.article;
    }
}
 
class Article {
    constructor(article) {
        if (!article.subject || !article.content || !article.author) {
            throw new Error('no')
        } else {
            this.comment = [];
            this.article=article
            this.iscomment=false;
        }

    }
    reply(comment) {
        if(this.iscomment){
            comment.createdDate = `${this.name}-${new Date().toISOString()}`
            this.comment.push(comment)
        } else if(this.iscomment===false){
            throw new Error('no')
        }

    }
    getAllComments() {
        return this.comment
    }
}

class Comment {
    constructor(comment) {
        if(!comment.content || !comment.author){
           throw new Error('no')
        } else{
            this.comment=comment
        }
    }
}


module.exports = {
    Site,
    Board,
    Article,
    Comment,
};

















