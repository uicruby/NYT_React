/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
let db = require("../models"); // Require all models

/////////////////////////////// /* Methods for Article Controller */ ///////////////////////////////////////////////////
module.exports = {
  // findAll: function(req, res) {
  //   db.Article
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Article
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Article
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Article
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Article
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  save:  function(req, res){
    console.log("Save Article Path hit");
    db.Article.findOne({articleId: req.body.articleId})
    .then(function(response){
      if (response === null) { // Only Create Article if it has not been Created
        db.Article.create(req.body).then((response) => {console.log(response + " Has been Created")
          res.send('Sucessfully Saved!');
        })
        .catch(err => res.json(err));
      } // End if
    })
  },

  getSavedArticles: function(req, res){
    console.log("Get Saved Articles Path hit");
     db.Article
     .find({})
      .sort({ date: -1 })
       .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },

  deleteSavedArticle: function(req, res){
    console.log("Delete Articles Path hit");
    console.log(JSON.stringify(req.body));
    db.Article
    .remove({articleId: req.body.articleId}, (err)=>{
       if (err) throw err;

       console.log("Article Sucessfully Deleted");

       db.Article
         .find({})
          .sort({ date: -1 })
           .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
      })
       .catch(err => res.status(422).json(err));
  }
};
