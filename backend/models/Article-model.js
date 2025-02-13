const mongoose = require('mongoose');


const sectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

const conclusionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, required: true },
    sections: [sectionSchema],
    conclusion: conclusionSchema
  });

  const Article = mongoose.model('Article', articleSchema);
  module.exports = Article;