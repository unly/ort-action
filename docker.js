const dockerCLI = require('docker-cli-js');
const Docker = dockerCLI.Docker;

const docker = new Docker();

docker.command('run hello-world');

docker.command('run hello-world');
