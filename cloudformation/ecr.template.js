import cf from '@mapbox/cloudfriend';

export default cf.merge({
    Description: 'Template for @tak-ps/ecr',
    Parameters: {
        GitSha: {
            Description: 'GitSha that is currently being deployed',
            Type: 'String'
        }
    },
    Resources: {
        Type: 'AWS::ECR::Repository',
        Properties: {
            RepositoryName: cf.stackName
        }
    }
}
);
