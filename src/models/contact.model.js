import mongoose, { model } from 'mongoose';

let Schema = mongoose.Schema;

let ContactSchema = new Schema({
    userId: String,
    contactId: String,
    status: { type: Boolean, default: false },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: null },
    deletedAt: { type: Number, default: null }
});

ContactSchema.statics = {
    getAll() {
        return this.find();
    },
    delete(condition) {
        return this.deleteOne(condition, (err) => {
            if (err)
                console.log(err);
        });
    },
    createNew(contact) {
        return this.create(contact);
    }

};

module.exports = mongoose.model("contact", ContactSchema);