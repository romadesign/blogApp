import jwt from 'jsonwebtoken'

export const generateActiveToken = (payload: object) => {
    return jwt.sign(payload, `${process.env.ACTIVE_TOKEN_SECRET}`, {expiresIn: '5M'} )
}

export const generateAccessToken = (payload: object) => {
    return jwt.sign(payload, `${process.env.ACCESS_TOKEN_SECRET}`, {expiresIn: '15M'} )
}

export const generateRefreshToken = (payload: object) => {
    return jwt.sign(payload, `${process.env.REFRESH_TOKEN_SECRET}`, {expiresIn: '30d'} )
}