const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const router = express.Router()

const TestModel = require('../../model/Test')()

router.get('/test', (req, res) => {
    const newComment = {
        text: 'Yessssssssssss',
        name: 'Yessssssssssss'
    }

    const newPost = new TestModel({
        name: 'name',
        comments: newComment
    });

    newPost.save().then(post => res.json(post));
})

module.exports = router