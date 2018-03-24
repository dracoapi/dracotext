require('dotenv').config();
const fs = require('fs');
const draconode = require('draconode');

async function write(data) {
    let stream = fs.createWriteStream(`languages/generated.${data.lang}.js`);
    stream.write(`module.exports = {\n`);
    for (let value of data.values) {
        stream.write(`    '${value.key}': '${value.value}',\n`);
    }
    stream.write('};\n');
    stream.end();
}

async function get(lang) {
    const client = new draconode.Client({
        lang,
        proxy: process.env.PROXY,
    });

    await client.ping(true);
    const config = await client.boot({
        login: 'Google',
        deviceid: process.env.DEVICE_ID,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
    });
    const texts = config.clientTexts;
    const data = {
        lang: lang.toLowerCase(),
        values: [],
    };
    for (let [key, value] of texts) {
        if (key === 'key.quest.weekly.descr.getFirstFragment') {
            ''.toString();
        }
        data.values.push({
            key,
            value: value.replace(/'/g, '\\\'').replace(/\r?\n/g, ' '),
        });
    }
    write(data);
}

async function main() {
    const languages = [
        'English',
        'French',
        'German',
        'Spanish',
    ];
    for (let lang of languages) {
        await get(lang);
    }
}

main()
.then(() => console.log('Done.'))
.catch(e => console.error(e));