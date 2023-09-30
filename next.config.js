/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        // DB_LOCAL_URI:"mongodb://0.0.0.0:27017/grocery",
        DB_URI:"mongodb+srv://hamzazahid:3ehM4UGQitLcPKgH@cluster0.jgkdgq0.mongodb.net/grocery"
    }
}

module.exports = nextConfig
