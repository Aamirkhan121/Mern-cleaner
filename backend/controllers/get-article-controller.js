const Article = require('../models/Article-model');

exports.getArticle = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json({success:true, count: articles.length, data: articles });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error while fetching posts",
          });
    }
}

exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({
                success: false,
                message: "Article not found",
              });
        }
        res.status(200).json({success:true, data: article });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error while fetching post",
          });
    }
}