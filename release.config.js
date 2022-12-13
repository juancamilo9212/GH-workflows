module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/juancamilo9212/GH-workflows",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        ["@semantic-release/github",{
            assets: [
                { path: "build.zip",label:"Build"},
                { path: "coverage.zip",label:"Test coverage"}
            ]
        }],
    ],
};
