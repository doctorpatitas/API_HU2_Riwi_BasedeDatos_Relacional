import Roles from "../models/roles.model.js";
import { seedViewerPermissions, seedAdminPermissions } from "./001.permission.seed.js";

export async function seedRolesTL(){
    const viewerPermission = await seedViewerPermissions();

    const [tlRole] = await Roles.findOrCreate({
        where: {roles: 'Tl'},
        defaults: {roles: 'Tl', permissions_id: viewerPermission.id}
    });

    return tlRole
}
export async function seedRolesCoder() {
    const viewerPermission = await seedViewerPermissions();

    const [coderRole] = await Roles.findOrCreate({
        where: {roles: 'Coder'},
        defaults: {roles: 'Coder', permissions_id: viewerPermission.id}
    });

    return coderRole;
}

export async function seedRolesAdmin(){
    const adminPermission = await seedAdminPermissions();

    const [adminRole] = await Roles.findOrCreate({
        where: {roles: 'admin'},
        defaults: {roles: 'admin', permissions_id: adminPermission.id}
    });

    return adminRole
}

