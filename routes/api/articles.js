const router = require("express").Router();
const articleController = require("../../controllers/articleController");


// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(articleController.findById)
//   .put(articleController.update)
//   .delete(articleController.remove);

router.route("/saveArticle").post(articleController.save);
router.route("/getSavedArticles").get(articleController.getSavedArticles);
router.route("/deleteSavedArticle").delete(articleController.deleteSavedArticle);

module.exports = router;
