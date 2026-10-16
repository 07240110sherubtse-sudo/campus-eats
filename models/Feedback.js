const { getDb } = require('../config/mongo');

exports.createFeedback = async (data) => {
    const db = getDb();

    const feedback = {
        restaurantId: Number(data.restaurantId),
        customerName: data.customerName,
        rating: Number(data.rating),
        comment: data.comment || '',
        createdAt: new Date()
    };

    const result = await db.collection('feedback').insertOne(feedback);

    return {
        _id: result.insertedId,
        ...feedback
    };
};

exports.getFeedbackForRestaurant = async (restaurantId) => {
    const db = getDb();

    return await db.collection('feedback')
        .find({ restaurantId: Number(restaurantId) })
        .sort({ createdAt: -1 })
        .toArray();
};