class User < ActiveRecord::Base
	has_many :posts
  has_many :likes
  has_many :comments

  has_many :follower_mappings, class_name: 'FollowMapping', foreign_key: 'followee_id'
  has_many :followee_mappings, class_name: 'FollowMapping', foreign_key: 'follower_id'
  has_many :followers, through: :follower_mappings
  has_many :followees, through: :followee_mappings

  has_many :friendships
  has_many :received_friendships, class_name: 'Friendship', foreign_key: 'friend_id'
  has_many :active_friends, -> { where(friendships: { accepted: true}) }, through: :friendships, source: :friend
  has_many :received_friends, -> { where(friendships: { accepted: true}) }, through: :received_friendships, source: :user
  has_many :pending_friends, -> { where(friendships: { accepted: false}) }, through: :friendships, source: :friend
  has_many :requested_friendships, -> { where(friendships: { accepted: false}) }, through: :received_friendships, source: :user

  def friends
    active_friends | received_friends
  end

  def pending
      pending_friends | requested_friendships
  end
  
	 def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!
    end
  end
 # fb oauth not working
end
