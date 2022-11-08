const db = require('../../models/index')
const bcrypt = require('bcrypt');
let salt = bcrypt.genSaltSync(10);
const checkMail = async (userEmail) => {
    const currentUser = await db.Users.findOne({
        where: {
            email: userEmail
        }
    })
    if (currentUser) {
        return true
    }
    if (!currentUser) {
        return false
    }
}
const hashUserPassword = async (password) => {
    return new Promise((resolve, rejct) => {
        try {
            const hash = bcrypt.hashSync(password, salt);
            resolve(hash)

        } catch (error) {
            rejct(error)
        }
    })
}
const handleCreateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const isEmail = await checkMail(data.email)

            if (isEmail) {
                resolve({
                    errCode: 1,
                    message: 'email already exists in the system !!'
                })
            }
            if (!data.roidId || !data.brandId || !data.firstName || !data.lastName || !data.email || !data.password || !data.address || !data.phone) {
                resolve({
                    errCode: 1,
                    message: 'missing parameter !!'
                })
            }
            else {
                if (!isEmail) {
                    const hashPassword = await hashUserPassword(data.password)
                    await db.Users.create({
                        roidId: data.roidId,
                        brandId: data.brandId,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        password: hashPassword,
                        address: data.address,
                        phone: data.phone,
                        avatar: data.avatar,
                        status: false
                    })
                    resolve({
                        errCode: 0,
                        message: 'Create User success !!'
                    })
                }
            }
        } catch (error) {
            reject(error)
        }
    })
}
// get all user service 
const handleGetAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUser = await db.Users.findAll({
                raw: true
            })
            if (allUser) {
                resolve(allUser)
            }
        } catch (error) {
            reject(error)
        }
    })
}
const serviceLogin = (emailUser, passwordUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            // if (!emailUser || !passwordUser) {
            //     userData.errCode = 0
            //     userData.message = 'missing parameter !!'
            //     resolve(userData)
            // }
            const isExist = await checkMail(emailUser)
            if (isExist) {
                let user = await db.Users.findOne({
                    // attributes: ['email', 'roidId', 'status', 'lastName', 'avatar'],
                    raw: true,
                    where: {
                        email: emailUser
                    }
                })

                if (user) {
                    let check = bcrypt.compareSync(passwordUser, user.password);
                    if (check) {
                        const dbUser = await db.Users
                        await dbUser.update(
                            {
                                status: true,
                            },
                            {
                                where: { email: emailUser },
                            }
                        );

                        resolve({
                            errCode: 0,
                            message: 'Login Success :))',
                            user: {
                                user: user
                            }
                        })
                    } else {
                        resolve({
                            errCode: 1,
                            message: 'wrong password'
                        })
                    }
                } else {
                    resolve({
                        errCode: 2,
                        message: 'User not Found'
                    })
                }
            } else {
                resolve({
                    errCode: 1,
                    message: 'Yours Email is not exist in your system . Plz try other email'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
const logoutService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const dbUser = await db.Users
            const userUd = await dbUser.update(
                {
                    status: false,
                },
                {
                    where: { email: data.email },
                }
            );
            resolve({
                errCode: 0,
                message: 'Logout Success !!'
            })
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    handleCreateUser,
    handleGetAllUser,
    serviceLogin,
    logoutService
}