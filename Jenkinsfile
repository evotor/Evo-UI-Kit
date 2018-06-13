pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '10')) 
  }
  stages {
    stage('Build') {
      steps {
        sh "docker build -t docker-registry.market.local/evo-ui-kit:$BUILD_TAG ."
      }
    }
    
    stage('Publish') {
      steps {
        sh "docker push docker-registry.market.local/evo-ui-kit:$BUILD_TAG"
      }
    }
    
    stage('Deploy') {
      steps {
        sh """helm upgrade --install \
          --kube-context test-cluster \
          --namespace test \
          --values ./helm/values/test.yaml \
          --set image.tag=$BUILD_TAG \
          --wait \
          evo-ui-kit \
          ./helm/evo-ui-kit
        """
      }
    }
  }
  // post { 
  //   failure {
  //     reportToTelegram()
  //   }
  // }
}
