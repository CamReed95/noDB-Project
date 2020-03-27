const posts = require('../../src/db.json')

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
        const index = posts.findIndex((elem) => {
            return elem.id == req.params.id
        })
        posts[index].post = req.body.post
        res.status(200).send(posts)
    },
    deletePost: (req, res, next) => {
        const index = posts.findIndex ((elem) => {
            return elem.id == req.params.id
        })
        posts.splice(index, 1)
    }
}