const express = require('express');
const router = express.Router();

const mealsJson = require(__dirname + '/../data/meals.json');
const reviewsJson = require(__dirname + '/../data/reviews.json');

const largeMealsArray = mealsJson.filter(
   (largeMeals) => largeMeals.maxNumberOfGuests >= 5
);
largeMealsArray.forEach((meal) => {
   meal.review = [];
   reviewsJson.forEach((mealreview) => {
      if (mealreview.mealId === meal.id) {
         meal.review.push(mealreview);
      }
   });
});

router.get('/large-meals', (request, response) => {
   response.send(largeMealsArray);
});

module.exports = router;
