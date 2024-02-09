const { Router } = require('express');
const router = Router();

const { 
    registerUser, 
    loginUser, 
    getCurrentUser } = require('../controllers/userController');
    
const { protect } = require('../middlewares/authMiddleware');

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/current', protect, getCurrentUser);

module.exports = router;