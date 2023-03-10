// import fs, {existsSync} from 'fs';

const fs = require('fs');
const {existsSync}=require('fs');
// import {move} from 'fs-extra';
const {move} = require('fs-extra');

// import path from 'path';
const path = require('path');

// import {BaseProvider} from '@adminjs/upload';
const {BaseProvider} = require('@adminjs/upload');

const UPLOADS_DIR = process.env.UPLOADS_DIR || 'public/images';

class UploadProvider extends BaseProvider {
    constructor() {
        super(UPLOADS_DIR);
        if (!existsSync(UPLOADS_DIR)) {
            throw new Error(
                `directory: "${UPLOADS_DIR}" does not exists. Create it before running LocalAdapter`
            );
        }
    }

    // * Fixed this method because original does rename instead of move and it doesn't work with docker volume
    async upload(file, key) {
        const filePath =
            process.platform === 'win32' ? this.path(key) : this.path(key).slice(1); // adjusting file path according to OS
        await fs.promises.mkdir(path.dirname(filePath), {recursive: true});
        await move(file.path, filePath, {overwrite: true});
    }

    async delete(key, bucket) {
        await fs.promises.unlink(
            process.platform === 'win32'
                ? this.path(key, bucket)
                : this.path(key, bucket).slice(1)
        ); // adjusting file path according to OS
    }



    // eslint-disable-next-line class-methods-use-this
    path(key, bucket) {
        // Windows doesn't requires the '/' in path, while UNIX system does
        return process.platform === 'win32'
            ? `${path.join(bucket || this.bucket, key)}`
            : `/${path.join(bucket || this.bucket, key)}`;
    }
}

// export {UploadProvider};


module.exports={UploadProvider};