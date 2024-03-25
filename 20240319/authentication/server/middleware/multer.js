import multer from 'multer';
import { access, mkdir } from 'node:fs/promises';


// Multer diskstorage inicijavimas
const storage = multer.diskStorage({
    //Nurodymas kur failai bus saugomi 

    destination: async (req, file, next) => {
        //Nurodomas direktorijos pavadinimas kur bus saugomi
        const fileDir = './uploads';

        try {
            //Tikriname ar direktorija egzistuoja
            await access(fileDir);
            // console.log('No error')

        } catch (error) {
            //Vykdome veiksmus ivykus klaidaiß

            // console.log('Error')

            //direktorijos sukurimas jei ji neegzistuoja 
            mkdir(fileDir)
        }

         next(null, fileDir);
    },
    filename: (req, file, next) => {
        //    console.log(file.originalname.split('.')[1]);

       //Isskaidom originaalaus failo pavadinima i masyva pagal tasko simboli
        const fileSplit = file.originalname.split('.');
        //Pasiimti paskutini taska is masyvo
        const format = fileSplit[fileSplit.length - 1];
        //Generuojama unikalus failo pavadinimas siekiant isvengti failo perrasymo
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        //Failo pavadinimo perdavimas
        next(null, uniqueSuffix + 'suo.' + format);
    }
});

//Multer modulio inicijavimas
const upload = multer({
    //Direktorijos nustatymai ku bus talpinami failai
   
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