const User = require('../models/User');
const Thought = require('../models/Thought');

const getAllThoughts = (req, res) => {
    Thought.find({})
    .then((thoughts) => {
        res.json(thoughts);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
}

const getThoughtById = (req, res) => {
    Thought.findOne({ _id: req.params.id })
    .then((thought) => {
        if (!thought) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.json(thought);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
}

const createThought = (req, res) => {
    Thought.create(req.body)
        .then((thought) => {
            console.log(thought);
            User.findOneAndUpdate(
                { username: thought.username },
                { $push: { thoughts: thought._id } },
                { new: true }
                )
                .then((user) => {
                    console.log(user);
                    if (!user) {
                        res.status(404).json({ message: 'Cannot create thought no user with that username was found' });
                        return;
                    }
                    res.json(thought);
                })
                .catch((err) => {
                    res.json(err);
                });
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

const updateThought = (req, res) => {
    Thought.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((thought) => {
        if (!thought) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.json(thought);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
}

const deleteThought = (req, res) => {
    Thought.findOneAndDelete({ _id: req.params.id })
    .then((thought) => {
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        res.json(thought);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
}

const addReaction = (req, res) => {
    Thought.create(req.body)
        .then((thought) => {
                Thought.findOneAndUpdate(
                    { _id: req.params.thoughtId },
                    { $push: { reactions: thought._id } },
                    { new: true }
                    )
                    .then((thought) => {
                        if (!thought) {
                            res.status(404).json({ message: 'No thought found with this id!' });
                            return;
                        }
                        res.json(thought);
                    })
                    .catch((err) => {
                        res.status(400).json(err);
                    });
        })
}

const removeReaction = (req, res) => {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: req.params.reactionId } },
        { new: true }
    )
    .then((thought) => {
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        res.json(thought);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
}

module.exports = {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
}