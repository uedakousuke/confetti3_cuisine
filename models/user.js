const mongoose =require("mongoose"),
{Schema} = mongoose,
//ユーザーのスキーマを作る
var userSchema = new Schema({
    //ファーストネームとラストネームのプロパティ
    name: {
        first: {
            type: String,
            trim: true
        },
        last: {
            type: String,
            trim: true
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    zipCode: {
        type: Number,
        min: [1000,"Zip code too short"],
        max: 99999
    },
    //パスワードのプロパティを追加
    password: {
        type: String,
        required: true
    },
    //ユーザーをコースに繋げるコースプロパティを追加
    courses: [{type: Schema.Types. Objectld,ref:"Course"}],
    //ユーザーを購読者に繋げるsubscribedAccountを追加
    subscribedAccount: {type: Schema.Types. ObjectId,ref:"Subscriber"},
    {
        
    }
})
