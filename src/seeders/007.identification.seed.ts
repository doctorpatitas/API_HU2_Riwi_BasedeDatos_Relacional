
import Identification from "../models/identification.model.js";
import { seedTypeIdentificationCC } from "./004.type-identification.seed.js";

export async function seedIdentificationAdmin() {
    const adminTypeId = await seedTypeIdentificationCC();

    const [adminIdentification] = await Identification.findOrCreate({
        where: { number: '1000000' },
        defaults: { type_identification_id: adminTypeId.id, number: '1000000'}
    });

    return adminIdentification;
}