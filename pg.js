const { Pool } = require("pg")

const pool = new Pool({
	host: "ziggy.db.elephantsql.com",
	user: "cndovuma",
	password: "Uozl4tnGIWlpz0U4-VQ7cV2GalY344Nd",
	database: "cndovuma",
	port: 5432,
})

const fetchAll = async (SQL, ...params) => {

	const client = await pool.connect()

	try {

		const { rows } = await client.query(SQL, params)

		return rows
	}
	catch(err) {
		console.error(err)
	}
	finally {
		client.release()
	}
}

module.exports.fetchAll = fetchAll
