const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = async function() {

    let Test = mongoose.model('mastertype', new Schema());
    let result = await Test.findOne({ _id: '5d10eedafb6fc00e79af6957' }, '-_id', { lean: true })

    Object.keys(result).forEach(function(key) {
        let a = Object.assign(key, result[key])
    });
    // let attr = new Schema(result, { strict: false })

    // const TestSchema = new Schema({
    //     name: {
    //         type: String
    //     },
    //     comments: [attr]
    // });

    // return mongoose.model('test', TestSchema);
}

//****** */
// const testFnc = async() => {
//     let Test = mongoose.model('mastertype', new Schema());
//     let result = await Test.findOne({ _id: '5d10eedafb6fc00e79af6957' }, '-_id', { lean: true })

//     // let jsonFromDb = { text: { type: 'String', required: 'true' }, name: { type: 'String' } }
//     let attr = new Schema(result, { strict: false })

//     const TestSchema = new Schema({
//         name: {
//             type: String
//         },
//         comments: [attr]
//     });

//     return TestSchema

//     // const model = Test = mongoose.model('test', TestSchema);
//     // return model
// }

// module.exports = testFnc().then(arg => mongoose.model('test', arg));
//****** */

// let Test = mongoose.model('mastertype', new Schema());
// let result = Test.findOne({ _id: '5d10eedafb6fc00e79af6957' }).exec()
// console.log(result)
// Test.findOne({ _id: '5d10eedafb6fc00e79af6957' }, '-_id', (err, doc) => {
// let attr = new Schema(doc)
// const TestSchema = new Schema({
//     name: {
//         type: String
//     },
//     comments: [new Schema({
//         Name: { type: String },
//         Text: { type: String }
//     }, { strict: false })]
// });

// console.log(attr)

// module.exports = Test = mongoose.model('test', TestSchema);
// // })
// let jsonFromDb = { text: { type: 'String', required: 'true' }, name: { type: 'String' } }
// let attr = new Schema(jsonFromDb, { strict: false })

// const TestSchema = new Schema({
//     name: {
//         type: String
//     },
//     comments: [attr]
// });

// module.exports = Test = mongoose.model('test', TestSchema);