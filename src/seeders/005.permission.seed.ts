import Permissions from "../models/permissions.model.js"

export async function seedPermissionsAdmin() {
    const [adminPermissions] = await Permissions.findOrCreate({
        where: { permission: 'admin' },
        defaults: { permission: 'admin' }
    });

    return adminPermissions;
}

export async function seedPermissionsViewer() {
    const [viewerPermissions] = await Permissions.findOrCreate({
        where: { permission: 'viewer' },
        defaults: { permission: 'viewer' }
    });

    return viewerPermissions;
}