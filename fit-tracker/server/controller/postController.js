const posts = require('../../src/db.json')

let num = 4

module.exports = {
    getPosts: (req, res, next) => {
        res.status(200).send(posts)
    },
    addPost: (req, res, next) => {
        console.log(req.body)
        const newPost = {
            id: num,
            post: req.body.post
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