
import express from 'express';
import getUserDetails from '../controllers/getUserDetails.js'

const router = express.Router();

router.get('/get_user_details',getUserDetails);



export default router;