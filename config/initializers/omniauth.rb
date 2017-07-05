OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '501514757287-e78jb6dqrsb0qqn250fi58ucuj6ec75b.apps.googleusercontent.com','D0T7Ywz1w79J6Nx1_j248jaN',{client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
  provider :facebook, '1078139498984756','868f49ab8a93c707b4c99e78f89cbe6e',{:client_options => {:ssl => {:ca_file => Rails.root.join("cacert.pem").to_s}}}
OmniAuth.config.full_host = Rails.env.production? ? 'https://domain.com' : 'http://localhost:3000'
end