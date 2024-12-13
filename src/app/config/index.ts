import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BYCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASS,
  NODE_ENV: process.env.NODE_ENV,
  jwt_access_secret: process.env.JWT_ACCESS_SECTET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN 
}
