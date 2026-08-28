import Address from "../models/address-user.model.js";
import { seedCityBaq } from "./001.city.seed.js";

export async function seedAddressAdmin() {
    const adminCity = await seedCityBaq();

    const [adminAddress] = await Address.findOrCreate({
        where: { address: 'Calle 45 #20-30' },
        defaults: { city_id: adminCity.id, address: 'Calle 45 #20-30' }
    });

    return adminAddress;
}