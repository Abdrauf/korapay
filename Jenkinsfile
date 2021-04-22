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

}