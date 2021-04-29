node('master') {

    stage("Git checkout"){

git credentialsId: 'c4205323-db4a-4fea-a6e1-91a00204581a', url: 'https://github.com/Abdrauf/korapay.git'
    }

    stage("NPM Package"){

    bat label: 'Install NPM', script: 'npm install --save-dev cypress'

    }

    stage("Compile & Run test"){


        bat label: 'Run test', script: 'npm run chrome'
    }
        stage("Generate Test Report") {

         script: 'npm run merge:reports'
          script: 'npm run create:html:report'

    }

        stage("Send Email Attachment") {

        emailext attachmentsPattern: '**/cypress-tests-report.html',
      body: "${currentBuild.currentResult}: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}",
     recipientProviders: [developers(), requestor()],
     subject: "Jenkins Build ${currentBuild.currentResult}: Job ${env.JOB_NAME}"

    }

}