const fs = require('fs')

function resetFile(filePath) {
    let jsonData = JSON.stringify({ data: [] });
    fs.writeFile(filePath, jsonData, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
}

function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch (err) {
            return cb && cb(err)
        }
    })
}

function addItem(filePath, obj) {
    jsonReader(filePath, (err, res) => {
        if (err) {
            console.log('Error reading file:', err)
            return
        }

        res['data'].push(obj);
        fs.writeFile(filePath, JSON.stringify(res, null, 2), (err) => {
            if (err) {
                console.log('Error writing file:', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    })
};

module.exports = {
    addItem,
    resetFile
};