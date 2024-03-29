import multer from 'multer'
import { access, mkdir } from 'node:fs/promises';

const storage = multer.diskStorage({
    destination: async (req, file, next) => {
        const fileDir = './uploads';

        try {
            await access(fileDir);

        } catch (error) {
            // console.log('Error')
            mkdir(fileDir)
        }

         next(null, fileDir);
    },
    filename: (req, file, next) => {
        const fileSplit = file.originalname.split('.');
        const format = fileSplit[fileSplit.length - 1];
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        next(null, uniqueSuffix + 'suo.' + format);
    }
});
const upload = multer({
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (req, file, next) => {
        const formats = [
            'image/jpeg',
            'image/png',
            'image/svg+xml'
        ];

        if(formats.includes(file.mimetype)) {
            next(null, true)
        } else {
            next(null, false)
        }
    },
 storage: storage,
});
export default upload;