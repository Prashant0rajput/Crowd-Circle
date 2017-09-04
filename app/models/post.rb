class Post < ActiveRecord::Base
	belongs_to :user
	has_many :likes
	has_many :users, through: :likes
	has_many :comments

	geocoded_by :ip_address,
  	:latitude => :lat, :longitude => :long
	after_validation :geocode
 
	mount_uploader :image , ImageUploader
	mount_uploader :video , VideoUploader

end
