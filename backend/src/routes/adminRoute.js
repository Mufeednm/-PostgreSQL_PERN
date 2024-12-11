import express from 'express';
import { login } from '../controllers/authcontrollers.js';
import { addcustomer, allcustomers } from '../controllers/admincontroller.js';

const router = express.Router();


router.post('/addcustomer',addcustomer); // add customers
router.get('/allcustomers',allcustomers); // add customers
export default router;
