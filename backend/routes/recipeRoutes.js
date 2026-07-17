const express = require("express");
const router = express.Router();

const {
    getRecipes,
    addRecipe
} = require("../controllers/recipeController");

// Get all recipes
router.get("/", getRecipes);

// Add recipe
router.post("/", addRecipe);

module.exports = router;