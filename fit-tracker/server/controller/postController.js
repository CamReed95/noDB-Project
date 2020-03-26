const posts = require('../../db.json')

module.exports = {
    getPosts: (req, res, next) => {
        res.status(200).send(posts)
    },
    addPost: (req, res, next) => {
        const newPost = {
            id: Num,
            todo: req.body.post
        }
        posts.push(newPost)
        num++
        res.status(200).send(posts)
    },
    editPost: (req, res, next) => {
        // write code that will edit a post
        
    },
    deletePost: (req, res, next) => {
        const index = posts.findIndex ((elem) => {
            return elem.id == req.params.id
        })
        posts.splice(index, 1)
    }
}