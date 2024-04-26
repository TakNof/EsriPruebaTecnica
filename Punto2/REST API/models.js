import mongoose from 'mongoose';

const Enterprice = mongoose.model('Enterprice', new mongoose.Schema({
    name: { type: String, required: true },
    created_at: { type: Date, required: true },
    update_at: { type: Date, required: true }
}));

const User = mongoose.model('User', new mongoose.Schema({
        username: { type: String, required: true },
        password_hashed: { type: String, required: true },
        professional_headline: { type: String, required: true },
        created_at: { type: Date, required: true },
        update_at: { type: Date, required: true },
        project_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project',
            required: true
        },
        enterprise_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Enterprise',
            required: true
        }
    }).pre('save', function(next) {
        const currentDate = new Date();

        if (!this.created_at) {
            this.created_at = currentDate;
        }

        this.update_at = currentDate;

        next();
}));

const Project = mongoose.model('Project', new mongoose.Schema({
        description: { type: String, required: true },
        projectname: { type: String, required: true },
        start_date: { type: Date, required: true },
        end_date: { type: Date, required: true },
        created_at: { type: Date, required: true },
        update_at: { type: Date, required: true },
        state: { type: String, required: true },
        enterprise_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Enterprise',
            required: true
        }
    }).pre('save', function(next) {
        const currentDate = new Date();

        if (!this.created_at) {
            this.created_at = currentDate;
        }

        this.update_at = currentDate;

        next();
}));

const User_Project = mongoose.model('User_Project', new mongoose.Schema({
        user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
        },
        project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
        }
    }).pre('save', function(next) {
        const currentDate = new Date();

        if (!this.created_at) {
            this.created_at = currentDate;
        }

        this.update_at = currentDate;

        next();
}));

export {Enterprice, User, Project, User_Project};