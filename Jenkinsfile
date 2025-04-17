pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                bat 'npm test > REPORT.md'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'REPORT.md', fingerprint: true
        }
    }
}
