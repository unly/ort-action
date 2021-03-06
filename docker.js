const core = require('@actions/core');
const github = require('@actions/github');
const dockerCLI = require('docker-cli-js');
const Docker = dockerCLI.Docker;

const docker = new Docker();

function main() {
    var pw = process.env.SECRETS_DOCKER_PW
    console.log(pw)
    if (pw == 'password') {
        console.log('correct password');
    } else {
        console.log('failed password');
    }

    var pw2 = process.env.DOCKER_PW
    console.log(pw2)
    if (pw2 == 'password') {
        console.log('correct password');
    } else {
        console.log('failed password');
    }

    docker.command('run hello-world');
}

main();
