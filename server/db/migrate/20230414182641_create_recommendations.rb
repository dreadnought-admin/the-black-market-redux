class CreateRecommendations < ActiveRecord::Migration[7.0]
  def change
    create_table :recommendations do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :user_review
      t.timestamps
    end
  end
end
