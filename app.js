const fs = require('fs')
fs.writeFileSync('catatan.txt','Nama Saya Indah Chania')
fs.appendFileSync('catatan.txt','Saya tinggal di Padang')

const catatan = require('./catatan.js')
const command = process.argv[2]
console.log(process.argv)
if (command === 'tambah'){
    console.log('Tambah Catatan')
} else if (command === 'hapus') {
    console.log('Hapus Catatan')
}

const pesan = catatan
console.log(pesan)

const validator = require('validator')
const ambilCatatan = require('./catatan.js')
console.log(pesan)
console.log(validator.isURL('https://elearning.unp.ac.id'))

const chalk = require('chalk');
const successText = chalk.blue('print warna biru sukses');
const successText2 = chalk.yellow('print warna kuning sukses');
const successText3 = chalk.magenta('print warna magenta sukses');
console.log(successText);
console.log(successText2);
console.log(successText3);

const yargs = require('yargs')
const { argv } = require('process')
// Kustomisasi versi yargs
yargs.version('10.1.0')

//Membuat perintah (command) 'tambah'
yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul Catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi Catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        catatan.tambahCatatan(argv.judul, argv.isi)
    }
})

//Perintah hapus
yargs.command({
    command: 'hapus',
    describe: 'hapus catatan',
    builder: {
        judul: {
            describe: 'Judul Catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (){
        catatan.hapusCatatan(argv.judul)
    }
})

//Perintah list
yargs.command({
    command: 'list',
    describe: 'list catatan',
    handler: function () {
        catatan.listCatatan();
    }
})

//Perintah read
yargs.command({
    command: 'read',
    describe: 'baca catatan',
    builder: {
        judul: {
            describe: 'Judul Catatan yang akan dibaca',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.bacaCatatan(argv.judul);
    }
})

//letakan bagian pada baris terakhir
yargs.parse()