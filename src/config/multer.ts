import multer from 'multer'
import {resolve } from 'path'

export const upload = multer({
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
            const extension = file.originalname.split('-').pop()
            cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`)
        }
    })
})