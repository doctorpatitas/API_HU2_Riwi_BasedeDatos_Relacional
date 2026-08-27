import Courses from "../models/courses.model.js";

export async function seedCoursesNode() {
    const [nodeCourses] = await Courses.findOrCreate({
        where: { name: 'Node with Nest.js' },
        defaults: { name: 'Node with Nest.js' }
    });

    return nodeCourses;
}

export async function seedCoursesIA() {
    const [iaCourses] = await Courses.findOrCreate({
        where: { name: 'IA' },
        defaults: { name: 'IA' }
    });

    return iaCourses;
}

export async function seedCoursesJava() {
    const [javaCourses] = await Courses.findOrCreate({
        where: { name: 'Java' },
        defaults: { name: 'Java' }
    });

    return javaCourses;
}