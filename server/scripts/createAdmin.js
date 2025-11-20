const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");
const AdminModel = require('../models/Admin'); // Adjust path if needed

dotenv.config();

// CHANGE THESE VALUES — this will be the login credentials
const adminEmail = 'admin@gmail.com';
const adminPassword = 'Admin123';    // Your actual admin password

mongoose.connect(process.env.Mongo_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(async () => {
        console.log('Connected to MongoDB');

        // Check if admin already exists
        const existingAdmin = await AdminModel.findOne({ email: adminEmail });
        if (existingAdmin) {
            console.log('⚠️ Admin already exists — no changes made');
            mongoose.connection.close();
            process.exit(0);
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(adminPassword, 10);

        // Create admin
        const admin = new AdminModel({
            email: adminEmail,
            password: hashedPassword,
            role: 'admin'
        });

        await admin.save();

        console.log(`
==========================
✅ ADMIN CREATED SUCCESSFULLY
Email: ${adminEmail}
Password: ${adminPassword}
==========================
        `);

        mongoose.connection.close();
        process.exit(0);
    })
    .catch(err => {
        console.error('❌ Error:', err);
        process.exit(1);
    });
