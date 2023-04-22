class RecordSerializer < ActiveModel::Serializer
  attributes :id, :album_name, :artist_name,
  :album_cover, :condition, :genre, :release_date, 
  :release_description, :record_labels, :spotify_link, :price
  
  has_one :user
  has_many :comments
end
