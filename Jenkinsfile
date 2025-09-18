pipeline {
    agent any

    stages {
       
        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the frontend
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests if any
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying frontend to Nginx directory'
        sh '''
            # Stop Nginx (optional if needed)
            sudo systemctl stop nginx

            # Copy build files to Nginx default folder
            sudo cp -r dist/* /usr/share/nginx/html/

            # Set correct permissions
            sudo chown -R nginx:nginx /usr/share/nginx/html/

            # Start Nginx
            sudo systemctl start nginx
        '''
            }
        }
    }
}
