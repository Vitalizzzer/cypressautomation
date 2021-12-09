pipeline {
    agent {
        docker { image 'cypress/included:3.2.0' --entrypoint=''}
    }
    stages {
        stage('Test') {
            steps {
                sh 'npm run runtests'
            }
        }
    }
}
