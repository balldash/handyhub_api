const express = require("express");
const router = express.Router();
const offerController = require("../controllers/offer.controller");
const { authenticate } = require("../middlewares/auth.middleware");

router.post("/", authenticate, offerController.createOffer);
router.get("/", authenticate, offerController.getAllOffers);
router.get("/:id", authenticate, offerController.getOfferById);
router.put("/:id", authenticate, offerController.updateOfferById);
router.delete("/:id", authenticate, offerController.deleteOfferById);

module.exports = router;
