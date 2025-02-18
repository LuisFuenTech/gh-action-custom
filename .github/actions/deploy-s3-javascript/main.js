const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    const bucketName = core.getInput('bucket-name', { required: true })
    const bucketRegion = core.getInput('bucket-region')
    const sourceDir = core.getInput('source-dir', { required: true })

    core.notice('Hello from my custom JavaScript Action', { bucketName, bucketRegion, sourceDir });
}

run()