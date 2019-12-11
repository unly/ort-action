const dockerCLI = require('docker-cli-js');
const Docker = dockerCLI.Docker;

const docker = new Docker();

function main() {    
    var pw = process.argv[2]
    console.log(pw)
    if (pw == 'password') {
        console.log('correct password');
    } else {
        console.log('failed password');
    }

    docker.command('run hello-world');
}

main();
