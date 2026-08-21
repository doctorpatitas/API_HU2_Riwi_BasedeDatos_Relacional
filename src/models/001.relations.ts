import Clan from './clan.model.js';
import Courses from './courses.model.js';
import Room from './room.model.js';
import Campus from './campus.model.js';
import Schelude from './schelude.model.js';
import User from './user.model.js';

/////////////////////////////////////////////////////////////////
// Clan relations
// Relation between Clan and Routes
Clan.belongsTo(Courses, { foreignKey: 'course_id' });
Courses.hasMany(Clan, { foreignKey: 'course_id' });

// Relation between Clan and Room
Clan.belongsTo(Room, { foreignKey: 'room_id' });
Room.hasMany(Clan, { foreignKey: 'room_id' });

// Relation between Clan and Schelude
Clan.belongsTo(Schelude, { foreignKey: 'schelude_id' });
Schelude.hasMany(Clan, { foreignKey: 'schelude_id' });

// Relation between Clan and User
Clan.belongsTo(User, { foreignKey: 'tl_id' });
User.hasOne(Clan, { foreignKey: 'tl_id' });

// Room relations
// Rlation between Room and Campus
Room.belongsTo(Campus, { foreignKey: 'campus_id' });
Campus.hasMany(Room, { foreignKey: 'campus_id' });
