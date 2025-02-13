const Contact = require('../models/contact-model');

// create a new contact

const createContact = async (req, res) => {
    const { name, email, number, message } = req.body;
    try {
        const newcontact = await Contact.create({
            name,
            email,
            number,
            message
        });
        const savedContact = await newcontact.save();
        res.status(201).json({
            message: 'Contact created successfully',
            data: savedContact,
        }
        );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

module.exports = createContact ;