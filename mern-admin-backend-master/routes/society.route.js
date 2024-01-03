const express = require("express");
const router = express.Router();
const Society = require("../models/society.model");

// Get all societies
router.get("/", async (req, res) => {
  try {
    const societies = await Society.find();
    res.json(societies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new society
router.post("/", async (req, res) => {
  const society = new Society(req.body);
  try {
    const newSociety = await society.save();
    res.status(201).json(newSociety);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get a single society
router.get("/:id", getSociety, (req, res) => {
  res.json(res.society);
});

// Update a society
router.patch("/:id", getSociety, async (req, res) => {
  try {
    Object.assign(res.society, req.body);
    const updatedSociety = await res.society.save();
    res.json(updatedSociety);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a society
router.delete("/:id", async (req, res) => {
  try {
    const society = await Society.findById(req.params.id);
    if (!society) {
      return res.status(404).json({ message: "Society not found" });
    } else {
      await Society.deleteOne({ _id: req.params.id });
      res.json({ message: "Society deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getSociety(req, res, next) {
  try {
    const society = await Society.findById(req.params.id);
    if (!society) {
      return res.status(404).json({ message: "Society not found" });
    }
    res.society = society;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = router;
