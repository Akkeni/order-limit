import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert a base64 string to a Blob
const base64ToBlob = (base64, mimeType) => {
    const byteCharacters = atob(base64.split(',')[1]);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);

        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: mimeType });
};

// Function to get JPEG and PNG files and convert them to base64 strings grouped by folder name
const getGroupedBase64Images = (directoryPath) => {
    let groupedBase64Images = {};

    const walkSync = (currentDirPath) => {
        const files = fs.readdirSync(currentDirPath, { withFileTypes: true });

        for (const file of files) {
            const filePath = path.join(currentDirPath, file.name);
            if (file.isDirectory()) {
                walkSync(filePath); // Recurse into subdirectories
            } else if (file.isFile() && /\.(jpg|jpeg|png)$/i.test(file.name)) {
                const folder = path.basename(currentDirPath);
                const fileData = fs.readFileSync(filePath, { encoding: 'base64' }); // Read file as base64 string
                const mimeType = file.name.endsWith('.png') ? 'image/png' : 'image/jpeg';
                const base64Image = `data:${mimeType};base64,${fileData}`;

                if (!groupedBase64Images[folder]) {
                    groupedBase64Images[folder] = [];
                }

                groupedBase64Images[folder].push(base64Image);
            }
        }
    };

    walkSync(directoryPath);
    return groupedBase64Images;
};

// Function to get Blob URLs from grouped base64 images
export const getBlobs = () => {
    const groupedBase64Images = getGroupedBase64Images(directoryPath);
    const blobs = {};

    Object.keys(groupedBase64Images).forEach(folder => {
        blobs[folder] = groupedBase64Images[folder].map(base64 => {
            const mimeType = base64.split(';')[0].split(':')[1]; // Extract MIME type from base64 string
            return URL.createObjectURL(base64ToBlob(base64, mimeType));
        });
    });

    console.log("Blob URLs: ", blobs); // Log blobs to console
    return groupedBase64Images;
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, "../resources/images");
console.log('directoryPath ', directoryPath);




/*import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


// Function to get JPEG files and convert them to base64 strings grouped by folder name
const getGroupedBase64Images = () => {
    let groupedBase64Images = {};

    const walkSync = (currentDirPath) => {
        const files = fs.readdirSync(currentDirPath, { withFileTypes: true });

        for (const file of files) {
            const filePath = path.join(currentDirPath, file.name);
            console.log('filePath is ', filePath);

            if (file.isDirectory()) {
                walkSync(filePath); // Recurse into subdirectories
            } else if (file.isFile() && /\.(jpg|jpeg|png)$/i.test(file.name)) {
                const folder = path.basename(currentDirPath);
                const fileData = fs.readFileSync(filePath, { encoding: 'base64' }); // Read file as base64 string
                const base64Image = `data:image/png;base64,${fileData}`;

                if (!groupedBase64Images[folder]) {
                    groupedBase64Images[folder] = [];
                }
                //console.log('base64Image ', base64Image);
                blobs[file.name] = URL.createObjectURL(base64ToBlob(base64Image, mimeType));
                groupedBase64Images[folder].push(base64Image);
            }
        }
    };

    walkSync(directoryPath); // Accessing directoryPath from here
    return groupedBase64Images;
};



const base64ToBlob = (base64, mimeType) => {
    const byteCharacters = atob(base64.split(',')[1]);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);

        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: mimeType });
}



export function getBlobs() {
    const groupedBase64Images = getGroupedBase64Images();
    console.log('getBased64Images ', groupedBase64Images);
    console.log("blobs ", blobs);
    return blobs;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('__dirname ', __dirname);
const blobs = {};
const mimeType = 'image/png';

const directoryPath = path.join(__dirname, "../resources/images");
console.log('directoryPath ', directoryPath);

/*const blob1 = URL.createObjectURL(base64ToBlob(image1, mimeType));
const blob2 = URL.createObjectURL(base64ToBlob(image2, mimeType));
const blob3 = URL.createObjectURL(base64ToBlob(image3, mimeType));
const blob4 = URL.createObjectURL(base64ToBlob(image4, mimeType));
const blob5 = URL.createObjectURL(base64ToBlob(image5, mimeType));
const instruction_blob1 = URL.createObjectURL(base64ToBlob(instruction1, mimeType));

// console.log(blob1, blob2, blob3, blob4);

export { blob1, blob2, blob3, blob4, blob5, instruction_blob1, videoBlobUrl1 };*/



