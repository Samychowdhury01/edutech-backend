import { User } from './user.model';

const getAllUserActivitiesFromDB = async () => {
  // total number of users in the database
  const totalUsers = await User.find({}).countDocuments();
  // total number of users who have logged in
  const totalLoggedInUsers = await User.find({
    isLoggedIn: { $ne: false },
  }).sort({ updatedAt: -1 });

  return {
    totalUsers,
    totalLoggedInUsers: totalLoggedInUsers.length,
    recentlyLoggedInUsers: totalLoggedInUsers.slice(0, 5),
  };
};

export const UserService = {
  getAllUserActivitiesFromDB,
};