//mongooseをロードして
const mongoose = require("mongoose");
//subscriberSchemaを定義。プロパティはname,email,zipCode
const subscriberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true //nameプロパティ
    },
    email: {//emailプロパティも必須
        type: String,
        required: true,
        lowercase:true, //lowercaseプロパティを追加
        unique: true
    },
    zipCode: { //zipCodeプロパティにカスタムエラーメッセージを設定
        type: Number,
        min: [10000,"Zip code too short"],
        max: 99999
    }
    });
module.exports = mongoose.model("Subscriber",subscriberSchema);
//購読者のフルネームを取得するインスタンスメソッドを追加
subscriberSchema.methods.getInfo = function() {
};

//同じZIPコードを持つ購読者を見つけるインスタンスメソッドを追加
subscriberSchema.methods.findLocalSubscribers = function() {
    return this.model("Subscriber")
    .find({zipCode: this.zipCode})
    .exec(); //findメソッドを使うためにSubscriberモデルをアクセスする
};