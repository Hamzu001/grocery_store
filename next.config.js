/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DB_LOCAL_URI:"mongodb://0.0.0.0:27017/grocery"
    }
}

module.exports = nextConfig
