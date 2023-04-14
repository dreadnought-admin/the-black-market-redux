class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :bio, :instagram_handle, 
  :country, :avatar

  has_many :watches
  has_many :comments
end
