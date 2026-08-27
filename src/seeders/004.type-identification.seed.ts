import TypeIdentification from "../models/type-identification.model.js";

export async function seedTypeIdentificationTI() {
    const [tiTypeId] = await TypeIdentification.findOrCreate({
        where: { code_name: 'TI' },
        defaults: { name: 'Tarjeta de Identidad', code_name: 'TI' }
    });

    return tiTypeId;
}

export async function seedTypeIdentificationCC() {
    const [ccTypeId] = await TypeIdentification.findOrCreate({
        where: { code_name: 'CC' },
        defaults: { name: 'Cedula de Ciudadanía', code_name: 'CC' }
    });

    return ccTypeId;
}

export async function seedTypeIdentificationCE() {
    const [ceTypeId] = await TypeIdentification.findOrCreate({
        where: { code_name: 'CE' },
        defaults: { name: 'Cedula de Extranjería', code_name: 'CE' }
    });

    return ceTypeId;
}

export async function seedTypeIdentificationPP() {
    const [ppTypeId] = await TypeIdentification.findOrCreate({
        where: { code_name: 'PP' },
        defaults: { name: 'Pasaporte', code_name: 'PP' }
    });

    return ppTypeId;
}

export async function seedTypeIdentificationPPT() {
    const [pptTypeId] = await TypeIdentification.findOrCreate({
        where: { code_name: 'PPT' },
        defaults: { name: 'Permiso por Protección Temporal', code_name: 'PPT' }
    });

    return pptTypeId;
}

export async function seedTypeIdentificationPEP() {
    const [pepTypeId] = await TypeIdentification.findOrCreate({
        where: { code_name: 'PEP' },
        defaults: { name: 'Permiso Especial de Permanencia', code_name: 'PEP' }
    });

    return pepTypeId;
}