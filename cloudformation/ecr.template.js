import cf from '@openaddresses/cloudfriend';

export default cf.merge({
    Description: 'Template for @tak-ps/ecr',
    Parameters: {
        GitSha: {
            Description: 'GitSha that is currently being deployed',
            Type: 'String'
        },
    },
    Resources: {
        Repository: {
            Type: 'AWS::ECR::Repository',
            Properties: {
                RepositoryName: cf.stackName,
                RepositoryPolicyText: {
                    Version: "2012-10-17",
                    Statement: [{
                        Effect: 'Allow',
                        Principal: '*',
                        Action: [
                            "ecr:BatchGetImage",
                            "ecr:GetDownloadUrlForLayer"
                        ]
                    }]
                }
            }
        },
    },
});
