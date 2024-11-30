const router = require('express').Router();
const User = require("../models/user");

// Reading all users
router.get('/', async (req, res) => {
    User.find()
        .then(users => {
            res.json(users);
        })
        .catch(error => {
            res.status(500).json({ message: "An error occurred", error: error.message });
        });
});

// Reading one user
router.get('/:id', getUser, (req, res) => {
    res.json(req.user);
});

// Create user
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        course: req.body.course,
    });

    user.save()
        .then(newUser => {
            res.status(201).json(newUser);
        })
        .catch(error => {
            res.status(400).json({ message: "An error occurred", error: error.message });
        });
});

// Update user
router.patch('/:id', getUser, (req, res) => {
    if(req.body.name != null){
        req.user.name = req.body.name;
    }
    if(req.body.course != null){
        req.user.course = req.body.course;
    }
    req.user.save()
    .then(updatedUser => {
        res.json(updatedUser);
    })
    .catch(error => {
        res.status(400).json({ message: "An error occurred", error: error.message });
    });
});

// Delete user
router.delete('/:id', getUser, (req, res) => {
    if (!req.user) {
        return res.status(404).json({ message: "User not found" });
    }

    User.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json({ message: "User deleted" });
        })
        .catch(error => {
            res.status(500).json({ message: "An error occurred", error: error.message });
        });
});

// Middleware to find user
function getUser(req, res, next) {
    User.findById(req.params.id)
        .then(user => {
            if (user == null) {
                return res.status(404).json({ message: "User not found" });
            }
            req.user = user;
            next();
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
}

module.exports = router;
