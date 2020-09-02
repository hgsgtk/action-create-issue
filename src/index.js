const core = require('@actions/core')
const github = require('@actions/github')

const run = async() => {
    try {
        const pullRequest = github.context.payload
        if (!pullRequest) {
            core.setFailed('Only support GitHub pull request context.')
            return
        }

        // TODO action content
    } catch (e) {
        core.setFailed(e.message)
    }
}

run()
