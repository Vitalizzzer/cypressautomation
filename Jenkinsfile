pipeline {
    agent {
        docker { image 'cypress/included:3.2.0'}
    }
    stages {
        stage('Test') {
            steps {
                sh 'npm ci'
                sh 'npm run cy:verify'
                //sh 'npm run runtests'
            }
        }
    }
}
