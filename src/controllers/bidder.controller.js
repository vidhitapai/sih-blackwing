const bidderCreate = require('./../services/bidder.service');

const createBidder = async (req, res) => {
    try {
        let result = await bidderCreate(req);

        if (!result.data) {
            res.status(400).json({ result });
            return;
        }

        res.status(201).json({ result });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

const getBidder = async (req, res) => {
    try {
        let bidder = await Bidder.findById(req.params.id);

        res.status(200).json({
            message: 'Bidder found!',
            data: bidder
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

const updateBidder = async (req, res) => {
    try {
        let updatedBidder = await Bidder.findByIdAndUpdate(req.params.id, req.body);

        res.status(201).json({
            message: 'Bidder updated!',
            data: updatedBidder
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

const deleteBidder = async (req, res) => {
    try {
        let deletedBidder = await Bidder.findByIdAndDelete(req.params.id);

        res.status(201).json({
            message: 'Bidder updated!',
            data: deletedBidder
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

module.exports = {
    createBidder,
    getBidder,
    updateBidder,
    deleteBidder
}