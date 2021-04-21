node('master') {

    stage("Git checkout"){

git credentialsId: 'ae1d3cc1-3637-402c-ae52-6a8fa5794c03', url: 'https://shegmovic@bitbucket.org/realshegmovic/twucypress.git'

    }

    stage("NPM Package"){

    bat label: 'Install NPM', script: 'npm install --save-dev cypress'

    }

    stage("Compile & Run test"){


        bat label: 'Run test', script: 'npm run chrome'
    }

}