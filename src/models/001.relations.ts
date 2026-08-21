import Clan from './clan.model.js';
import Courses from './courses.model.js';
import Room from './room.model.js';
import Campus from './campus.model.js';
import Schelude from './schelude.model.js';
import User from './user.model.js';
import CoderClan from './coder-clan.model.js';
import Address from './address-user.model.js';
import Identification from './identification.model.js';
import Roles from './roles.model.js';
import TypeIdentification from './type-identification.js';
import City from './city.model.js';

/////////////////////////////////////////////////////////////////
// Address Relations
// Relation between Address and City
Address.belongsTo(City, { foreignKey: 'city_id' });
City.hasMany(Address, { foreignKey: 'city_id' });

/////////////////////////////////////////////////////////////////
// User Relations
// Relation between User and Address
User.belongsTo(Address, { foreignKey: 'address_user_id' });
Address.hasOne(User, { foreignKey: 'address_user_id' });

// Relation between User and Identification
User.belongsTo(Identification, { foreignKey: 'identification_id' });
Identification.hasOne(User, { foreignKey: 'identification_id' });

//Relation between User and Role
User.belongsTo(Roles, { foreignKey: 'role_id' });
Roles.hasMany(User, { foreignKey: 'role_id' });


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


/////////////////////////////////////////////////////////////////
// Room relations
// Rlation between Room and Campus
Room.belongsTo(Campus, { foreignKey: 'campus_id' });
Campus.hasMany(Room, { foreignKey: 'campus_id' });


/////////////////////////////////////////////////////////////////
// Coder_Clan relations
// Relation between Coder_clan and Clan
CoderClan.belongsTo(Clan, { foreignKey: 'clan_id' });
Clan.hasMany(CoderClan, { foreignKey: 'clan_id' });

// Relation between Coder_clan and User
CoderClan.belongsTo(User, { foreignKey: 'coder_id' });
User.hasMany(CoderClan, { foreignKey: 'coder_id' });


/////////////////////////////////////////////////////////////////
// Campus relations
// Relation between Campus and City
Campus.belongsTo(City, { foreignKey: 'city_id' });
City.hasMany(Campus, { foreignKey: 'city_id' });


/////////////////////////////////////////////////////////////////
// Identification relations
// Relation between Identification and TypeIdentification;
Identification.belongsTo(TypeIdentification, { foreignKey: 'type_identification_id' });
TypeIdentification.hasMany(Identification, { foreignKey: 'type_identification_id' });