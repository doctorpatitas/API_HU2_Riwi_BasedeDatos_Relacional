import Roles from "../models/roles.model.js";
import { seedPermissionsViewer, seedPermissionsAdmin } from "./005.permission.seed.js";

export async function seedRolesTL(){
    const viewerPermission = await seedPermissionsViewer();

    const [tlRole] = await Roles.findOrCreate({
        where: { roles: 'Tl' },
        defaults: { roles: 'Tl', permissions_id: viewerPermission.id }
    });

    return tlRole
}
export async function seedRolesCoder() {
    const viewerPermission = await seedPermissionsViewer();

    const [coderRole] = await Roles.findOrCreate({
        where: { roles: 'Coder' },
        defaults: { roles: 'Coder', permissions_id: viewerPermission.id }
    });

    return coderRole;
}

export async function seedRolesAdmin(){
    const adminPermission = await seedPermissionsAdmin();

    const [adminRole] = await Roles.findOrCreate({
        where: { roles: 'admin' },
        defaults: { roles: 'admin', permissions_id: adminPermission.id }
    });

    return adminRole
}

