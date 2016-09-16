require 'bundler'
Bundler.require

use Rack::Reloader, 0
require './main'
run Sinatra::Application
