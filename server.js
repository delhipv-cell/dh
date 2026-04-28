const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 👉 Replace with your MongoDB Atlas URL
mongoose.connect("YOUR_MONGODB_URL");

const Lead = mongoose.model("Lead", {
  name: String,
  phone: String,
  status: { type: String, default: "New" }
});

// Create Lead
app.post("/api/lead", async (req, res) => {
  const lead = new Lead(req.body);
  await lead.save();
  res.send({ success: true });
});

// Get Leads
app.get("/api/leads", async (req, res) => {
  const leads = await Lead.find();
  res.send(leads);
});

app.listen(5000, () => console.log("Server running on 5000"));
