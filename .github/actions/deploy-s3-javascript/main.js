const core = require('@actions/core');
//const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    const bucketName = core.getInput('bucket-name', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const sourceDir = core.getInput('source-dir', { required: true });

    const s3Uri = `s3://${bucketName}`;
    exec.exec(`aws s3 sync ${sourceDir} ${s3Uri} --region ${bucketRegion}`);

    core.notice('Hello from my custom JavaScript Action', { bucketName, bucketRegion, sourceDir });
}

run()