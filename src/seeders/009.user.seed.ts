import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import { seedIdentificationAdmin } from './007.identification.seed.js';
import { seedAddressAdmin } from './008.address.seed.js';
import { seedRolesAdmin } from './006.roles.seed.js';

export async function seedUserAdmin() {
    const adminIdentification = await seedIdentificationAdmin();
    const adminAddress = await seedAddressAdmin();
    const adminRol = await seedRolesAdmin();
    const hashedPassword = await bcrypt.hash('admin123', 10);

    const [adminUser] = await User.findOrCreate({
        where: { email: 'admin@riwi.co'},
        defaults: {
            first_name: 'Admin', last_name: 'Riwi', email: 'admin@riwi.co',
            password: hashedPassword, birth_date: '2000-01-01',
            identification_id: adminIdentification.id,
            address_user_id: adminAddress.id,
            role_id: adminRol.id 
        }
    });

    return adminUser;
}