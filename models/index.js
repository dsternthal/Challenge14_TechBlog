const User = require('./User');
const Post = require('./Post');

//setting the type of relationship
//one to many
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

//linking parent and child toether
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post };
