"use server";

import connector from "@/mongo";
import User from "@/models/User";
export async function profileUpdater(newData) {
  try {
    await connector();

    const email = newData.email;
    if (!email) {
      return { success: false, error: "Email is required" };
    }

    const allowedFields = [
      "coverpic",
      "likes",
      "location",
      "bio",
      "profilePic",
      "name",
      "languages",
    ];
    const updateData = {};

    allowedFields.forEach((field) => {
      if (newData[field] !== undefined) {
        updateData[field] = newData[field];
      }
    });

    const result = await User.updateOne({ email: email }, { $set: updateData });

    if (result.matchedCount === 0) {
      return { success: false, error: "User not found" };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error("Profile update error:", error);
    return { success: false, error: error.message };
  }
}

export async function profileFetcher(username) {
  try {
    await connector();

    const user = await User.findOne({ username }).lean();
    console.log(user);
    if (!user) {
      return { success: false, error: "User not found" };
    }

    return { success: true, data: user.profilePic };
  } catch (error) {
    console.error("Profile fetch error:", error);
    return { success: false, error: error.message };
  }
}

export async function fullProfileFetcher(username) {
  try {
    await connector();

    const user = await User.findOne({ username }).lean();
    console.log(user);

    if (!user) {
      return { success: false, error: "User not found" };
    }

    delete user.password;
    delete user.__v;

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.error("Full profile fetch error:", error);
    return { success: false, error: error.message };
  }
}

export async function fetchUsers() {
  try {
    await connector();

    const users = await User.find().select("-password -__v").lean();
    return JSON.parse(JSON.stringify(users));
  } catch (error) {
    console.error("Fetch users error:", error);
    return { success: false, error: error.message };
  }
}

// export async function findAndTell(username) {
//   try {
//     await connector();
//     const exists = await User.exists({ email: "test@example.com" });
//     return {safeResult:fast};
//   } catch (error) {
//     console.error("Finding users error:", error);
//     return { success: false, error: error.message };
//   }
// }
