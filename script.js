// Copyright (c) 2022 Olantu All rights reserved.

// Created by: Olantu
// Created on: May 2022

// This file contains the JS functions for index.html

"use strict";

// This function displays Movie rating checker
function checkMovieRating() {
  var ageInput = document.getElementById("age");
  var resultDiv = document.getElementById("result");

  var age = ageInput.value.trim();

  // Validate user input
  if (age === "") {
    resultDiv.innerText = "Please input your age.";
    return;
  }

  age = parseFloat(age);

  if (isNaN(age) || age < 0 || !Number.isInteger(age)) {
    resultDiv.innerText = "Invalid age entered. Please try again.";
    return;
  }

  var rating = "";
  if (age >= 18) {
    rating = "You can watch movies with an '18A' or 'R' rating alone.";
  } else if (age >= 14) {
    rating = "You can watch movies with a 14A or PG-13 rating alone.";
  } else if (age >= 13) {
    rating = "You can watch PG rated movies alone.";
  } else if (age >= 0) {
    rating = "You can watch G rated movies alone.";
  } else {
    rating = "Invalid age entered. Please try again.";
  }

  resultDiv.innerText = rating;
}