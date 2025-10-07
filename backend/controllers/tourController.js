const Tour = require("../models/tours");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const createTour = async (req, res) => {
  console.log("hello")
  try {
    // 1. Upload image to Cloudinary
    let imageUrl = "";
    if (req.file) {
      const streamUpload = (fileBuffer) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream((error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          });
          streamifier.createReadStream(fileBuffer).pipe(stream);
        });
      };

      const result = await streamUpload(req.file.buffer);
      imageUrl = result.secure_url;
    }

    // 2. Extract fields from form-data
    const {
      name,
      category,
      price,
      groupCount,
      languages,
      duration,
      cities,
      description,
      introduction,
    } = req.body;

    // 3. Create tour object
    const newTour = new Tour({
      name,
      category,
      price,
      groupCount,
      languages,
      duration,
      cities,
      description,
      introduction,
      img: imageUrl, // saved Cloudinary URL
    });

    const savedTour = await newTour.save();

    res.status(200).json({
      status: "Success",
      message: "Tour added successfully",
      data: {
        tour: savedTour,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

//getAll tour list
const getAllTours = async (req, res) => {
  try {
    const allTours = await Tour.find();
    res.status(200).send(allTours);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "unsuccess",
      message: err.message,
    });
  }
};

//find tour by id

const getToursByName = async (req, res) => {
  try {
    const name = req.params.name;

    // Find all tours with the given name (case-insensitive match)
    const tours = await Tour.find({ name: { $regex: new RegExp(`^${name}$`, "i") } });

    if (tours.length === 0) {
      return res.status(404).json({
        status: "Not Found",
        message: `No tours found with name: ${name}`,
      });
    }

    res.status(200).json({
      status: "Success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: "Error",
      message: err.message,
    });
  }
};

const getTour = async (req, res) => {
  try {
    const uID = req.params.id;

    const oneTour = await Tour.findById(uID);
    res.status(200).json({
      status: "Success",
      data: {
        oneTour,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "unsuccess",
      message: err.message,
    });
  }
};

//update a tour
const updateTour = async (req, res) => {
  try {
    const uID = req.params.id;
    const updatedTour = await Tour.findByIdAndUpdate(uID, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "Success",
      data: {
        tour: updatedTour,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "unsuccess",
      message: err.message,
    });
  }
};

//delete a tour
const deleteTour = async (req, res) => {
  try {
    const UID = req.params.id;
    const deletedTour = await Tour.findByIdAndDelete(UID);

    res.status(204).json({
      status: "Success",
      data: {
        old: deletedTour,
        tour: "Null",
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "unsuccess",
      message: err.message,
    });
  }
};

module.exports = {
  createTour,
  updateTour,
  getAllTours,
  getTour,
  deleteTour,
  getToursByName,
};
