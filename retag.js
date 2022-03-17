/** This file helps your action version to be in sync with the current code base */
const { exec } = require("child_process")

exec(`git tag | xargs git tag -d`, ((error, stdout, stderr) => {
    if(error) console.log(`stdout:${error}`)
    if(stderr) console.log(`stderr: ${stderr}`)
    console.log(stdout)
}))
