import path from 'path';
import { InternalServerError } from '../utils/errors.js';

const imageRender = (req, res, next) => {
    try {
        let fileName = req.params.fileName;
        let filePath = path.join('images', fileName);
        res.sendFile(filePath);
    } catch (error) {
        return next(new InternalServerError(500, error.message));
    }
};


const videoRender = (req, res, next) => {
    try {
        let fileName = req.params.fileName;
        let filePath = path.join('videos', fileName);
        res.sendFile(filePath);
    } catch (error) {
        return next(new InternalServerError(500, error.message));
    }
};


const downloadVideo = (req, res, next) => {
    try {
        let fileName = req.params.fileName;
        let filePath = path.join(process.cwd(), 'uploads', 'videos', fileName);
        res.download(filePath);
    } catch (error) {
        return next(new InternalServerError(500, error.message));
    }
};


export default {
    imageRender,
    videoRender,
    downloadVideo,
}