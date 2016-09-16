require "sinatra"
require "sinatra/reloader"
require "sqlite3"

use Rack::Auth::Basic do |username, password|
  username == ENV['MZ_ID'] && password == ENV['MZ_PW']
end

get "/" do
  @page_title = "ホーム"
  erb :index
end

get "/books" do
  @page_title = "電子書籍管理システム"
  erb :books
end

get "/index.html" do
  redirect "/"
end

get "/api/regenerate" do
  #再生成中
  check
  #再生成完了
end

def check
  file = File.open('manga.dat','a')
  p Dir.glob("/mnt/share/電子書籍/漫画/**/*"){|f| file.puts f }
  file.close
end