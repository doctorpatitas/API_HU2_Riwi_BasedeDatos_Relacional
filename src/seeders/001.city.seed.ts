import City from "../models/city.model.js";

export async function seedCityBaq() {
    const [baqCity] = await City.findOrCreate({
        where: { code_name: 'BAQ' },
        defaults: { name: 'Barranquilla', code_name: 'BAQ' }
    })

    return baqCity;
}

export async function seedCityMde() {
    const [mdeCity] = await City.findOrCreate({
        where: { code_name: 'MDE' },
        defaults: { name: 'Medellín', code_name: 'MDE' }
    })

    return mdeCity;
}