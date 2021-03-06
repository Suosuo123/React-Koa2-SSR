import { User } from '../models'

/**
 * 注册用户
 */
export async function createUser(userData) {
  // 保存
  return await User.create(userData)
}

/**
 * 根据用户id列表查找用户分享appid
 */
export async function getInitShareData(uid) {
  const user = await User.findOne({ uid }, 'shareData', { lean: true }).exec()

  return user.shareData
}

/**
 * 根据用户id查找用户
 */
export async function getUserDataByUserId(uid) {
  const user = await User.findOne({ uid }, { _id: 0, __v: 0 }, { lean: true }).exec()

  return user
}

/**
 * 根据用户Email查找用户
 */
export async function getUserDataByEmail(email) {
  const user = await User.findOne({ email }, { _id: 0, __v: 0 }, { lean: true }).exec()

  return user
}

/**
 * 根据用户phone查找用户
 */
export async function getUserDataByPhone(phone) {
  const user = await User.findOne({ phone }, { _id: 0, __v: 0 }, { lean: true }).exec()

  return user
}

/**
 * 根据用户id查找用户分享appid列表
 */
export async function checkUser(query) {
  const user = await User.findOne({ email: query.email }).exec()

  return user
}
