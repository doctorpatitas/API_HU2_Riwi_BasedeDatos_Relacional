import Schelude from "../models/schelude.model.js";

export async function seedScheludeAM() {
    const [amSchelude] = await Schelude.findOrCreate({
        where: { shift: 'AM'},
        defaults: { shift: 'AM', start_time: '06:00:00', end_time: '12:00:00'}
    });

    return amSchelude;
}

export async function seedScheludePM() {
    const [pmSchelude] = await Schelude.findOrCreate({
        where: { shift: 'PM' },
        defaults: { shift: 'PM', start_time: '13:00:00', end_time: '21:00:00'}
    });

    return pmSchelude;
}