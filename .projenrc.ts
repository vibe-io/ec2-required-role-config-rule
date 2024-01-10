import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kevin Lucas',
  authorAddress: 'Pharrox@users.noreply.github.com',
  cdkVersion: '2.118.0',
  defaultReleaseBranch: 'master',
  gitignore: [
    '/.vscode/',
  ],
  jsiiVersion: '~5.3.0',
  name: 'ec2-required-role-config-rule',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/vibe-io/ec2-required-role-config-rule.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();