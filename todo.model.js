module.exports = mongoose => {
    const Todo = mongoose.model(
        "todo",
        mongoose.Schema(
            {
                title: String,
                description: String,
                date : Date,
                checkoff: Boolean
            },
            { timestamps: true }
        )
    );

    return Todo;
};
