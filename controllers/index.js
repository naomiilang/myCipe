const router = require('express').Router();

const apiRoutes = require('./api');
<<<<<<< HEAD
const homeRoutes = require('./home-routes.js');
=======
const homeRoutes = require('./home-routes');
>>>>>>> aedd7df776c81d1ed4f53249e8b6cff40b4866eb

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;