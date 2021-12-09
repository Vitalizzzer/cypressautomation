pipeline {
    agent {
        docker { image 'cypress/base:10' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'npm run runtests'
            }
        }
    }
}
