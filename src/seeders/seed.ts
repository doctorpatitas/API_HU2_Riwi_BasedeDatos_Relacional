import 'dotenv/config';
import db from '../config/db.js';
import '../models/001.relations.js';
import { seedCityBaq, seedCityMde } from './001.city.seed.js';
import { seedCoursesNode, seedCoursesIA, seedCoursesJava } from './002.courses.seed.js';
import { seedScheludeAM, seedScheludePM } from './003.schelude.seed.js';
import { seedTypeIdentificationTI, seedTypeIdentificationCC, seedTypeIdentificationCE, seedTypeIdentificationPP, seedTypeIdentificationPPT, seedTypeIdentificationPEP } from './004.type-identification.seed.js';
import { seedPermissionsAdmin, seedPermissionsViewer } from './005.permission.seed.js';
import { seedRolesAdmin, seedRolesTL, seedRolesCoder } from './006.roles.seed.js';

async function runSeeders(){
    try {
        await db.authenticate();
        console.log("DB conectada, sembrando datos...");

        await db.sync({ alter: true });

        // City seeding
        const baqSeedingCity = await seedCityBaq();
        const mdeSeedingCity = await seedCityMde();

        // Courses seeding
        const nodeSeedingCourses = await seedCoursesNode();
        const iaSeedingCourses = await seedCoursesIA();
        const javaSeedingCourses = await seedCoursesJava();

        // Schelude seeding
        const amSeedingSchelude = await seedScheludeAM();
        const pmSeedingSchelude = await seedScheludePM();

        // Type Identification seeding
        const tiSeedingTypeId = await seedTypeIdentificationTI();
        const ccSeedingTypeId = await seedTypeIdentificationCC();
        const ceSeedingTypeId = await seedTypeIdentificationCE();
        const ppSeedingTypeId = await seedTypeIdentificationPP();
        const pptSeedingTypeId = await seedTypeIdentificationPPT();
        const pepSeedingTypeId = await seedTypeIdentificationPEP();

        // Permissions seeding
        const adminSeedingPermissions = await seedPermissionsAdmin();
        const viewerSeedingPermissions = await seedPermissionsViewer();

        // Roles seeding
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