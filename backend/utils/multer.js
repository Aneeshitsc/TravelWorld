import multer from "multer";

const storage = multer.memoryStorage();  // Use memory storage (to upload to Cloudinary)
const upload = multer({ storage });

export default upload;
