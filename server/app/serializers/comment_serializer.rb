class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content
  has_one :user
  has_one :record
end
