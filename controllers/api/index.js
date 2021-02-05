const router = require('express').Router();

<<<<<<< HEAD
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

=======
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
>>>>>>> aedd7df776c81d1ed4f53249e8b6cff40b4866eb

module.exports = router;