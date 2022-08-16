const mongoose = require('mongoose')

  // Connect to the MongoDB cluster
async function connect() {
  const mongoAtlasUri = 'mongodb+srv://hakida123:6OVbzUR2r08WdLlh@cluster0.tvxsx.mongodb.net/?retryWrites=true&w=majority'

  await mongoose
    .connect(
      mongoAtlasUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(() => console.log('Connect to database successfully!'))
    .catch((error) => console.log('Error: connect to database failed!!!', error))
}

module.exports = { connect }
