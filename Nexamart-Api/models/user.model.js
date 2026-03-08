export default (mongoose) => {

  const schema = new mongoose.Schema(
    {
      name: String,
      email: String,
      address: String,
      phone_number: String,
      uid: String
    },
    {
      timestamps: true
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("user", schema);

  return User;
};