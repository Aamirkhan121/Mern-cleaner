const Article = require('../models/Article-model');


// create a new article

const createArticle = async (req, res) => {
 const { title, subtitle, description, author,image, date, sections, conclusion } = req.body;
   try {
       const newarticle = await Article.create({
           title,
           subtitle,
           description,
              image,
           author,
           date,
           sections,
           conclusion
       });
       const savedArticle = await newarticle.save();
       res.status(201).json({
        message: 'Article created successfully',
        data: savedArticle,
    }
       );
   } catch (error) {
       res.status(500).json({ message: error.message });
   }

}

module.exports = createArticle ;