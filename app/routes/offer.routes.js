const express = require("express");
const router = express.Router();
const offerController = require("../controllers/offer.controller");

// Create a new offer
router.post("/", offerController.createOffer);

// Get all offers
router.get("/", offerController.getAllOffers);

// Get offer by ID
router.get("/:id", offerController.getOfferById);

// Update offer by ID
router.put("/:id", offerController.updateOfferById);

// Delete offer by ID
router.delete("/:id", offerController.deleteOfferById);

module.exports = router;
