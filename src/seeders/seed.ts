import 'dotenv/config';
import db from '../config/db.js';
import '../models/001.relations.js'
import { seedAdminPermissions } from './001.permission.seed.js';
import { seedViewerPermissions } from './001.permission.seed.js';
import { seedRolesAdmin } from './006.roles.seed.js';
import { seedRolesTL } from './006.roles.seed.js';
import { seedRolesCoder } from './006.roles.seed.js';

async function runSeeders(){
    try {
        await db.authenticate();
        console.log("DB conectada, sembrando datos...");

        await db.sync({ alter: true });

        const adminSeedingPermissions = await seedAdminPermissions();
        const viewerSeedingPermissions = await seedViewerPermissions();

        const adminSeedingRoles = await seedRolesAdmin();
        const tlSeedingRoles =  await seedRolesTL();
        const coderSeedingRoles = await seedRolesCoder();

        console.log("Seed completed")
    } catch (error) {
        console.log("Error seeding data:", error);
    } finally {
        await db.close();
    }
}

runSeeders();