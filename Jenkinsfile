pipeline {
    agent any
//     parameters {
//         string(name: 'SPEC', defaultValue: "cypress/integration/**/**", description: "Enter the script path to execute" )
//         choice(name: 'BROWSER', ['chrome', 'firefox'], description: "Choose the browser for execution")
//     }
    
    stages {
        stage('Test') {
            steps {            
                sh 'npm run runtests'
            }
        }
    }
}
