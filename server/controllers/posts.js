import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPosts = async (req, res) => {
    const post = req.body
    const newPosts = new PostMessage(post)
    try {
        await newPosts.save()
        res.status(200).json(newPosts)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}