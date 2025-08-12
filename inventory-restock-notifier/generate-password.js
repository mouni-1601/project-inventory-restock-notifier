// Generate bcrypt password hashes for new passwords
const bcrypt = require('bcryptjs');

async function generatePasswordHash(password) {
    const hash = await bcrypt.hash(password, 10);
    console.log(`Password: ${password}`);
    console.log(`Hash: ${hash}`);
    console.log('---');
}

// Generate hashes for your new passwords
async function generateAllHashes() {
    await generatePasswordHash('newpassword123');
    await generatePasswordHash('admin2024');
    await generatePasswordHash('manager123');
    await generatePasswordHash('staff456');
}

generateAllHashes();